document.addEventListener("DOMContentLoaded", () => {
  // 1. HAMBURGER MENU (MOBILE ONLY)
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinksContainer = document.getElementById('nav-links');

  if (hamburgerBtn && navLinksContainer) {
    hamburgerBtn.addEventListener('click', () => {
      // Toggles the 'active' class which controls the CSS left/right sliding
      hamburgerBtn.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });
  }

  // 2. PAGE NAVIGATION
  const navLinks = document.querySelectorAll('.nav-links a');
  const pageViews = document.querySelectorAll('.page-view');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if(link.getAttribute('href') && !link.getAttribute('href').startsWith('#')) return;
      e.preventDefault();
      
      navLinks.forEach(nav => nav.classList.remove('active'));
      pageViews.forEach(page => page.classList.remove('active'));

      link.classList.add('active');

      const targetId = link.getAttribute('href').substring(1);
      const targetPage = document.getElementById(`view-${targetId}`);
      
      if (targetPage) {
        targetPage.classList.add('active');
      }

      // Close the mobile menu drawer automatically after clicking a link
      if (window.innerWidth <= 768 && navLinksContainer.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        navLinksContainer.classList.remove('active');
      }
    });
  });

  // 3. CART DRAWER
  const cartBtn = document.querySelector('.cart-btn');
  const cartDrawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.overlay');
  const closeCartBtn = document.getElementById('close-cart');

  function openCart() {
    if(cartDrawer) cartDrawer.classList.add('open');
    if(overlay) overlay.classList.add('active');
  }

  function closeCart() {
    if(cartDrawer) cartDrawer.classList.remove('open');
    if(overlay) overlay.classList.remove('active');
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);

  // 4. CAT CHATBOT
  const catTrigger = document.querySelector('.cat-assistant-trigger');
  const chatWindow = document.querySelector('.chat-window');
  const closeChatBtn = document.querySelector('.chat-header button');

  if (catTrigger && chatWindow) {
    catTrigger.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
    });
  }

  if (closeChatBtn && chatWindow) {
    closeChatBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });
  }
});
