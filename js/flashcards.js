(function () {
  "use strict";

  const STORAGE_KEY = "aws-ai-practitioner-flashcards-v1";

  const fabBtn = document.getElementById("flashcards-fab");
  const modal = document.getElementById("flashcards-modal");
  const categorySelect = document.getElementById("flashcards-category");
  const counterEl = document.getElementById("flashcards-counter");
  const cardEl = document.getElementById("flashcard");
  const tagEl = document.getElementById("flashcard-tag");
  const termEl = document.getElementById("flashcard-term");
  const definitionEl = document.getElementById("flashcard-definition");
  const prevBtn = document.getElementById("flashcards-prev");
  const nextBtn = document.getElementById("flashcards-next");
  const shuffleBtn = document.getElementById("flashcards-shuffle");

  const fcState = {
    category: "all",
    deck: [], // índices dentro de FLASHCARDS, ya filtrados/barajados
    pos: 0,
    flipped: false,
  };

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function loadFcProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved && typeof saved.category === "string") {
        fcState.category = saved.category;
      }
    } catch (e) { /* ignore corrupt storage */ }
  }

  function saveFcProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ category: fcState.category }));
  }

  function buildCategoryOptions() {
    const categories = [...new Set(FLASHCARDS.map(c => c.category))];
    categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      categorySelect.appendChild(opt);
    });
  }

  function rebuildDeck(preserveTerm) {
    const indices = FLASHCARDS
      .map((c, i) => i)
      .filter(i => fcState.category === "all" || FLASHCARDS[i].category === fcState.category);

    const previousTerm = preserveTerm ? getCurrentCard() : null;
    fcState.deck = shuffleArray(indices);
    fcState.flipped = false;

    if (previousTerm) {
      const foundPos = fcState.deck.findIndex(i => FLASHCARDS[i].term === previousTerm.term);
      fcState.pos = foundPos >= 0 ? foundPos : 0;
    } else {
      fcState.pos = 0;
    }
  }

  function getCurrentCard() {
    if (fcState.deck.length === 0) return null;
    return FLASHCARDS[fcState.deck[fcState.pos]];
  }

  function renderCard() {
    const card = getCurrentCard();
    if (!card) {
      tagEl.textContent = "";
      termEl.textContent = "Sin tarjetas en esta categoría";
      definitionEl.textContent = "";
      counterEl.textContent = "0 / 0";
      return;
    }
    tagEl.textContent = card.category;
    termEl.textContent = card.term;
    definitionEl.textContent = card.definition;
    counterEl.textContent = `${fcState.pos + 1} / ${fcState.deck.length}`;
    cardEl.classList.toggle("flipped", fcState.flipped);
  }

  function goTo(delta) {
    if (fcState.deck.length === 0) return;
    fcState.pos = (fcState.pos + delta + fcState.deck.length) % fcState.deck.length;
    fcState.flipped = false;
    renderCard();
  }

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  fabBtn.addEventListener("click", openModal);

  document.querySelectorAll("[data-fc-close]").forEach(el => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  cardEl.addEventListener("click", () => {
    fcState.flipped = !fcState.flipped;
    renderCard();
  });

  prevBtn.addEventListener("click", () => goTo(-1));
  nextBtn.addEventListener("click", () => goTo(1));

  shuffleBtn.addEventListener("click", () => {
    fcState.deck = shuffleArray(fcState.deck);
    fcState.pos = 0;
    fcState.flipped = false;
    renderCard();
  });

  categorySelect.addEventListener("change", () => {
    fcState.category = categorySelect.value;
    saveFcProgress();
    rebuildDeck(false);
    renderCard();
  });

  loadFcProgress();
  buildCategoryOptions();
  categorySelect.value = fcState.category;
  rebuildDeck(false);
  renderCard();
})();
