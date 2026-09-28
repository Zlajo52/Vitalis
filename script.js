// ---------- Language switcher / translations ----------
const translations = {
  en: {
    "nav.home": "Home",
    "nav.practice": "Practice",
    "nav.allPractice": "All Practice",
    "nav.it": "IT",
    "nav.printing": "3D Printing",
    "nav.wiring": "Wiring & House Installations",
    "nav.smartHome": "Smart Home",
    "nav.smartHome2": "Smart Home pt2",
    "nav.gameMaking": "Game Making",
    "nav.animation": "3D Animation",
    "nav.animation2": "3D Animation pt2",
    "nav.digitalBusiness": "Digital Business",
    "nav.arduino": "Arduino Alarm",
    "nav.plc": "PLC & Factory I/O",
    "nav.houseModel": "House Model",
    "nav.houseModel2": "House Model pt2",
    "nav.appDev": "App Development",
    "nav.culture": "Culture",
    "nav.freetime": "Free Time",

    "intro.home": "a peek at Vitalis",
    "intro.practice": "practice at Vitalis",
    "intro.culture": "culture around Leipzig",
    "intro.freetime": "free time in Leipzig",

    "index.eyebrow": "welcome to Vitalis",
    "index.boardText": "Three months in Leipzig — practice, culture, and good times.",
    "index.paperIntro": "Our visit to Vitalis",
    "index.cardPracticeTitle": "Practice →",
    "index.cardPracticeDesc": "IT, 3D printing....",
    "index.cardCultureTitle": "Culture →",
    "index.cardCultureDesc": "Traditions, food, history, sceenery",
    "index.cardFreetimeTitle": "Free Time →",
    "index.cardFreetimeDesc": "Swimming, new friends",

    "story.heading": "What we did",
    "practice.story": "Write here about the practice work — IT tasks, 3D printing, soldering, whatever you actually did that day. This is just placeholder text, replace it later.",
    "culture.story": "Write here about the culture side of the trip — traditions, food, history, places you visited. This is just placeholder text, replace it later.",
    "freetime.story": "Write here about free time — swimming, meeting new people, weekend trips, whatever you got up to outside of practice. This is just placeholder text, replace it later.",

    "footer.copyright": "© 2026 Erasmus+ Vitalis Exchange",
    "footer.address": "address: Vitalis GmbH, Gut Wehlitz, 04435 Schkeuditz, Germany",
    "footer.contact": "contact: tel:+49 34204 77400",

    "home.slide1": "Welcome day",
    "home.slide2": "Vitalis campus",
    "home.slide3": "Leipzig city",
    "home.slide4": "Orientation day",
    "home.slide5": "Group photo",
    "home.slide6": "First impressions",

    "practice.slide1": "IT Lab",
    "practice.slide2": "3D Printing",
    "practice.slide3": "Soldering station",
    "practice.slide4": "Working together",

    "culture.slide1": "City tour",
    "culture.slide2": "Local food",
    "culture.slide3": "Museum visit",
    "culture.slide4": "Old town",

    "freetime.slide1": "Swimming",
    "freetime.slide2": "New friends",
    "freetime.slide3": "Evening walk",
    "freetime.slide4": "Weekend trip"
  },

  hr: {
    "nav.home": "Početna",
    "nav.practice": "Praksa",
    "nav.allPractice": "Sva praksa",
    "nav.it": "IT",
    "nav.printing": "3D ispis",
    "nav.wiring": "Ožičenje i kućne instalacije",
    "nav.smartHome": "Pametna kuća",
    "nav.smartHome2": "Pametna kuća dio 2",
    "nav.gameMaking": "Izrada igara",
    "nav.animation": "3D animacija",
    "nav.animation2": "3D animacija dio 2",
    "nav.digitalBusiness": "Digitalno poslovanje",
    "nav.arduino": "Arduino alarm",
    "nav.plc": "PLC i Factory I/O",
    "nav.houseModel": "Model kuće",
    "nav.houseModel2": "Model kuće dio 2",
    "nav.appDev": "Razvoj aplikacije",
    "nav.culture": "Kultura",
    "nav.freetime": "Slobodno vrijeme",

    "intro.home": "pogled na Vitalis",
    "intro.practice": "praksa u Vitalisu",
    "intro.culture": "kultura oko Leipziga",
    "intro.freetime": "slobodno vrijeme u Leipzigu",

    "index.eyebrow": "dobrodošli u Vitalis",
    "index.boardText": "Tri mjeseca u Leipzigu — praksa, kultura i dobra zabava.",
    "index.paperIntro": "Naš posjet Vitalisu",
    "index.cardPracticeTitle": "Praksa →",
    "index.cardPracticeDesc": "IT, 3D ispis....",
    "index.cardCultureTitle": "Kultura →",
    "index.cardCultureDesc": "Tradicije, hrana, povijest, krajolici",
    "index.cardFreetimeTitle": "Slobodno vrijeme →",
    "index.cardFreetimeDesc": "Plivanje, novi prijatelji",

    "story.heading": "Što smo radili",
    "practice.story": "Ovdje napiši o praktičnom radu — IT zadaci, 3D ispis, lemljenje, sve što si zapravo tog dana radio. Ovo je samo tekst za popuniti, zamijeni ga kasnije.",
    "culture.story": "Ovdje napiši o kulturnom dijelu putovanja — tradicije, hrana, povijest, mjesta koja si posjetio. Ovo je samo tekst za popuniti, zamijeni ga kasnije.",
    "freetime.story": "Ovdje napiši o slobodnom vremenu — plivanje, upoznavanje novih ljudi, vikend izleti, sve što si radio izvan prakse. Ovo je samo tekst za popuniti, zamijeni ga kasnije.",

    "footer.copyright": "© 2026 Erasmus+ Vitalis razmjena",
    "footer.address": "adresa: Vitalis GmbH, Gut Wehlitz, 04435 Schkeuditz, Njemačka",
    "footer.contact": "kontakt: tel:+49 34204 77400",

    "home.slide1": "Dan dobrodošlice",
    "home.slide2": "Kampus Vitalis",
    "home.slide3": "Grad Leipzig",
    "home.slide4": "Dan orijentacije",
    "home.slide5": "Grupna fotografija",
    "home.slide6": "Prvi dojmovi",

    "practice.slide1": "IT laboratorij",
    "practice.slide2": "3D ispis",
    "practice.slide3": "Stanica za lemljenje",
    "practice.slide4": "Zajednički rad",

    "culture.slide1": "Razgledavanje grada",
    "culture.slide2": "Lokalna hrana",
    "culture.slide3": "Posjet muzeju",
    "culture.slide4": "Stari grad",

    "freetime.slide1": "Plivanje",
    "freetime.slide2": "Novi prijatelji",
    "freetime.slide3": "Večernja šetnja",
    "freetime.slide4": "Vikend izlet"
  },

  de: {
    "nav.home": "Start",
    "nav.practice": "Praxis",
    "nav.allPractice": "Alle Praxis",
    "nav.it": "IT",
    "nav.printing": "3D-Druck",
    "nav.wiring": "Verkabelung & Hausinstallationen",
    "nav.smartHome": "Smart Home",
    "nav.smartHome2": "Smart Home Teil 2",
    "nav.gameMaking": "Spieleentwicklung",
    "nav.animation": "3D-Animation",
    "nav.animation2": "3D-Animation Teil 2",
    "nav.digitalBusiness": "Digitales Geschäft",
    "nav.arduino": "Arduino-Alarmanlage",
    "nav.plc": "SPS & Factory I/O",
    "nav.houseModel": "Hausmodell",
    "nav.houseModel2": "Hausmodell Teil 2",
    "nav.appDev": "App-Entwicklung",
    "nav.culture": "Kultur",
    "nav.freetime": "Freizeit",

    "intro.home": "ein Einblick in Vitalis",
    "intro.practice": "Praxis bei Vitalis",
    "intro.culture": "Kultur rund um Leipzig",
    "intro.freetime": "Freizeit in Leipzig",

    "index.eyebrow": "willkommen bei Vitalis",
    "index.boardText": "Drei Monate in Leipzig — Praxis, Kultur und gute Zeiten.",
    "index.paperIntro": "Unser Besuch bei Vitalis",
    "index.cardPracticeTitle": "Praxis →",
    "index.cardPracticeDesc": "IT, 3D-Druck....",
    "index.cardCultureTitle": "Kultur →",
    "index.cardCultureDesc": "Traditionen, Essen, Geschichte, Landschaften",
    "index.cardFreetimeTitle": "Freizeit →",
    "index.cardFreetimeDesc": "Schwimmen, neue Freunde",

    "story.heading": "Was wir gemacht haben",
    "practice.story": "Schreibe hier über die praktische Arbeit — IT-Aufgaben, 3D-Druck, Löten, was auch immer du an diesem Tag gemacht hast. Dies ist nur Platzhaltertext, später ersetzen.",
    "culture.story": "Schreibe hier über die kulturelle Seite der Reise — Traditionen, Essen, Geschichte, besuchte Orte. Dies ist nur Platzhaltertext, später ersetzen.",
    "freetime.story": "Schreibe hier über die Freizeit — Schwimmen, neue Leute treffen, Wochenendausflüge, was auch immer du außerhalb der Praxis gemacht hast. Dies ist nur Platzhaltertext, später ersetzen.",

    "footer.copyright": "© 2026 Erasmus+ Vitalis Austausch",
    "footer.address": "Adresse: Vitalis GmbH, Gut Wehlitz, 04435 Schkeuditz, Deutschland",
    "footer.contact": "Kontakt: tel:+49 34204 77400",

    "home.slide1": "Willkommenstag",
    "home.slide2": "Vitalis Campus",
    "home.slide3": "Stadt Leipzig",
    "home.slide4": "Orientierungstag",
    "home.slide5": "Gruppenfoto",
    "home.slide6": "Erste Eindrücke",

    "practice.slide1": "IT-Labor",
    "practice.slide2": "3D-Druck",
    "practice.slide3": "Lötstation",
    "practice.slide4": "Teamarbeit",

    "culture.slide1": "Stadtrundgang",
    "culture.slide2": "Lokales Essen",
    "culture.slide3": "Museumsbesuch",
    "culture.slide4": "Altstadt",

    "freetime.slide1": "Schwimmen",
    "freetime.slide2": "Neue Freunde",
    "freetime.slide3": "Abendspaziergang",
    "freetime.slide4": "Wochenendausflug"
  }
};

