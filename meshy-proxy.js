// netlify/functions/meshy-proxy.js
// Called at: /.netlify/functions/meshy-proxy

const MESHY = 'https://api.meshy.ai/openapi/v1';

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

function respond(code, data) {
  return {
    statusCode: code,
    headers: HEADERS,
    body: JSON.stringify(data)
  };
}

exports.handler = async function(event, context) {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: HEADERS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return respond(405, { error: 'Method not allowed' });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return respond(400, { error: 'Invalid JSON' });
  }

  const { action, apiKey, imageData, taskId } = payload;

  if (!apiKey || !apiKey.startsWith('msy-')) {
    return respond(400, { error: 'Invalid or missing API key. Must start with msy-' });
  }

  const auth = {
    'Authorization': 'Bearer ' + apiKey,
    'Content-Type': 'application/json'
  };

  try {
    // ── GET CREDITS ─────────────────────────────────────────
    if (action === 'credits') {
      const r = await fetch(MESHY + '/credits', { headers: auth });
      const d = await r.json();
      if (!r.ok) return respond(r.status, { error: d.message || 'Auth failed' });
      return respond(200, d);
    }

    // ── CREATE TASK ──────────────────────────────────────────
    if (action === 'create') {
      if (!imageData) return respond(400, { error: 'No image data provided' });
      const r = await fetch(MESHY + '/image-to-3d', {
        method: 'POST',
        headers: auth,
        body: JSON.stringify({
          image_url: imageData,
          enable_pbr: true,
          should_remesh: true,
          should_texture: true,
          ai_model: 'meshy-4',
          target_polycount: 30000
        })
      });
      const d = await r.json();
      if (!r.ok) return respond(r.status, { error: d.message || 'Task creation failed' });
      // Return task ID as plain string
      return respond(200, d.result);
    }

    // ── CHECK STATUS ─────────────────────────────────────────
    if (action === 'status') {
      if (!taskId) return respond(400, { error: 'No taskId provided' });
      const r = await fetch(MESHY + '/image-to-3d/' + taskId, { headers: auth });
      const d = await r.json();
      if (!r.ok) return respond(r.status, { error: d.message || 'Status check failed' });
      return respond(200, d);
    }

    return respond(400, { error: 'Unknown action: ' + action });

  } catch (e) {
    return respond(500, { error: 'Function error: ' + e.message });
  }
};
