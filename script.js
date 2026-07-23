const products = [
  // HOT COFFEES (13)
  { id: 1, name: "Caffè Americano", category: "Hot Coffees", price: 3.95, popular: true, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80", desc: "Espresso shots topped with hot water create a light layer of crema." },
  { id: 2, name: "Cappuccino", category: "Hot Coffees", price: 4.45, popular: false, img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80", desc: "Dark, rich espresso under a smoothed layer of thick milk foam." },
  { id: 3, name: "Caffè Latte", category: "Hot Coffees", price: 4.65, popular: true, img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80", desc: "Dark Roast espresso balanced with steamed milk and foam." },
  { id: 4, name: "Caramel Macchiato", category: "Hot Coffees", price: 5.25, popular: true, img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80", desc: "Steamed milk with vanilla syrup, espresso, and caramel drizzle." },
  { id: 5, name: "Caffè Mocha", category: "Hot Coffees", price: 5.15, popular: false, img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80", desc: "Espresso with bittersweet mocha sauce and steamed milk topped with whip." },
  { id: 6, name: "Flat White", category: "Hot Coffees", price: 4.95, popular: true, img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80", desc: "Smooth ristretto espresso shots with steamed whole milk." },
  { id: 7, name: "White Chocolate Mocha", category: "Hot Coffees", price: 5.35, popular: false, img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80", desc: "Espresso with white chocolate sauce, steamed milk and whipped cream." },
  { id: 8, name: "Pike Place Roast", category: "Hot Coffees", price: 3.25, popular: false, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80", desc: "Well-rounded blend with subtle notes of cocoa and toasted nuts." },
  { id: 9, name: "Cinnamon Dolce Latte", category: "Hot Coffees", price: 5.25, popular: false, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80", desc: "Espresso, steamed milk, and cinnamon dolce flavored syrup." },
  { id: 10, name: "Espresso Macchiato", category: "Hot Coffees", price: 3.45, popular: false, img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80", desc: "Espresso shots topped with a dollop of warm milk foam." },
  { id: 11, name: "Hazelnut Latte", category: "Hot Coffees", price: 4.95, popular: false, img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80", desc: "Espresso and steamed milk infused with rich hazelnut syrup." },
  { id: 12, name: "Vanilla Bean Latte", category: "Hot Coffees", price: 4.85, popular: false, img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80", desc: "Rich espresso combined with real Madagascar vanilla bean syrup." },
  { id: 13, name: "Honey Almondmilk Flat White", category: "Hot Coffees", price: 5.45, popular: false, img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80", desc: "Ristretto espresso blended with steamed almondmilk and honey blend." },

  // COLD DRINKS & FRAPPUCCINOS (14)
  { id: 14, name: "Iced Caramel Macchiato", category: "Cold Drinks", price: 5.45, popular: true, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80", desc: "Espresso over ice with vanilla syrup, milk, and caramel drizzle." },
  { id: 15, name: "Starbucks Cold Brew", category: "Cold Drinks", price: 4.25, popular: false, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80", desc: "Slow-steeped in cool water for 20 hours for ultra-smooth flavor." },
  { id: 16, name: "Vanilla Sweet Cream Cold Brew", category: "Cold Drinks", price: 4.95, popular: true, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80", desc: "Cold Brew topped with house-made vanilla sweet cream." },
  { id: 17, name: "Caramel Frappuccino", category: "Cold Drinks", price: 5.75, popular: true, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80", desc: "Coffee blended with caramel syrup, ice, milk, and whipped cream." },
  { id: 18, name: "Java Chip Frappuccino", category: "Cold Drinks", price: 5.85, popular: true, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80", desc: "Frappuccino chips blended with coffee, milk, ice, and chocolate drizzle." },
  { id: 19, name: "Iced Brown Sugar Oatmilk Shaken Espresso", category: "Cold Drinks", price: 5.95, popular: true, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80", desc: "Blonde espresso shaken with brown sugar and cinnamon, topped with oatmilk." },
  { id: 20, name: "Strawberry Açaí Lemonade Refresher", category: "Cold Drinks", price: 5.25, popular: true, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80", desc: "Sweet strawberry flavors accent fruit juice and lemonade." },
  { id: 21, name: "Mango Dragonfruit Refresher", category: "Cold Drinks", price: 5.15, popular: false, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80", desc: "Tropical mango and dragonfruit flavors shaken with ice." },
  { id: 22, name: "Matcha Tea Latte (Iced)", category: "Cold Drinks", price: 5.25, popular: false, img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80", desc: "Smooth green tea matcha sweetened and served over ice with milk." },
  { id: 23, name: "Iced Passion Tango Tea", category: "Cold Drinks", price: 3.95, popular: false, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80", desc: "Blend of hibiscus, lemongrass and apple shaken with ice." },
  { id: 24, name: "Iced White Chocolate Mocha", category: "Cold Drinks", price: 5.65, popular: false, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80", desc: "Espresso, white chocolate sauce, milk and ice topped with whip." },
  { id: 25, name: "Mocha Frappuccino", category: "Cold Drinks", price: 5.65, popular: false, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80", desc: "Coffee, mocha sauce, milk and ice blended and topped with whipped cream." },
  { id: 26, name: "Iced Peach Green Tea Lemonade", category: "Cold Drinks", price: 4.85, popular: false, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80", desc: "Green tea shaken with peach juice blend and crisp lemonade." },
  { id: 27, name: "Nitro Cold Brew", category: "Cold Drinks", price: 5.45, popular: false, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80", desc: "Infused with nitrogen as it pours to create a velvety cream layer." },

  // GLOBAL RESERVE SPECIALS (11)
  { id: 28, name: "Affogato al Caffè", category: "Global Specials", price: 6.45, popular: true, img: "https://images.unsplash.com/photo-1592321675774-3de57f36f407?auto=format&fit=crop&w=600&q=80", desc: "Reserve espresso poured over creamy vanilla gelato." },
  { id: 29, name: "Oleato Iced Cortado", category: "Global Specials", price: 6.95, popular: true, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80", desc: "Reserve espresso infused with Partanna extra virgin olive oil." },
  { id: 30, name: "Cold Brew Float", category: "Global Specials", price: 7.25, popular: false, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80", desc: "Reserve Cold Brew with a scoop of artisanal vanilla bean gelato." },
  { id: 31, name: "Nitro Cold Brew Gelato Float", category: "Global Specials", price: 7.85, popular: true, img: "https://images.unsplash.com/photo-1592321675774-3de57f36f407?auto=format&fit=crop&w=600&q=80", desc: "Nitro Cold Brew served over vanilla gelato." },
  { id: 32, name: "Hazelnut Bianco Latte", category: "Global Specials", price: 6.25, popular: false, img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80", desc: "Espresso with house-made hazelnut praline infused milk." },
  { id: 33, name: "Starbucks Reserve Dark Chocolate Mocha", category: "Global Specials", price: 6.65, popular: false, img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80", desc: "Small-batch espresso combined with single-origin dark chocolate." },
  { id: 34, name: "Shakerato Allegro", category: "Global Specials", price: 6.15, popular: false, img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80", desc: "Reserve espresso shaken over ice with liquid cane sugar." },
  { id: 35, name: "Whiskey Barrel-Aged Cold Brew", category: "Global Specials", price: 7.50, popular: true, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80", desc: "Green coffee beans aged in whiskey barrels prior to roasting." },
  { id: 36, name: "Sparkling Espresso Tonic", category: "Global Specials", price: 5.95, popular: false, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80", desc: "Reserve espresso poured over crisp tonic water and citrus." },
  { id: 37, name: "Single-Origin Colombia Pour-Over", category: "Global Specials", price: 5.50, popular: false, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80", desc: "Hand-poured Reserve beans highlighting herbal and floral notes." },
  { id: 38, name: "Clover Brewed Jamaica Blue Mountain", category: "Global Specials", price: 8.50, popular: false, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80", desc: "Rare, exquisite roast brewed using Vacuum-Press Clover technology." },

  // BAKERY & FOOD (12)
  { id: 39, name: "Butter Croissant", category: "Bakery", price: 3.45, popular: true, img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80", desc: "Flaky, buttery multi-layered French pastry baked fresh daily." },
  { id: 40, name: "Chocolate Croissant", category: "Bakery", price: 3.85, popular: true, img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=600&q=80", desc: "Butter croissant filled with dark chocolate batons." },
  { id: 41, name: "Blueberry Muffin", category: "Bakery", price: 3.25, popular: false, img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=600&q=80", desc: "Muffin bursting with juicy blueberries and lemon zest." },
  { id: 42, name: "Cinnamon Roll", category: "Bakery", price: 4.15, popular: true, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80", desc: "Warm cinnamon swirl dough smothered in cream cheese frosting." },
  { id: 43, name: "Glazed Doughnut", category: "Bakery", price: 2.95, popular: false, img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80", desc: "Soft cake-style doughnut coated in sweet sugar glaze." },
  { id: 44, name: "Bacon, Gouda & Egg Sandwich", category: "Bakery", price: 5.45, popular: true, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80", desc: "Applewood smoked bacon, aged Gouda, and parmesan frittata on artisan roll." },
  { id: 45, name: "Double-Smoked Bacon Sandwich", category: "Bakery", price: 5.95, popular: false, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80", desc: "Bacon, egg, and sharp cheddar cheese on brioche bun." },
  { id: 46, name: "Impossible Breakfast Sandwich", category: "Bakery", price: 5.75, popular: false, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80", desc: "Plant-based sausage patty, cage-free egg, and cheddar cheese on sesame bun." },
  { id: 47, name: "Spinach, Feta & Egg White Wrap", category: "Bakery", price: 4.95, popular: false, img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80", desc: "Egg whites, spinach, feta cheese, and tomatoes in whole-wheat wrap." },
  { id: 48, name: "Ham & Swiss Croissant", category: "Bakery", price: 4.85, popular: false, img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80", desc: "Hickory-smoked ham and Swiss cheese baked inside croissant." },
  { id: 49, name: "Petite Vanilla Bean Scone", category: "Bakery", price: 2.25, popular: false, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80", desc: "Mini vanilla scone glazed with real vanilla bean glaze." },
  { id: 50, name: "Pumpkin Bread", category: "Bakery", price: 3.65, popular: false, img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=600&q=80", desc: "Moist spiced pumpkin bread topped with crunchy pepitas." }
];

const giftCards = [
  { id: 101, title: "Birthday Celebration", category: "Birthday", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80", desc: "Wish someone a happy birthday with coffee on you!" },
  { id: 102, title: "Thank You So Much", category: "Appreciation", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80", desc: "Send a token of gratitude for a job well done." }
];

const stores = [
  { name: "Seattle Reserve Roastery", city: "Seattle", address: "1124 Pike St, Seattle, WA", hours: "06:00 AM - 10:00 PM", status: "Open Now" },
  { name: "Broadway & 42nd Store", city: "New York", address: "1530 Broadway, Times Square, NY", hours: "05:30 AM - 11:00 PM", status: "Open Now" },
  { name: "Chicago Reserve Roastery", city: "Chicago", address: "646 N Michigan Ave, Chicago, IL", hours: "07:00 AM - 09:00 PM", status: "Open Now" },
  { name: "Tokyo Nakameguro Roastery", city: "Tokyo", address: "2-19-23 Aobadai, Meguro City, Tokyo", hours: "07:00 AM - 10:00 PM", status: "Open Now" },
  { name: "Piazza Cordusio Reserve", city: "Milan", address: "Via Cordusio 2, Milan, Italy", hours: "07:30 AM - 09:30 PM", status: "Open Now" },
  { name: "London Starbucks Reserve", city: "London", address: "99 St Martin's Ln, London, UK", hours: "06:30 AM - 10:00 PM", status: "Open Now" },
  { name: "Mumbai Horniman Circle", city: "Mumbai", address: "Elphinstone Building, Fort, Mumbai", hours: "08:00 AM - 11:00 PM", status: "Open Now" },
  { name: "Dubai Mall Flagship", city: "Dubai", address: "Financial Center Rd, Dubai Mall, UAE", hours: "08:00 AM - 12:00 AM", status: "Open Now" }
];

let cart = [];
let currentCategory = 'All';

function switchView(viewName) {
  document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById(`view-${viewName}`).classList.add('active');
  document.getElementById(`nav-${viewName}`).classList.add('active');
  window.scrollTo(0, 0);
}

function renderMenu(items) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = items.map(p => `
    <div class="product-card">
      ${p.popular ? `<span class="pop-badge">Popular</span>` : ''}
      <img class="product-img" src="${p.img}" alt="${p.name}">
      <div>
        <div class="product-title">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
      </div>
      <div class="product-controls">
        <span class="product-price">$${p.price.toFixed(2)}</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <div class="quantity-selector">
            <button class="qty-btn" onclick="adjustCardQty(${p.id}, -1)">-</button>
            <input type="text" class="qty-input" id="qty-${p.id}" value="1" readonly>
            <button class="qty-btn" onclick="adjustCardQty(${p.id}, 1)">+</button>
          </div>
          <button class="btn btn-green" onclick="addToCartWithQty(${p.id})" style="padding: 8px 14px;">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderPopularItems() {
  const popularGrid = document.getElementById('popularGrid');
  const populars = products.filter(p => p.popular);
  popularGrid.innerHTML = populars.map(p => `
    <div class="product-card">
      <span class="pop-badge">Popular</span>
      <img class="product-img" src="${p.img}" alt="${p.name}">
      <div>
        <div class="product-title">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
      </div>
      <div class="product-controls">
        <span class="product-price">$${p.price.toFixed(2)}</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <div class="quantity-selector">
            <button class="qty-btn" onclick="adjustCardQty(${p.id}, -1)">-</button>
            <input type="text" class="qty-input" id="qty-${p.id}" value="1" readonly>
            <button class="qty-btn" onclick="adjustCardQty(${p.id}, 1)">+</button>
          </div>
          <button class="btn btn-green" onclick="addToCartWithQty(${p.id})" style="padding: 8px 14px;">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

function adjustCardQty(id, delta) {
  const input = document.getElementById(`qty-${id}`);
  if (!input) return;
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
}

function addToCartWithQty(id) {
  const input = document.getElementById(`qty-${id}`);
  const qty = input ? parseInt(input.value) : 1;
  const prod = products.find(p => p.id === id);
  
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ ...prod, quantity: qty });
  }
  updateCartUI();
  toggleCart(true);
}

function renderGiftCards() {
  const grid = document.getElementById('giftcardGrid');
  grid.innerHTML = giftCards.map(g => `
    <div class="giftcard-card">
      <div class="giftcard-img-wrapper" style="background-image: url('${g.img}');">
        <span class="giftcard-badge">${g.category}</span>
      </div>
      <div class="giftcard-body">
        <div class="giftcard-title">${g.title}</div>
        <div class="giftcard-desc">${g.desc}</div>
        <div class="giftcard-amounts">
          <button class="amount-btn active">$15</button>
          <button class="amount-btn">$25</button>
          <button class="amount-btn">$50</button>
        </div>
        <button class="btn btn-green" onclick="addGiftCardToCart('${g.title}')" style="width:100%; margin-top:auto;">Send eGift Card</button>
      </div>
    </div>
  `).join('');
}

function renderStores(storeList) {
  const storesGrid = document.getElementById('storesGrid');
  storesGrid.innerHTML = storeList.map(s => `
    <div class="store-card">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom: 12px;">
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--sb-darkGreen);">${s.name}</h3>
          <span class="store-status status-open">${s.status}</span>
        </div>
        <p style="font-size:0.9rem; color: var(--sb-gray600); margin-bottom: 10px;">📍 ${s.address}</p>
        <p style="font-size:0.85rem; font-weight:700;">🕒 ${s.hours}</p>
      </div>
      <button class="btn btn-light" onclick="alert('Directions sent for ${s.name}!')" style="width: 100%; margin-top: 20px;">Get Directions</button>
    </div>
  `).join('');
}

function toggleChatWindow() {
  document.getElementById('chatWindow').classList.toggle('open');
}

function handleChatKeyPress(e) {
  if (e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  const chatBody = document.getElementById('chatBody');
  chatBody.innerHTML += `<div class="chat-msg user">${text}</div>`;
  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    let reply = "Meow! I can help you with orders across our 50 menu items, store locations, or gift cards!";
    if (text.toLowerCase().includes('coffee') || text.toLowerCase().includes('menu')) {
      reply = "Purr-fect! You can check out all 50 items under the 'Menu' page above.";
    } else if (text.toLowerCase().includes('gift')) {
      reply = "Meow! Send an eGift card instantly from our Gift Cards tab.";
    } else if (text.toLowerCase().includes('support') || text.toLowerCase().includes('contact')) {
      reply = "Reach our support team at 1-800-STARBUCKS or support@starbucks.com!";
    } else if (text.toLowerCase().includes('store') || text.toLowerCase().includes('location')) {
      reply = "We have flagship stores in Seattle, New York, Chicago, Tokyo, Milan, London, Mumbai, and Dubai!";
    }
    chatBody.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  handleSearch();
}

function handleSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filtered = products.filter(p => {
    const matchesCat = currentCategory === 'All' || p.category === currentCategory;
    const matchesQuery = p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });
  renderMenu(filtered);
}

function filterStores() {
  const q = document.getElementById('storeSearchInput').value.toLowerCase();
  const filtered = stores.filter(s => s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q) || s.address.toLowerCase().includes(q));
  renderStores(filtered);
}

function addGiftCardToCart(title) {
  const existing = cart.find(item => item.name === `eGift Card: ${title}`);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: Date.now(), name: `eGift Card: ${title}`, price: 25.00, quantity: 1 });
  }
  updateCartUI();
  toggleCart(true);
}

function updateCartUI() {
  const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  document.getElementById('cartBadge').innerText = totalCount;
  const itemsContainer = document.getElementById('cartItems');
  if (cart.length === 0) {
    itemsContainer.innerHTML = `<p style="text-align:center; color: var(--sb-gray600); margin-top: 40px;">Your cart is empty.</p>`;
    document.getElementById('cartTotal').innerText = '$0.00';
    return;
  }
  itemsContainer.innerHTML = cart.map((item, idx) => `
    <div class="cart-item-row">
      <div>
        <div style="font-weight:700; font-size: 0.95rem;">${item.name}</div>
        <div style="font-size:0.85rem; color: var(--sb-gray600);">$${item.price.toFixed(2)} each</div>
      </div>
      <div style="display:flex; align-items:center; gap: 12px;">
        <div class="quantity-selector">
          <button class="qty-btn" onclick="changeCartQty(${idx}, -1)">-</button>
          <input type="text" class="qty-input" value="${item.quantity}" readonly>
          <button class="qty-btn" onclick="changeCartQty(${idx}, 1)">+</button>
        </div>
        <button onclick="removeFromCart(${idx})" style="background:none; border:none; color:var(--sb-rose); cursor:pointer; font-weight:700;">✕</button>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;
}

function changeCartQty(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) {
    cart.splice(index, 1);
  }
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function selectPayment(el) {
  document.querySelectorAll('.payment-option').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
}

function processCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("🎉 Order placed successfully!");
  cart = [];
  updateCartUI();
  toggleCart(false);
}

function toggleCart(open) {
  document.getElementById('cartDrawer').classList.toggle('open', open);
  document.getElementById('overlay').classList.toggle('active', open);
}

function toggleAuthModal(open) {
  document.getElementById('authModal').classList.toggle('active', open);
  document.getElementById('overlay').classList.toggle('active', open);
}

function handleSignIn(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  document.getElementById('userAccountBtn').innerText = email.split('@')[0];
  toggleAuthModal(false);
  alert(`Welcome back, ${email.split('@')[0]}!`);
}

function closeAllModals() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('authModal').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}

renderMenu(products);
renderPopularItems();
renderGiftCards();
renderStores(stores);