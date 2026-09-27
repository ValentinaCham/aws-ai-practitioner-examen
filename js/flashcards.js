(function () {
  "use strict";

  const STORAGE_KEY = "aws-ai-practitioner-flashcards-v2";

  const fabBtn = document.getElementById("flashcards-fab");
  const modal = document.getElementById("flashcards-modal");
  const categoryBtn = document.getElementById("flashcards-category-btn");
  const categoryPanel = document.getElementById("flashcards-category-panel");
  const categoryListEl = document.getElementById("flashcards-category-list");
  const counterEl = document.getElementById("flashcards-counter");
  const cardEl = document.getElementById("flashcard");
  const tagEl = document.getElementById("flashcard-tag");
  const termEl = document.getElementById("flashcard-term");
  const definitionEl = document.getElementById("flashcard-definition");
  const prevBtn = document.getElementById("flashcards-prev");
  const nextBtn = document.getElementById("flashcards-next");
  const shuffleBtn = document.getElementById("flashcards-shuffle");

  const ALL_CATEGORIES = [...new Set(FLASHCARDS.map(c => c.category))];
  const CATEGORY_COUNTS = ALL_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = FLASHCARDS.filter(c => c.category === cat).length;
    return acc;
  }, {});

  const fcState = {
    categories: new Set(ALL_CATEGORIES), // categorías actualmente seleccionadas (multi-selección)
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
      if (saved && Array.isArray(saved.categories)) {
        const valid = saved.categories.filter(c => ALL_CATEGORIES.includes(c));
        if (valid.length > 0) {
          fcState.categories = new Set(valid);
        }
      }
    } catch (e) { /* ignore corrupt storage */ }
  }

  function saveFcProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ categories: [...fcState.categories] }));
  }

  function buildCategoryPanel() {
    ALL_CATEGORIES.forEach(cat => {
      const label = document.createElement("label");
      label.className = "flashcards-category-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = cat;
      checkbox.checked = fcState.categories.has(cat);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          fcState.categories.add(cat);
        } else {
          fcState.categories.delete(cat);
        }
        onCategoriesChanged(true);
      });

      const text = document.createElement("span");
      text.textContent = `${cat} (${CATEGORY_COUNTS[cat]})`;

      label.appendChild(checkbox);
      label.appendChild(text);
      categoryListEl.appendChild(label);
    });
  }

  function setAllCheckboxes(checked) {
    categoryListEl.querySelectorAll("input[type=checkbox]").forEach(cb => {
      cb.checked = checked;
    });
  }

  function onCategoriesChanged(preserveTerm) {
    saveFcProgress();
    updateCategoryButtonLabel();
    rebuildDeck(preserveTerm);
    renderCard();
  }

  function updateCategoryButtonLabel() {
    const total = ALL_CATEGORIES.length;
    const selected = fcState.categories.size;
    let label;
    if (selected === total) {
      label = "💕 Todas las categorías";
    } else if (selected === 0) {
      label = "🚫 Ninguna categoría";
    } else if (selected === 1) {
      label = "🏷️ " + [...fcState.categories][0];
    } else {
      label = `🏷️ ${selected} categorías`;
    }
    categoryBtn.textContent = label + " ▾";
  }

  function rebuildDeck(preserveTerm) {
    const indices = FLASHCARDS
      .map((c, i) => i)
      .filter(i => fcState.categories.has(FLASHCARDS[i].category));

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
      termEl.textContent = "Sin tarjetas en esta selección";
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
    categoryPanel.hidden = true;
    document.body.style.overflow = "";
  }

  fabBtn.addEventListener("click", openModal);

  document.querySelectorAll("[data-fc-close]").forEach(el => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (!categoryPanel.hidden) { categoryPanel.hidden = true; return; }
    if (!modal.hidden) closeModal();
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

  categoryBtn.addEventListener("click", () => {
    categoryPanel.hidden = !categoryPanel.hidden;
  });

  document.addEventListener("click", e => {
    if (categoryPanel.hidden) return;
    const clickedInsidePanel = categoryPanel.contains(e.target);
    const clickedButton = categoryBtn.contains(e.target);
    if (!clickedInsidePanel && !clickedButton) {
      categoryPanel.hidden = true;
    }
  });

  document.querySelector("[data-fc-cat-all]").addEventListener("click", () => {
    fcState.categories = new Set(ALL_CATEGORIES);
    setAllCheckboxes(true);
    onCategoriesChanged(true);
  });

  document.querySelector("[data-fc-cat-none]").addEventListener("click", () => {
    fcState.categories = new Set();
    setAllCheckboxes(false);
    onCategoriesChanged(true);
  });

  loadFcProgress();
  buildCategoryPanel();
  updateCategoryButtonLabel();
  rebuildDeck(false);
  renderCard();
})();
