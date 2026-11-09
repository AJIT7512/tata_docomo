(function () {
  "use strict";

  const ICONS = {
    "flower-2": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 5a3 3 0 1 0-3 3 3 3 0 1 0 3 3 3 3 0 1 0 3-3 3 3 0 1 0-3-3Z"/><path d="M12 22v-7"/><path d="M9 19h6"/></svg>',
    "heart-handshake": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 12.6c1-1 1-2.6 0-3.6l-1.9-1.9a2.5 2.5 0 0 0-3.5 0l-.6.6-.6-.6a2.5 2.5 0 0 0-3.5 0L8 8.9"/><path d="m12 13-2-2-3.5 3.5a2 2 0 0 0 0 2.8l.2.2a2 2 0 0 0 2.8 0"/><path d="m17 14-1.5 1.5a2 2 0 0 1-2.8 0L11 13.8"/></svg>',
    "sparkles": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
    "gem": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m6 3 6 6 6-6"/><path d="M2 9h20l-10 13L2 9Z"/></svg>',
    "arrow": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    "star": '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6l-6.1 3.4 1.5-6.8L2.2 9.5l6.9-.7L12 2.5Z"/></svg>',
    "check": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 13 4 4L19 7"/></svg>',
    "mail": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    "phone": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>',
    "pin": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    "clock": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    "instagram": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
    "facebook": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/></svg>'
  };

  const money = (n) => "₹" + n.toLocaleString("en-IN");
  const waLink = (msg) => `https://wa.me/${SITE.business.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* ---------------- Navigation ---------------- */
  function renderNav() {
    const links = SITE.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join("");
    document.getElementById("navLinks").innerHTML = links;
    document.getElementById("drawerNavLinks").innerHTML = links;
    document.getElementById("footerNav").innerHTML = SITE.nav
      .map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("");
  }

  function setupScrollSpy() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });

    const sections = SITE.nav.map(n => document.querySelector(n.href)).filter(Boolean);
    const links = document.querySelectorAll("#navLinks a");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => obs.observe(s));
  }

  function setupDrawer() {
    const drawer = document.getElementById("mobileDrawer");
    const open = () => { drawer.classList.add("open"); document.body.style.overflow = "hidden"; };
    const close = () => { drawer.classList.remove("open"); document.body.style.overflow = ""; };
    document.getElementById("menuToggle").addEventListener("click", open);
    document.getElementById("drawerClose").addEventListener("click", close);
    document.getElementById("drawerOverlay").addEventListener("click", close);
    drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  }

  /* ---------------- Trust strip ---------------- */
  function renderTrust() {
    document.getElementById("trustStrip").innerHTML = SITE.trustPoints.map((t, i) => `
      <div class="trust-item" style="--i:${i}">
        ${ICONS[t.icon] || ""}
        <h3>${t.title}</h3>
        <p>${t.text}</p>
      </div>`).join("");
  }

  /* ---------------- Flower categories ---------------- */
  function renderCategories() {
    document.getElementById("categoryGrid").innerHTML = SITE.flowerCategories.map((c, i) => `
      <a href="#bouquets" class="category-card" style="--i:${i}">
        <img src="${c.image}" alt="${c.name} — fresh flowers" loading="lazy" />
        <div class="category-info">
          <div>
            <h3>${c.name}</h3>
            <span>${c.count}</span>
          </div>
          ${ICONS.arrow}
        </div>
      </a>`).join("");
  }

  /* ---------------- Products ---------------- */
  function renderProducts() {
    document.getElementById("productGrid").innerHTML = SITE.bouquets.map((p, i) => `
      <article class="product-card" style="--i:${i}">
        <div class="product-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <button class="product-quickview" data-quickview="${p.id}">Quick View</button>
        </div>
        <div class="product-body">
          <h3>${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-swatches">
            ${p.colors.map(c => `<span class="swatch" style="background:${c}"></span>`).join("")}
          </div>
          <div class="product-meta">
            <span class="product-price">${money(p.price)}</span>
            <span class="product-rating">${ICONS.star} ${p.rating}</span>
          </div>
          <div class="product-footer">
            <button class="btn btn-primary" data-add="${p.id}">Add to Cart</button>
            <a class="btn btn-outline" href="${waLink('Hi, I would like to order the ' + p.name + '.')}" target="_blank" rel="noopener">Enquire</a>
          </div>
        </div>
      </article>`).join("");

    document.getElementById("productGrid").addEventListener("click", (e) => {
      const addBtn = e.target.closest("[data-add]");
      if (addBtn) {
        const p = SITE.bouquets.find(b => b.id === addBtn.dataset.add);
        showToast(`${p.name} added to cart`);
      }
      const qv = e.target.closest("[data-quickview]");
      if (qv) {
        const p = SITE.bouquets.find(b => b.id === qv.dataset.quickview);
        showToast(`${p.name} — ${money(p.price)}`);
      }
    });
  }

  /* ---------------- Occasions ---------------- */
  function renderOccasions() {
    document.getElementById("occasionGrid").innerHTML = SITE.occasions.map((o, i) => `
      <div class="occasion-card" style="--i:${i}">
        <div class="occasion-media">
          <img src="${o.image}" alt="Flowers for ${o.name}" loading="lazy" />
        </div>
        <h3>${o.name}</h3>
        <a href="#bouquets">Explore Collection →</a>
      </div>`).join("");
  }

  /* ---------------- Wedding services ---------------- */
  function renderServices() {
    document.getElementById("serviceGrid").innerHTML = SITE.weddingServices.map((s, i) => `
      <div class="service-card" style="--i:${i}">
        <span class="service-index">0${i + 1}</span>
        <h3>${s.name}</h3>
        <p>${s.text}</p>
      </div>`).join("");
  }

  /* ---------------- Gallery ---------------- */
  function renderGallery() {
    document.getElementById("galleryGrid").innerHTML = SITE.gallery.map((g, i) => `
      <div class="gallery-item ${g.size !== "normal" ? g.size : ""}" data-index="${i}">
        <img src="${g.image}" alt="${g.title}" loading="lazy" />
        <div class="overlay">
          <div>
            <span>${g.category}</span>
            <strong>${g.title}</strong>
          </div>
        </div>
      </div>`).join("");

    const lightbox = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightboxImg");
    const lbTitle = document.getElementById("lightboxTitle");
    const lbCat = document.getElementById("lightboxCategory");

    const openLb = (idx) => {
      const g = SITE.gallery[idx];
      lbImg.src = g.image;
      lbImg.alt = g.title;
      lbTitle.textContent = g.title;
      lbCat.textContent = g.category;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    const closeLb = () => { lightbox.classList.remove("open"); document.body.style.overflow = ""; };

    document.getElementById("galleryGrid").addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (item) openLb(Number(item.dataset.index));
    });
    document.getElementById("lightboxClose").addEventListener("click", closeLb);
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLb(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });
  }

  /* ---------------- Packages ---------------- */
  function renderPackages() {
    document.getElementById("packageGrid").innerHTML = SITE.packages.map((pkg, i) => `
      <div class="package-card ${pkg.popular ? "featured" : ""}" style="--i:${i}">
        ${pkg.popular ? `<span class="package-badge">Most Popular</span>` : ""}
        <h3>${pkg.name}</h3>
        <p class="package-tagline">${pkg.tagline}</p>
        <div class="package-price">${pkg.price}</div>
        <div class="package-price-note">${pkg.priceNote}</div>
        <ul class="package-features">
          ${pkg.features.map(f => `<li>${ICONS.check}${f}</li>`).join("")}
        </ul>
        <a class="btn ${pkg.popular ? "btn-light" : "btn-primary"}" href="${waLink('Hi, I am interested in the ' + pkg.name + ' wedding decoration package.')}" target="_blank" rel="noopener">${pkg.cta}</a>
      </div>`).join("");
  }

  /* ---------------- Testimonials ---------------- */
  function renderTestimonials() {
    const wrap = document.getElementById("testimonialWrap");
    const slides = SITE.testimonials.map((t, i) => `
      <div class="testimonial-slide ${i === 0 ? "active" : ""}" data-slide="${i}">
        <div class="testimonial-stars">${ICONS.star.repeat(t.rating)}</div>
        <p class="testimonial-quote">"${t.text}"</p>
        <div class="testimonial-author">
          <strong>${t.name}</strong>
          <span>${t.occasion}</span>
        </div>
      </div>`).join("");
    const dots = SITE.testimonials.map((_, i) => `<button class="testimonial-dot ${i === 0 ? "active" : ""}" data-dot="${i}" aria-label="Show testimonial ${i + 1}"></button>`).join("");

    wrap.innerHTML = slides + `<div class="testimonial-nav">${dots}</div>`;

    let current = 0;
    const slideEls = wrap.querySelectorAll(".testimonial-slide");
    const dotEls = wrap.querySelectorAll(".testimonial-dot");
    const show = (idx) => {
      slideEls.forEach((s, i) => s.classList.toggle("active", i === idx));
      dotEls.forEach((d, i) => d.classList.toggle("active", i === idx));
      current = idx;
    };
    dotEls.forEach(d => d.addEventListener("click", () => show(Number(d.dataset.dot))));

    let timer = setInterval(() => show((current + 1) % slideEls.length), 6000);
    wrap.addEventListener("mouseenter", () => clearInterval(timer));
    wrap.addEventListener("mouseleave", () => { timer = setInterval(() => show((current + 1) % slideEls.length), 6000); });

    const note = document.createElement("p");
    note.className = "testimonial-note";
    note.textContent = SITE.testimonialsNote;
    document.getElementById("testimonials").querySelector(".container").appendChild(note);
  }

  /* ---------------- Instagram ---------------- */
  function renderInstagram() {
    document.getElementById("instaGrid").innerHTML = SITE.instagramImages.map((img, i) => `
      <div class="insta-item" style="--i:${i}">
        <img src="${img}" alt="Anthos Instagram post ${i + 1}" loading="lazy" />
      </div>`).join("");
    document.getElementById("instaCta").href = SITE.business.instagram;
  }

  /* ---------------- Contact info / footer ---------------- */
  function renderContactInfo() {
    const b = SITE.business;
    document.getElementById("contactInfoRows").innerHTML = `
      <div class="contact-info-row">${ICONS.phone}<div><strong>Call Us</strong><a href="tel:${b.phoneRaw}">${b.phone}</a></div></div>
      <div class="contact-info-row">${ICONS.mail}<div><strong>Email</strong><a href="mailto:${b.email}">${b.email}</a></div></div>
      <div class="contact-info-row">${ICONS.pin}<div><strong>Visit Our Studio</strong><span>${b.address}</span></div></div>
      <div class="contact-info-row">${ICONS.clock}<div><strong>Hours</strong>${b.hours.map(h => `<span style="display:block;">${h.days}: ${h.time}</span>`).join("")}</div></div>
    `;
    document.getElementById("contactSocial").innerHTML = `
      <a href="${b.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
      <a href="${b.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
      <a href="${waLink(b.whatsappDefaultMessage)}" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" style="width:17px;height:17px;"><path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.44 9.9-9.9s-4.44-9.9-9.9-9.9Z"/></svg></a>
    `;
    document.getElementById("directionsBtn").href = b.mapsUrl;

    document.getElementById("footerSocial").innerHTML = `
      <a href="${b.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
      <a href="${b.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
    `;
    document.getElementById("footerContact").innerHTML = `
      <li><a href="tel:${b.phoneRaw}">${b.phone}</a></li>
      <li><a href="${waLink(b.whatsappDefaultMessage)}" target="_blank" rel="noopener">WhatsApp Us</a></li>
      <li><a href="mailto:${b.email}">${b.email}</a></li>
      <li><span>${b.address}</span></li>
    `;
    document.getElementById("footerCopyright").textContent = `© ${new Date().getFullYear()} ${b.name}. All rights reserved.`;

    const waFloat = document.getElementById("whatsappFloat");
    waFloat.href = waLink(b.whatsappDefaultMessage);
    document.getElementById("drawerWhatsapp").href = waLink(b.whatsappDefaultMessage);
  }

  /* ---------------- Forms ---------------- */
  function populateSelect(id, options) {
    const el = document.getElementById(id);
    el.innerHTML = options.map(o => `<option value="${o}">${o}</option>`).join("");
  }

  function setupContactTabs() {
    const tabOrder = document.getElementById("tabOrder");
    const tabWedding = document.getElementById("tabWedding");
    const panelOrder = document.getElementById("panelOrder");
    const panelWedding = document.getElementById("panelWedding");
    tabOrder.addEventListener("click", () => {
      tabOrder.classList.add("active"); tabWedding.classList.remove("active");
      tabOrder.setAttribute("aria-selected", "true"); tabWedding.setAttribute("aria-selected", "false");
      panelOrder.classList.add("active"); panelWedding.classList.remove("active");
    });
    tabWedding.addEventListener("click", () => {
      tabWedding.classList.add("active"); tabOrder.classList.remove("active");
      tabWedding.setAttribute("aria-selected", "true"); tabOrder.setAttribute("aria-selected", "false");
      panelWedding.classList.add("active"); panelOrder.classList.remove("active");
    });
  }

  function setupForms() {
    populateSelect("orderFlower", SITE.flowerOptions);
    populateSelect("wedType", SITE.eventTypes);
    populateSelect("wedStyle", SITE.decorationStyles);
    populateSelect("wedBudget", SITE.budgetRanges);

    document.getElementById("orderForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.target;
      const errEl = document.getElementById("orderFormError");
      if (!f.name.value.trim() || !f.phone.value.trim() || !f.date.value) {
        errEl.textContent = "Please fill in your name, phone and delivery date.";
        return;
      }
      errEl.textContent = "";
      const msg = `New Flower Order\nName: ${f.name.value}\nPhone: ${f.phone.value}\nFlowers: ${f.flower.value}\nQty: ${f.qty.value}\nDelivery Date: ${f.date.value}\nMessage: ${f.message.value || "-"}`;
      window.open(waLink(msg), "_blank", "noopener");
      showToast("Opening WhatsApp to confirm your order…");
      f.reset();
    });

    document.getElementById("weddingForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.target;
      const errEl = document.getElementById("weddingFormError");
      if (!f.name.value.trim() || !f.phone.value.trim() || !f.eventDate.value) {
        errEl.textContent = "Please fill in your name, phone and event date.";
        return;
      }
      errEl.textContent = "";
      const msg = `Wedding Decoration Inquiry\nName: ${f.name.value}\nPhone: ${f.phone.value}\nEvent Date: ${f.eventDate.value}\nEvent Type: ${f.eventType.value}\nVenue: ${f.venue.value || "-"}\nGuests: ${f.guests.value || "-"}\nStyle: ${f.style.value}\nBudget: ${f.budget.value}\nMessage: ${f.message.value || "-"}`;
      window.open(waLink(msg), "_blank", "noopener");
      showToast("Opening WhatsApp to send your inquiry…");
      f.reset();
    });
  }

  /* ---------------- Toast ---------------- */
  let toastTimer;
  function showToast(message) {
    const toast = document.getElementById("toast");
    document.getElementById("toastMessage").textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  }

  /* ---------------- Search / Cart placeholders ---------------- */
  function setupHeaderIcons() {
    document.getElementById("searchBtn").addEventListener("click", () => {
      document.getElementById("flowers").scrollIntoView({ behavior: "smooth" });
      showToast("Browse our flower collection below");
    });
    document.getElementById("cartBtn").addEventListener("click", () => {
      showToast("Your cart is empty — add a bouquet to get started");
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  function setupReveal() {
    const targets = document.querySelectorAll(".reveal, .reveal-scale, .stagger");
    const staggerChildren = document.querySelectorAll(".stagger");
    staggerChildren.forEach(parent => {
      Array.from(parent.children).forEach((child, i) => {
        child.classList.add("reveal");
        child.style.setProperty("--i", i);
      });
    });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          if (entry.target.classList.contains("stagger")) {
            Array.from(entry.target.children).forEach(c => c.classList.add("in"));
          }
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal, .reveal-scale").forEach(el => obs.observe(el));
  }

  function setupHeroLoad() {
    requestAnimationFrame(() => {
      setTimeout(() => document.querySelector(".hero").classList.add("loaded"), 100);
    });
  }

  /* ---------------- Init ---------------- */
  function init() {
    renderNav();
    renderTrust();
    renderCategories();
    renderProducts();
    renderOccasions();
    renderServices();
    renderGallery();
    renderPackages();
    renderTestimonials();
    renderInstagram();
    renderContactInfo();
    setupContactTabs();
    setupForms();
    setupDrawer();
    setupScrollSpy();
    setupHeaderIcons();
    setupHeroLoad();
    setupReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
