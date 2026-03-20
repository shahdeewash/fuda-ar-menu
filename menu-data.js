// FÜDA GLOBAL STREET BITES — Complete Menu with Real DoorDash Images
// All images sourced from official FÜDA DoorDash listing

const FUDA_MENU = {

  momos: {
    category: 'Nepalese Dumplings',
    categoryIcon: '🥟',
    categoryDesc: 'Handcrafted Himalayan dumplings, prepared fresh daily',
    image: 'images/chicken-momo.jpg',
    items: [
      {
        id: 'chicken-momo-entree',
        name: 'Chicken Momo',
        subtitle: 'Entree · 6 pieces',
        desc: 'Traditional Himalayan chicken dumplings, handcrafted fresh daily with authentic Nepalese spices',
        prices: { Steam: 12.90, Fry: 13.90, 'Chilli 🌶️': 14.90, Jhol: 13.90, Sadeko: 13.90 },
        defaultPrice: 12.90,
        tags: ['Popular', 'Halal'],
        arShape: 'momos', arColor: 0xE8C896,
        img: 'images/chicken-momo-6pcs.jpg'
      },
      {
        id: 'paneer-momo-entree',
        name: 'Paneer Momo',
        subtitle: 'Entree · 6 pieces · Vegetarian',
        desc: 'Soft cottage cheese dumplings with herbs and spices. A vegetarian Himalayan delight.',
        prices: { Steam: 13.90, Fry: 14.90, 'Chilli 🌶️': 15.90, Jhol: 14.90, Sadeko: 14.90 },
        defaultPrice: 13.90,
        tags: ['Vegetarian', '🌱'],
        arShape: 'momos', arColor: 0xFFF8DC,
        img: 'images/paneer-momo-6pcs.jpg'
      },
      {
        id: 'buff-momo-entree',
        name: 'Buff Momo',
        subtitle: 'Entree · 6 pieces · Buffalo meat',
        desc: 'Authentic Nepalese buffalo meat dumplings — the most traditional style from Kathmandu streets.',
        prices: { Steam: 14.90, Fry: 15.90, 'Chilli 🌶️': 16.90, Jhol: 15.90, Sadeko: 15.90 },
        defaultPrice: 14.90,
        tags: ['Authentic', 'Halal'],
        arShape: 'momos', arColor: 0xC8A070,
        img: 'images/buff-momo.jpg'
      },
      {
        id: 'vegan-momo-entree',
        name: 'Vegan Momo',
        subtitle: 'Entree · 6 pieces · Vegan',
        desc: 'Plant-based dumplings packed with seasoned vegetables and tofu. 100% vegan certified.',
        prices: { Steam: 14.90, Fry: 15.90, 'Chilli 🌶️': 16.90, Jhol: 15.90, Sadeko: 15.90 },
        defaultPrice: 14.90,
        tags: ['Vegan', '🌿'],
        arShape: 'momos', arColor: 0xA8D870,
        img: 'images/vegan-momo-6-pcs.jpg'
      },
      {
        id: 'paneer-momo-platter',
        name: 'Paneer Momo Platter',
        subtitle: 'Large platter · Share',
        desc: 'Generous platter of paneer momos, perfect for sharing. Handcrafted fresh daily.',
        prices: { default: 27.99 },
        defaultPrice: 27.99,
        tags: ['Share', 'Vegetarian', '❤️'],
        arShape: 'momos_platter', arColor: 0xE8C896,
        img: 'images/paneer-momo-platter.jpg'
      },
      {
        id: 'chocolate-momo',
        name: 'Chocolate Momo',
        subtitle: '2 pieces · Dessert',
        desc: 'Sweet chocolate-filled dessert dumplings. A unique FÜDA signature treat!',
        prices: { default: 4.99 },
        defaultPrice: 4.99,
        tags: ['Dessert', '🍫', 'Signature'],
        arShape: 'momos_choco', arColor: 0x6B3A1F,
        img: 'images/chocolate-momo-2pcs.jpg'
      },
      {
        id: 'samosa',
        name: 'Samosa',
        subtitle: 'Street snack',
        desc: 'Crispy golden pastry filled with spiced potatoes and peas. A classic South Asian street snack.',
        prices: { default: 5.99 },
        defaultPrice: 5.99,
        tags: ['Vegan', 'Crispy'],
        arShape: 'spring_roll', arColor: 0xD4A060,
        img: 'images/samosa.jpg'
      },
      {
        id: 'momo-bubble-meal',
        name: 'Momo + Bubble Meal',
        subtitle: 'Combo deal',
        desc: 'Steamed momos paired with your choice of bubble tea. The perfect FÜDA combo.',
        prices: { default: 19.90 },
        defaultPrice: 19.90,
        tags: ['Combo', '🔥', 'Value'],
        arShape: 'momos', arColor: 0xE8C896,
        img: 'images/1-momo-bubble-meal.jpg'
      }
    ]
  },

  kebabs: {
    category: 'Turkish Kebabs',
    categoryIcon: '🥙',
    categoryDesc: 'Authentic Middle Eastern flavors, 100% Halal Certified',
    image: 'images/chicken-shish-wrap.jpg',
    items: [
      {
        id: 'hummus',
        name: 'Hummus',
        subtitle: 'Entree · with pita bread',
        desc: 'Creamy traditional hummus served with warm pita bread. Made fresh in-house.',
        prices: { default: 9.00 },
        defaultPrice: 9.00,
        tags: ['Vegan', '🌱', 'Entree'],
        arShape: 'dip_bowl', arColor: 0xE8D4A0,
        img: 'images/hummus-with-pita-bread.jpg'
      },
      {
        id: 'tzatziki',
        name: 'Tzatziki',
        subtitle: 'Entree · with pita bread',
        desc: 'Greek-style yogurt dip with cucumber and garlic, served with warm pita bread.',
        prices: { default: 9.00 },
        defaultPrice: 9.00,
        tags: ['Vegetarian', 'Entree'],
        arShape: 'dip_bowl', arColor: 0xE8F0E0,
        img: 'images/tzatziki-with-pita-bread.jpg'
      },
      {
        id: 'carrot-dip',
        name: 'Carrot Dip',
        subtitle: 'Entree · with pita bread',
        desc: 'Greek yoghurt, carrot, garlic, olive oil, dill, walnuts served with pita bread.',
        prices: { default: 9.00 },
        defaultPrice: 9.00,
        tags: ['Vegetarian', 'Entree'],
        arShape: 'dip_bowl', arColor: 0xF0A040,
        img: 'images/carrot-dip.jpg'
      },
      {
        id: 'trio-dip',
        name: 'Trio of Dips',
        subtitle: 'Entree · Share',
        desc: 'Tzatziki, hummus and garlic dip served with warm pita bread. Perfect to share!',
        prices: { default: 19.00 },
        defaultPrice: 19.00,
        tags: ['Share', 'Vegetarian', '⭐'],
        arShape: 'trio_dips', arColor: 0xE0D0A8,
        img: 'images/trio-of-dip.jpg'
      },
      {
        id: 'chicken-spring-roll',
        name: 'Chicken Spring Roll',
        subtitle: 'Entree',
        desc: 'Crispy spring roll filled with seasoned chicken. Golden and flavourful.',
        prices: { default: 6.99 },
        defaultPrice: 6.99,
        tags: ['Halal', 'Crispy'],
        arShape: 'spring_roll', arColor: 0xC8A050,
        img: 'images/chicken-spring-roll.jpg'
      },
      {
        id: 'lamb-spring-roll',
        name: 'Lamb Spring Roll',
        subtitle: 'Entree',
        desc: 'Crispy spring roll filled with seasoned lamb. Rich, flavourful, golden.',
        prices: { default: 6.99 },
        defaultPrice: 6.99,
        tags: ['Halal', 'Crispy'],
        arShape: 'spring_roll', arColor: 0xB87040,
        img: 'images/lamb-spring-roll.jpg'
      },
      {
        id: 'mediterranean-salad',
        name: 'Mediterranean Salad',
        subtitle: 'Entree · Fresh',
        desc: 'Fresh crisp Mediterranean vegetables with olives, feta and house dressing.',
        prices: { default: 12.00 },
        defaultPrice: 12.00,
        tags: ['Vegetarian', 'Fresh', '🥗'],
        arShape: 'dip_bowl', arColor: 0x6A9A40,
        img: 'images/mediterranean-salad.jpg'
      },
      {
        id: 'snack-pack',
        name: 'Snack Pack',
        subtitle: 'Loaded fries',
        desc: 'Crispy seasoned fries loaded with sauce, cheese and toppings. The ultimate snack.',
        prices: { default: 13.99 },
        defaultPrice: 13.99,
        tags: ['Popular', '🔥'],
        arShape: 'fries', arColor: 0xE8C65A,
        img: 'images/snack-pack.jpg'
      },
      {
        id: 'chicken-shish-wrap',
        name: 'Chicken Shish Wrap',
        subtitle: 'Wrap',
        desc: 'Pita bread with grilled chicken, lettuce, tomato, onion, sumac and tzatziki or garlic sauce.',
        prices: { default: 18.99 },
        defaultPrice: 18.99,
        tags: ['Bestseller', 'Halal', '🔥'],
        arShape: 'wrap', arColor: 0xD4A878,
        img: 'images/chicken-shish-wrap.jpg'
      },
      {
        id: 'kofta-wrap',
        name: 'Kofta Wrap',
        subtitle: 'Wrap',
        desc: 'Pita bread with grilled Kofta, lettuce, tomato, onion, lemon dressing and sumac.',
        prices: { default: 18.99 },
        defaultPrice: 18.99,
        tags: ['Halal', 'Grilled'],
        arShape: 'wrap', arColor: 0xB87850,
        img: 'images/kofta-wrap.jpg'
      },
      {
        id: 'falafel-haloumi-wrap',
        name: 'Falafel & Haloumi Wrap',
        subtitle: 'Wrap · Vegetarian',
        desc: 'Crispy falafel and grilled haloumi with fresh salad and tahini sauce in warm pita.',
        prices: { default: 18.99 },
        defaultPrice: 18.99,
        tags: ['Vegetarian', '🌱'],
        arShape: 'wrap', arColor: 0xC8A870,
        img: 'images/falafel-and-haloumi-wrap.jpg'
      },
      {
        id: 'chicken-shish-kebab',
        name: 'Chicken Shish',
        subtitle: 'Main · with rice & salad',
        desc: 'Chicken steak or grilled skewer served with salad and pilaf rice. A Turkish classic.',
        prices: { default: 21.99 },
        defaultPrice: 21.99,
        tags: ['Main', 'Halal', 'Rice'],
        arShape: 'kebab_plate', arColor: 0xD4A060,
        img: 'images/chicken-shish-kebab.jpg'
      },
      {
        id: 'lamb-shish-kebab',
        name: 'Lamb Shish',
        subtitle: 'Main · with rice & salad',
        desc: 'Lamb shish skewers served with pilaf rice and salad with tzatziki and hummus.',
        prices: { default: 22.99 },
        defaultPrice: 22.99,
        tags: ['Main', 'Halal', 'Lamb'],
        arShape: 'kebab_plate', arColor: 0xA06040,
        img: 'images/lamb-shish-kebab.jpg'
      },
      {
        id: 'kofta-main',
        name: 'Kofta',
        subtitle: 'Main · with rice & salad',
        desc: 'Grilled Kofta skewer served with salad and pilaf rice. Boldly spiced.',
        prices: { default: 22.99 },
        defaultPrice: 22.99,
        tags: ['Main', 'Halal', 'Grilled'],
        arShape: 'kebab_plate', arColor: 0xB07040,
        img: 'images/kofta-main.jpg'
      },
      {
        id: 'iskender-kebab',
        name: 'Iskender Kebab',
        subtitle: 'Main · Turkish classic',
        desc: 'Thinly sliced doner over pita bread with rich tomato sauce, brown butter and yoghurt.',
        prices: { default: 23.99 },
        defaultPrice: 23.99,
        tags: ['Main', 'Halal', 'Signature'],
        arShape: 'kebab_plate', arColor: 0xC07040,
        img: 'images/iskender-kebab.jpg'
      },
      {
        id: 'lamb-meatball-rice',
        name: 'Lamb Meatball with Rice',
        subtitle: 'Main · with pilaf rice',
        desc: 'Juicy spiced lamb meatballs served on a bed of fragrant pilaf rice with sauce.',
        prices: { default: 22.99 },
        defaultPrice: 22.99,
        tags: ['Main', 'Halal', 'Lamb'],
        arShape: 'kebab_plate', arColor: 0xA05030,
        img: 'images/lamb-meatball-with-rice.jpg'
      },
      {
        id: 'mixed-grill-kebab',
        name: 'Mixed Grill',
        subtitle: 'Main · The full experience',
        desc: 'Chicken, lamb & kofta skewers, chicken and lamb doner with tzatziki, hummus & pilaf rice.',
        prices: { default: 28.99 },
        defaultPrice: 28.99,
        tags: ['Signature', 'Halal', '👑', 'Share'],
        arShape: 'mixed_grill', arColor: 0xB07040,
        img: 'images/mixed-grill-kebab.jpg'
      },
      {
        id: 'dinner-for-two',
        name: 'Dinner for Two',
        subtitle: 'Combo · Feeds 2',
        desc: 'A complete feast for two — kebabs, sides and drinks. The ultimate FÜDA experience.',
        prices: { default: 49.99 },
        defaultPrice: 49.99,
        tags: ['Combo', '❤️', 'Value'],
        arShape: 'mixed_grill', arColor: 0xB07040,
        img: 'images/5-dinner-for-two.jpg'
      },
      {
        id: 'mixed-grill-bubble',
        name: 'Mixed Grill + Bubble',
        subtitle: 'Combo deal',
        desc: 'Mixed grill plate paired with your choice of bubble tea. A complete meal.',
        prices: { default: 35.99 },
        defaultPrice: 35.99,
        tags: ['Combo', '🔥', 'Popular'],
        arShape: 'mixed_grill', arColor: 0xB07040,
        img: 'images/4-mixed-grill-bubble.jpg'
      },
      {
        id: 'wrap-bubble-meal',
        name: 'Wrap + Bubble Meal',
        subtitle: 'Combo deal',
        desc: 'Your choice of kebab wrap paired with any bubble tea drink.',
        prices: { default: 24.99 },
        defaultPrice: 24.99,
        tags: ['Combo', 'Value'],
        arShape: 'wrap', arColor: 0xD4A878,
        img: 'images/2-wrap-bubble-meal.jpg'
      },
      {
        id: 'family-feast',
        name: 'Family Feast',
        subtitle: 'Feeds 4–6 · Share',
        desc: 'The ultimate FÜDA spread — momos, kebabs, dips and drinks for the whole family.',
        prices: { default: 89.99 },
        defaultPrice: 89.99,
        tags: ['Family', '👨‍👩‍👧‍👦', 'Value'],
        arShape: 'mixed_grill', arColor: 0xB07040,
        img: 'images/6-family-feast.jpg'
      }
    ]
  },

  drinks: {
    category: 'Bubble Tea & Coffee',
    categoryIcon: '🧋',
    categoryDesc: 'Premium Asian beverages & specialty coffee',
    image: 'images/salted-caramel-machhiato-boba.jpg',
    items: [
      {
        id: 'salted-caramel-boba',
        name: 'Salted Caramel Macchiato Boba',
        subtitle: 'Boba coffee series',
        desc: 'Rich espresso layered with salted caramel milk and chewy tapioca pearls.',
        prices: { Regular: 7.90, Large: 9.40 },
        defaultPrice: 7.90,
        tags: ['Bestseller', '⭐', 'Coffee'],
        arShape: 'cup_tiger', arColor: 0xC47830,
        img: 'images/salted-caramel-machhiato-boba.jpg'
      },
      {
        id: 'mocha-jelly-boba',
        name: 'Mocha Jelly Boba',
        subtitle: 'Boba coffee series',
        desc: 'Smooth mocha blended with coffee jelly and tapioca pearls. Bold and indulgent.',
        prices: { Regular: 7.90, Large: 9.40 },
        defaultPrice: 7.90,
        tags: ['Bestseller', '☕', 'Coffee'],
        arShape: 'cup_tiger', arColor: 0x5A3020,
        img: 'images/mocha-jelly-boba.jpg'
      },
      {
        id: 'tiramisu-boba',
        name: 'Tiramisu Cream Boba',
        subtitle: 'Boba coffee series',
        desc: 'Tiramisu-inspired coffee boba with mascarpone cream and cocoa. Dessert in a cup.',
        prices: { Regular: 7.90, Large: 9.40 },
        defaultPrice: 7.90,
        tags: ['Signature', '🍰'],
        arShape: 'cup_tiger', arColor: 0x8B5E3C,
        img: 'images/tiramisu-cream-coffee-boba.jpg'
      },
      {
        id: 'spanish-latte-boba',
        name: 'Spanish Latte Boba',
        subtitle: 'Boba coffee series',
        desc: 'Sweetened condensed milk espresso with tapioca pearls. Creamy and strong.',
        prices: { Regular: 7.90, Large: 9.40 },
        defaultPrice: 7.90,
        tags: ['Popular', '☕'],
        arShape: 'cup_milk_tea', arColor: 0xC09060,
        img: 'images/spanish-latte-boba.jpg'
      },
      {
        id: 'vietnamese-boba',
        name: 'Vietnamese Boba Coffee',
        subtitle: 'Boba coffee series',
        desc: 'Traditional Vietnamese iced coffee style with condensed milk and tapioca pearls.',
        prices: { Regular: 7.90, Large: 9.40 },
        defaultPrice: 7.90,
        tags: ['Authentic', '🇻🇳'],
        arShape: 'cup_milk_tea', arColor: 0xA07050,
        img: 'images/vietnamese-boba-coffee.jpg'
      },
      {
        id: 'lychee-rose-oolong',
        name: 'Lychee Rose Oolong',
        subtitle: 'Fruit tea · Lychee jelly',
        desc: 'Delicate oolong tea with lychee flavour and lychee jelly. Floral and refreshing.',
        prices: { Regular: 7.90, Large: 9.40 },
        defaultPrice: 7.90,
        tags: ['Popular', '🌸', 'Floral'],
        arShape: 'cup_lychee', arColor: 0xF0B8C8,
        img: 'images/lychee-rose-oolong.jpg'
      },
      {
        id: 'mango-pomelo-sago',
        name: 'Mango Pomelo Sago',
        subtitle: 'No tea · Mango + sago',
        desc: 'Classic Hong Kong-style mango pomelo sago. Refreshing, fruity, chilled.',
        prices: { Regular: 7.90, Large: 9.40 },
        defaultPrice: 7.90,
        tags: ['Fruity', '🥭', 'Popular'],
        arShape: 'cup_mango', arColor: 0xF5C030,
        img: 'images/mango-pomelo-sago.jpg'
      },
      {
        id: 'passionfruit-pineapple',
        name: 'Passionfruit Pineapple Green',
        subtitle: 'Fruit tea · Passionfruit pop',
        desc: 'Tropical passionfruit and pineapple green tea with popping pearls.',
        prices: { Regular: 7.90, Large: 9.40 },
        defaultPrice: 7.90,
        tags: ['Tropical', '🍍', 'Fizzy'],
        arShape: 'cup_fizz', arColor: 0xF0C030,
        img: 'images/passionfruit-pineapple-green.jpg'
      },
      {
        id: 'yuzu-green-fizz',
        name: 'Yuzu Green Tea Fizz',
        subtitle: 'Sparkling · Aloe optional',
        desc: 'Tangy Japanese yuzu with sparkling green tea. Refreshing and zingy.',
        prices: { Regular: 7.90, Large: 9.40 },
        defaultPrice: 7.90,
        tags: ['Fizzy', '🍋', 'Refreshing'],
        arShape: 'cup_fizz', arColor: 0xD4E870,
        img: 'images/yuzu-green-tea-fizz.jpg'
      },
      {
        id: 'espresso',
        name: 'Espresso',
        subtitle: 'Hot coffee',
        desc: 'Single or double shot of rich, bold espresso.',
        prices: { Single: 4.00, Double: 5.00 },
        defaultPrice: 4.00,
        tags: ['Coffee', '☕'],
        arShape: 'cup_tiger', arColor: 0x3A1A08,
        img: 'images/espresso.jpg'
      },
      {
        id: 'long-black',
        name: 'Long Black',
        subtitle: 'Hot or Iced',
        desc: 'Espresso poured over hot water. Bold and aromatic.',
        prices: { Hot: 5.00, Iced: 5.50 },
        defaultPrice: 5.00,
        tags: ['Coffee', '☕'],
        arShape: 'cup_tiger', arColor: 0x2A1008,
        img: 'images/long-black.jpg'
      },
      {
        id: 'latte',
        name: 'Latte',
        subtitle: 'Hot or Iced',
        desc: 'Smooth espresso with steamed milk. A café classic.',
        prices: { Hot: 5.50, Iced: 6.00 },
        defaultPrice: 5.50,
        tags: ['Coffee', '☕'],
        arShape: 'cup_milk_tea', arColor: 0xC09070,
        img: 'images/latte.jpg'
      },
      {
        id: 'cappucino',
        name: 'Cappuccino',
        subtitle: 'Hot coffee',
        desc: 'Equal parts espresso, steamed milk and froth. The perfect morning coffee.',
        prices: { default: 5.50 },
        defaultPrice: 5.50,
        tags: ['Coffee', '☕'],
        arShape: 'cup_milk_tea', arColor: 0xB08060,
        img: 'images/cappucino.jpg'
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        subtitle: 'Hot coffee',
        desc: 'Double ristretto with velvety microfoam milk. An Aussie staple.',
        prices: { default: 5.50 },
        defaultPrice: 5.50,
        tags: ['Coffee', '☕', 'Popular'],
        arShape: 'cup_milk_tea', arColor: 0xC09870,
        img: 'images/flat-white.jpg'
      },
      {
        id: 'macchiato',
        name: 'Macchiato',
        subtitle: 'Hot coffee',
        desc: 'Espresso with a dollop of steamed milk foam.',
        prices: { default: 5.00 },
        defaultPrice: 5.00,
        tags: ['Coffee', '☕'],
        arShape: 'cup_tiger', arColor: 0x8B5030,
        img: 'images/macchiato.jpg'
      },
      {
        id: 'mocha',
        name: 'Mocha',
        subtitle: 'Hot or Iced',
        desc: 'Espresso with chocolate and steamed milk. Rich and comforting.',
        prices: { Hot: 5.50, Iced: 6.00 },
        defaultPrice: 5.50,
        tags: ['Coffee', '🍫'],
        arShape: 'cup_tiger', arColor: 0x5A3020,
        img: 'images/mocha.jpg'
      },
      {
        id: 'hot-chocolate',
        name: 'Hot Chocolate',
        subtitle: 'Hot drink',
        desc: 'Rich, creamy hot chocolate. The perfect warm treat.',
        prices: { default: 5.50 },
        defaultPrice: 5.50,
        tags: ['🍫', 'Warm'],
        arShape: 'cup_tiger', arColor: 0x6B3A1F,
        img: 'images/hot-chocolate.jpg'
      },
      {
        id: 'piccolo',
        name: 'Piccolo',
        subtitle: 'Hot coffee',
        desc: 'Ristretto topped with warm milk in a small glass. Intense and smooth.',
        prices: { default: 4.50 },
        defaultPrice: 4.50,
        tags: ['Coffee', '☕'],
        arShape: 'cup_tiger', arColor: 0x9B6040,
        img: 'images/piccolo.jpg'
      },
      {
        id: 'ice-latte',
        name: 'Iced Latte',
        subtitle: 'Cold coffee',
        desc: 'Chilled espresso over ice with cold milk. Refreshing and smooth.',
        prices: { default: 6.00 },
        defaultPrice: 6.00,
        tags: ['Coffee', '🧊', 'Iced'],
        arShape: 'cup_milk_tea', arColor: 0xC0A880,
        img: 'images/ice-latte.jpg'
      },
      {
        id: 'ice-long-black',
        name: 'Iced Long Black',
        subtitle: 'Cold coffee',
        desc: 'Bold espresso poured over ice. Clean, punchy, refreshing.',
        prices: { default: 5.50 },
        defaultPrice: 5.50,
        tags: ['Coffee', '🧊', 'Iced'],
        arShape: 'cup_tiger', arColor: 0x2A1008,
        img: 'images/ice-long-black.jpg'
      },
      {
        id: 'coca-cola',
        name: 'Coca-Cola Zero',
        subtitle: 'Cold drink · Can',
        desc: 'Chilled Coca-Cola Zero Sugar can.',
        prices: { default: 4.00 },
        defaultPrice: 4.00,
        tags: ['Cold', '🥤'],
        arShape: 'can', arColor: 0xCC0000,
        img: 'images/coca-cola-zero-sugar-can.jpg'
      },
      {
        id: 'sprite',
        name: 'Sprite',
        subtitle: 'Cold drink · Can',
        desc: 'Crisp and refreshing Sprite lemon-lime soda.',
        prices: { default: 4.00 },
        defaultPrice: 4.00,
        tags: ['Cold', '🥤'],
        arShape: 'can', arColor: 0x00AA44,
        img: 'images/sprite-can.jpg'
      },
      {
        id: 'fanta',
        name: 'Fanta Orange',
        subtitle: 'Cold drink · Can',
        desc: 'Bright and fruity Fanta Orange. A crowd favourite.',
        prices: { default: 4.00 },
        defaultPrice: 4.00,
        tags: ['Cold', '🥤'],
        arShape: 'can', arColor: 0xFF7700,
        img: 'images/fanta-orange-can.jpg'
      },
      {
        id: 'lemonade',
        name: 'Lemonade',
        subtitle: 'Cold drink · Can',
        desc: 'Sparkling lemonade, crisp and refreshing.',
        prices: { default: 4.00 },
        defaultPrice: 4.00,
        tags: ['Cold', '🥤'],
        arShape: 'can', arColor: 0xFFDD00,
        img: 'images/lemonade-can.jpg'
      }
    ]
  }
};

const ALL_ITEMS = [
  ...FUDA_MENU.momos.items,
  ...FUDA_MENU.kebabs.items,
  ...FUDA_MENU.drinks.items
];
