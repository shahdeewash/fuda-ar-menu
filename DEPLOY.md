# Deploy FÜDA to Netlify with Functions (3 commands)

Drag & drop does NOT deploy Netlify Functions.
Use the Netlify CLI instead — takes 2 minutes.

## On your computer (Mac, Windows, or Linux):

### Step 1 — Install Netlify CLI (one time only)
Open Terminal (Mac) or Command Prompt (Windows) and run:

```
npm install -g netlify-cli
```

Don't have Node.js? Download it free from nodejs.org first.

### Step 2 — Go into the fuda-complete folder

```
cd path/to/fuda-complete
```

Example on Mac:
```
cd ~/Downloads/fuda-complete
```

Example on Windows:
```
cd C:\Users\YourName\Downloads\fuda-complete
```

### Step 3 — Login and deploy

```
netlify login
```
(opens browser, click Authorize)

```
netlify deploy --prod
```
(deploys everything including functions)

### Done!
Your site URL will appear in the terminal.
The deploy log will show:
  ✅ 1 function deployed
     └── meshy-proxy

Then go to yoursite.netlify.app/meshy-generator.html and paste your Meshy API key.

---

## Alternative: Use GitHub (no terminal needed)

1. Create free account at github.com
2. Create new repository called fuda-ar-menu
3. Upload ALL files from fuda-complete/ to GitHub
   (drag the entire folder into the GitHub upload area)
4. Go to netlify.com → Add new site → Import from Git
5. Select your GitHub repo → Deploy

GitHub preserves the netlify/functions/ subfolder structure
which drag & drop does not.
