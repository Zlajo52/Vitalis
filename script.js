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
    "nav.graduation": "Graduation",
    "nav.culture": "Culture",
    "culture.slide1": "University of Leipzig main building",
    "culture.slide2": "The Reichstag building in Berlin",
    "culture.slide3": "Brandenburg Gate in Berlin",
    "culture.slide4": "Berlin Cathedral",
    "culture.slide5": "The Altes Museum in Berlin",
    "culture.slide6": "The World Clock at Alexanderplatz",
    "culture.slide7": "In front of a church in Dresden",
    "culture.slide8": "Another visit to Dresden's old town",
    "culture.slide9": "At the Monument to the Battle of the Nations in Leipzig",
    "culture.slide10": "313 steps to the top of the monument",
    "culture.slide11": "The view over Leipzig from the top",
    "culture.slide12": "On a group visit to BMW",
    "freetime.slide1": "Watching football on a free evening",
    "freetime.slide2": "Passing the BMW Group plant on a drive",
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
    "culture.story": "We spent our weekends exploring beyond Leipzig: the university campus here, day trips to Dresden and its old town churches, and a full day in Berlin seeing the Reichstag, Brandenburg Gate, Berlin Cathedral and the Altes Museum. Closer to home we climbed the 313 steps of the Monument to the Battle of the Nations for a view over the whole city, and we also went on a group visit to BMW.",
    "freetime.story": "Outside of practice we kept it simple — watching football together on a free evening, and taking in the sights on the road, like driving past the BMW Group plant.",

    "footer.copyright": "© 2026 Erasmus+ Vitalis Exchange",
    "footer.address": "address: Vitalis GmbH, Gut Wehlitz, 04435 Schkeuditz, Germany",
    "footer.contact": "contact: tel:+49 34204 77400",

    "home.slide1": "Arrival in Leipzig",
    "home.slide2": "Vitalis campus",
    "home.slide3": "Leipzig city",
    "home.slide4": "Orientation day",
    "home.slide5": "Group photo",
    "home.slide6": "First impressions",
    "home.slide7": "Heading home",

    "practice.slide1": "IT Lab",
    "practice.slide2": "3D Printing",
    "practice.slide3": "Soldering station",
    "practice.slide4": "Working together",
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
    "nav.graduation": "Dodjela certifikata",
    "nav.culture": "Kultura",
    "culture.slide1": "Glavna zgrada Sveučilišta u Leipzigu",
    "culture.slide2": "Zgrada Reichstaga u Berlinu",
    "culture.slide3": "Brandenburška vrata u Berlinu",
    "culture.slide4": "Berlinska katedrala",
    "culture.slide5": "Altes Museum u Berlinu",
    "culture.slide6": "Svjetski sat na Alexanderplatzu",
    "culture.slide7": "Ispred crkve u Dresdenu",
    "culture.slide8": "Još jedan posjet starom gradu Dresdena",
    "culture.slide9": "Kod Spomenika bitci naroda u Leipzigu",
    "culture.slide10": "313 stepenica do vrha spomenika",
    "culture.slide11": "Pogled na Leipzig s vrha",
    "culture.slide12": "Na grupnom posjetu BMW-u",
    "freetime.slide1": "Gledanje nogometa u slobodnoj večeri",
    "freetime.slide2": "Prolazak pored tvornice BMW Group",
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
    "culture.story": "Vikende smo provodili istražujući okolicu Leipziga: ovdje smo obišli sveučilišni kampus, otišli na izlete u Dresden i njegove crkve u starom gradu, te proveli cijeli dan u Berlinu gdje smo vidjeli Reichstag, Brandenburška vrata, Berlinsku katedralu i Altes Museum. Bliže kući popeli smo se uz 313 stepenica Spomenika bitci naroda za pogled na cijeli grad, a posjetili smo i BMW u grupi.",
    "freetime.story": "Izvan prakse držali smo se jednostavnih stvari — gledanje nogometa zajedno u slobodnoj večeri, i uživanje u pogledima na cesti, poput prolaska pored tvornice BMW Group.",

    "footer.copyright": "© 2026 Erasmus+ Vitalis razmjena",
    "footer.address": "adresa: Vitalis GmbH, Gut Wehlitz, 04435 Schkeuditz, Njemačka",
    "footer.contact": "kontakt: tel:+49 34204 77400",

    "home.slide1": "Dolazak u Leipzig",
    "home.slide2": "Kampus Vitalis",
    "home.slide3": "Grad Leipzig",
    "home.slide4": "Dan orijentacije",
    "home.slide5": "Grupna fotografija",
    "home.slide6": "Prvi dojmovi",
    "home.slide7": "Povratak kući",

    "practice.slide1": "IT laboratorij",
    "practice.slide2": "3D ispis",
    "practice.slide3": "Stanica za lemljenje",
    "practice.slide4": "Zajednički rad",
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
    "nav.graduation": "Abschluss",
    "nav.culture": "Kultur",
    "culture.slide1": "Hauptgebäude der Universität Leipzig",
    "culture.slide2": "Das Reichstagsgebäude in Berlin",
    "culture.slide3": "Brandenburger Tor in Berlin",
    "culture.slide4": "Berliner Dom",
    "culture.slide5": "Das Alte Museum in Berlin",
    "culture.slide6": "Die Weltzeituhr am Alexanderplatz",
    "culture.slide7": "Vor einer Kirche in Dresden",
    "culture.slide8": "Noch ein Besuch in der Dresdner Altstadt",
    "culture.slide9": "Am Völkerschlachtdenkmal in Leipzig",
    "culture.slide10": "313 Stufen bis zur Spitze des Denkmals",
    "culture.slide11": "Der Blick über Leipzig von oben",
    "culture.slide12": "Bei einem Gruppenbesuch bei BMW",
    "freetime.slide1": "Fußball schauen an einem freien Abend",
    "freetime.slide2": "Vorbeifahrt am BMW Group Werk",
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
    "culture.story": "An den Wochenenden haben wir Leipzig und die Umgebung erkundet: den Universitätscampus hier, Tagesausflüge nach Dresden mit seinen Altstadtkirchen und einen ganzen Tag in Berlin mit Reichstag, Brandenburger Tor, Berliner Dom und dem Alten Museum. Näher an zu Hause sind wir die 313 Stufen des Völkerschlachtdenkmals hinaufgestiegen, für einen Blick über die ganze Stadt, und wir haben gemeinsam BMW besucht.",
    "freetime.story": "Außerhalb der Praxis hielten wir es einfach — gemeinsam Fußball schauen an einem freien Abend und die Aussicht unterwegs genießen, etwa bei der Vorbeifahrt am BMW Group Werk.",

    "footer.copyright": "© 2026 Erasmus+ Vitalis Austausch",
    "footer.address": "Adresse: Vitalis GmbH, Gut Wehlitz, 04435 Schkeuditz, Deutschland",
    "footer.contact": "Kontakt: tel:+49 34204 77400",

    "home.slide1": "Ankunft in Leipzig",
    "home.slide2": "Vitalis Campus",
    "home.slide3": "Stadt Leipzig",
    "home.slide4": "Orientierungstag",
    "home.slide5": "Gruppenfoto",
    "home.slide6": "Erste Eindrücke",
    "home.slide7": "Auf dem Heimweg",

    "practice.slide1": "IT-Labor",
    "practice.slide2": "3D-Druck",
    "practice.slide3": "Lötstation",
    "practice.slide4": "Teamarbeit",
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