function applyLanguage(lang) {
  if (!translations[lang]) lang = "en";
  const dict = translations[lang];

  // Text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Alt attributes (slideshow images)
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) {
      el.setAttribute("alt", dict[key]);
    }
  });

  // Refresh the visible captions to match the new language, for every slideshow on the page
  slideshowInstances.forEach((inst) => inst.refresh());

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("site-lang", lang);
}

function getPreferredLanguage() {
  const saved = localStorage.getItem("site-lang");
  if (saved && translations[saved]) return saved;
  const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
  if (translations[browserLang]) return browserLang;
  return "en";
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const tabs = document.getElementById('tabs');

if (navToggle && tabs) {
  navToggle.addEventListener('click', () => {
    const isOpen = tabs.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// "Practice" dropdown in navbar
const practiceToggle = document.getElementById('practiceToggle');
const practiceMenu = document.getElementById('practiceMenu');

if (practiceToggle && practiceMenu) {
  practiceToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = practiceMenu.classList.toggle('open');
    practiceToggle.setAttribute('aria-expanded', isOpen);
  });

  // close it if you click anywhere else on the page
  document.addEventListener('click', (e) => {
    if (!practiceToggle.contains(e.target) && !practiceMenu.contains(e.target)) {
      practiceMenu.classList.remove('open');
      practiceToggle.setAttribute('aria-expanded', false);
    }
  });
}

// ---------- Slideshow (supports multiple independent slideshows per page) ----------
const slideshowInstances = [];

function setupSlideshow(scope) {
  const slides = Array.from(scope.querySelectorAll(".mySlides"));
  if (!slides.length) return null;

  const dots = Array.from(scope.querySelectorAll(".demo"));
  const captionEl = scope.querySelector(".caption-text");
  const prevBtn = scope.querySelector(".prev");
  const nextBtn = scope.querySelector(".next");

  let index = 1;
  let timer;

  function render() {
    const active = slides[index - 1];

    slides.forEach((s) => {
      const isActive = s === active;
      s.style.display = isActive ? "block" : "none";
      if (!isActive) {
        const vid = s.querySelector("video");
        if (vid) vid.pause();
      }
    });
    dots.forEach((d) => d.classList.remove("active"));
    if (dots[index - 1]) dots[index - 1].classList.add("active");

    if (captionEl) {
      const img = active ? active.querySelector("img") : null;
      captionEl.textContent = img ? img.alt : (active ? (active.dataset.caption || "") : "");
    }
  }

  function goTo(n) {
    if (n > slides.length) index = 1;
    else if (n < 1) index = slides.length;
    else index = n;
    render();
  }

  function scheduleNext() {
    timer = setTimeout(() => {
      const active = slides[index - 1];
      const vid = active ? active.querySelector("video") : null;
      const videoPlaying = vid && !vid.paused && !vid.ended;
      // Only advance while this slideshow is actually visible on screen, and not mid-video
      if (scope.offsetParent !== null && !videoPlaying) goTo(index + 1);
      scheduleNext();
    }, 5000);
  }

  function restartTimer() {
    clearTimeout(timer);
    scheduleNext();
  }

  if (prevBtn) prevBtn.addEventListener("click", () => { goTo(index - 1); restartTimer(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { goTo(index + 1); restartTimer(); });
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { goTo(i + 1); restartTimer(); });
  });

  goTo(1);
  scheduleNext();

  return { refresh: render };
}

document.querySelectorAll(".hero-slideshow").forEach((scope) => {
  const instance = setupSlideshow(scope);
  if (instance) slideshowInstances.push(instance);
});

// ---------- Practice sub-views (All / IT / 3D Printing) ----------
// Shows only the section matching the URL hash (e.g. practice.html#it),
// falling back to "all" when the hash is empty or doesn't match a view.
function applyPracticeView() {
  const views = document.querySelectorAll(".practice-view");
  if (!views.length) return;

  const hash = window.location.hash.replace("#", "");
  const knownViews = Array.from(views).map((v) => v.dataset.view);
  const target = knownViews.includes(hash) ? hash : "all";

  views.forEach((v) => {
    v.hidden = v.dataset.view !== target;
  });
}

if (document.querySelector(".practice-view")) {
  applyPracticeView();
  window.addEventListener("hashchange", applyPracticeView);
}

// Apply the saved/preferred language now that slideshows (if any) are ready
applyLanguage(getPreferredLanguage());