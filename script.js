document.addEventListener("DOMContentLoaded", () => {
  // --- 1. HAMBURGER MENU TOGGLE ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  if (hamburgerBtn && navLinksContainer) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });
  }

  // --- 2. PAGE NAVIGATION LOGIC ---
  const navLinks = document.querySelectorAll('.nav-links a');
  const pageViews = document.querySelectorAll('.page-view');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Allow external links (like Sign In) to work normally if they have an href
      if(link.getAttribute('href') && !link.getAttribute('href').startsWith('#')) return;
      
      e.preventDefault();
      
      // Remove active classes
      navLinks.forEach(nav => nav.classList.remove('active'));
      pageViews.forEach(page => page.classList.remove('active'));

      // Add active to clicked link
      link.classList.add('active');

      // Find target page by text content or data-target
      const targetText = link.textContent.trim().toLowerCase().replace(' ', '-');
      const targetPage = document.getElementById(`view-${targetText}`);
      
      if (targetPage) {
        targetPage.classList.add('active');
      }

      // Close mobile menu if it's open
      if (window.innerWidth <= 768 && navLinksContainer.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        navLinksContainer.classList.remove('active');
      }
    });
  });

  // --- 3. CART DRAWER TOGGLE ---
  const cartBtn = document.querySelector('.cart-btn');
  const cartDrawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.overlay');
  const closeCartBtn = document.getElementById('close-cart'); // Make sure you have <button id="close-cart"> in HTML

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

  // --- 4. CAT AI ASSISTANT CHAT ---
  const catTrigger = document.querySelector('.cat-assistant-trigger');
  const chatWindow = document.querySelector('.chat-window');
  const closeChatBtn = document.querySelector('.chat-header button'); // Assume there is a close button in chat header

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
