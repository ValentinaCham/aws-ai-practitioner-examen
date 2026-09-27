(function () {
  "use strict";

  const STORAGE_KEY = "aws-ai-practitioner-progress-v1";

  const state = {
    current: 0,
    answers: new Array(QUESTIONS.length).fill(null), // cada item: { selected: [keys], submitted: bool, correct: bool }
  };

  const quizCard = document.getElementById("quiz-card");
  const progressBarInner = document.getElementById("progress-bar-inner");
  const progressLabel = document.getElementById("progress-label");
  const scoreLabel = document.getElementById("score-label");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const confettiLayer = document.getElementById("confetti-layer");

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved && Array.isArray(saved.answers) && saved.answers.length === QUESTIONS.length) {
        state.answers = saved.answers;
        state.current = Math.min(saved.current || 0, QUESTIONS.length);
      }
    } catch (e) { /* ignore corrupt storage */ }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getScore() {
    return state.answers.filter(a => a && a.submitted && a.correct).length;
  }

  function getAnsweredCount() {
    return state.answers.filter(a => a && a.submitted).length;
  }

  function updateProgressUI() {
    const total = QUESTIONS.length;
    const idx = Math.min(state.current + 1, total);
    const pct = state.current >= total ? 100 : Math.round((state.current / total) * 100);
    progressBarInner.style.width = pct + "%";
    if (state.current >= total) {
      progressLabel.textContent = "¡Examen completado! 💕";
    } else {
      progressLabel.textContent = `Pregunta ${idx} de ${total}`;
    }
    scoreLabel.textContent = `Correctas: ${getScore()} / ${getAnsweredCount()}`;
  }

  function renderOptionItem(question, opt, answer, submitted) {
    const li = document.createElement("label");
    li.className = "option-item";
    li.dataset.key = opt.key;

    const isMulti = question.type === "multi";
    const input = document.createElement("input");
    input.type = isMulti ? "checkbox" : "radio";
    input.name = "option-" + question.id;
    input.value = opt.key;

    const selectedKeys = (answer && answer.selected) || [];
    if (selectedKeys.includes(opt.key)) {
      input.checked = true;
      li.classList.add("selected");
    }

    const content = document.createElement("div");
    content.style.flex = "1";

    const textSpan = document.createElement("span");
    textSpan.innerHTML = `<span class="option-key">${opt.key}.</span> ${opt.text}`;
    content.appendChild(textSpan);

    li.appendChild(input);
    li.appendChild(content);

    if (submitted) {
      input.disabled = true;
      li.classList.add("disabled");
      const wasSelected = selectedKeys.includes(opt.key);

      if (opt.correct) {
        li.classList.add("correct-answer");
      } else if (wasSelected) {
        li.classList.add("wrong-answer");
      }

      const icon = document.createElement("span");
      icon.className = "option-icon";
      if (opt.correct) {
        icon.textContent = "✅";
      } else if (wasSelected) {
        icon.textContent = "❌";
      }
      if (icon.textContent) li.appendChild(icon);

      const reason = document.createElement("span");
      reason.className = "option-reason";
      reason.textContent = opt.reason;
      content.appendChild(reason);
    } else {
      input.addEventListener("change", () => onOptionChange(question, opt.key, isMulti));
    }

    return li;
  }

  function onOptionChange(question, key, isMulti) {
    const idx = question.id - 1;
    if (!state.answers[idx]) {
      state.answers[idx] = { selected: [], submitted: false, correct: false };
    }
    const answer = state.answers[idx];

    if (isMulti) {
      const pos = answer.selected.indexOf(key);
      if (pos >= 0) {
        answer.selected.splice(pos, 1);
      } else {
        answer.selected.push(key);
      }
    } else {
      answer.selected = [key];
    }
    saveProgress();
    renderQuestion(); // re-render to reflect selection + enable/disable submit
  }

  function buildFeedback(question, answer) {
    const correctKeys = question.options.filter(o => o.correct).map(o => o.key);
    const selectedSet = new Set(answer.selected);
    const correctSet = new Set(correctKeys);
    const isFullyCorrect =
      selectedSet.size === correctSet.size &&
      [...selectedSet].every(k => correctSet.has(k));

    const box = document.createElement("div");
    box.className = "feedback-box " + (isFullyCorrect ? "correct" : "incorrect");

    const title = document.createElement("strong");
    title.className = "feedback-title";

    const body = document.createElement("p");
    body.style.margin = "0";

    if (isFullyCorrect) {
      title.textContent = "¡Felicidades, mi amor! 💗🌭 ¡Lo lograste!";
      const correctOpt = question.options.find(o => o.correct && question.type === "single");
      let explanation;
      if (question.type === "single" && correctOpt) {
        explanation = `Elegiste correctamente la opción ${correctOpt.key}: ${correctOpt.reason} Las demás alternativas no aplican porque describen conceptos distintos al que realmente responde la pregunta — revisa el detalle de cada una abajo. ¡Sigue así, vas a aprobar con el corazón lleno de confianza! 🐾💕`;
      } else {
        const list = correctKeys.join(" y ");
        explanation = `Marcaste exactamente las opciones correctas (${list}). Cada una aporta una razón distinta y necesaria para la respuesta completa; las demás no encajan por los motivos detallados abajo. ¡Excelente instinto, sigue así! 🐾💕`;
      }
      body.textContent = explanation;
    } else {
      title.textContent = "Casi, cariño 🐕💗 — revisemos juntas por qué";
      const correctList = correctKeys.join(", ");
      body.textContent = `La(s) respuesta(s) correcta(s) era(n): ${correctList}. Debajo te dejo, opción por opción, por qué la correcta sí aplica y por qué las demás no — para que la próxima vuelta a esta pregunta la tengas segurísima. ¡Un dachshund cree en ti! 🌭✨`;
    }

    box.appendChild(title);
    box.appendChild(body);
    return box;
  }

  function launchConfetti() {
    const emojis = ["💕", "💗", "🌭", "🐾", "💖", "✨"];
    for (let i = 0; i < 24; i++) {
      const span = document.createElement("span");
      span.className = "confetti-piece";
      span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      span.style.left = Math.random() * 100 + "vw";
      span.style.animationDuration = 2.5 + Math.random() * 1.8 + "s";
      span.style.fontSize = 1 + Math.random() * 1.2 + "rem";
      confettiLayer.appendChild(span);
      setTimeout(() => span.remove(), 4500);
    }
  }

  function renderQuestion() {
    quizCard.innerHTML = "";

    if (state.current >= QUESTIONS.length) {
      renderSummary();
      updateProgressUI();
      updateNavButtons();
      return;
    }

    const question = QUESTIONS[state.current];
    const idx = question.id - 1;
    if (!state.answers[idx]) {
      state.answers[idx] = { selected: [], submitted: false, correct: false };
    }
    const answer = state.answers[idx];

    const meta = document.createElement("div");
    meta.className = "question-meta";
    meta.textContent =
      question.type === "multi"
        ? `Pregunta ${question.id} · Selecciona ${question.pick} opciones`
        : `Pregunta ${question.id} · Selecciona 1 opción`;

    const qText = document.createElement("p");
    qText.className = "question-text";
    qText.textContent = question.question;

    const list = document.createElement("div");
    list.className = "options-list";
    question.options.forEach(opt => {
      list.appendChild(renderOptionItem(question, opt, answer, answer.submitted));
    });

    quizCard.appendChild(meta);
    quizCard.appendChild(qText);
    quizCard.appendChild(list);

    if (answer.submitted) {
      quizCard.appendChild(buildFeedback(question, answer));
    } else {
      const submitBtn = document.createElement("button");
      submitBtn.className = "btn btn-primary";
      submitBtn.textContent = "Confirmar respuesta 💌";
      const enoughSelected = answer.selected.length === question.pick;
      submitBtn.disabled = !enoughSelected;
      submitBtn.addEventListener("click", () => submitAnswer(question, answer));
      quizCard.appendChild(submitBtn);
    }

    updateProgressUI();
    updateNavButtons();
  }

  function submitAnswer(question, answer) {
    const correctKeys = new Set(question.options.filter(o => o.correct).map(o => o.key));
    const selectedSet = new Set(answer.selected);
    const isCorrect =
      selectedSet.size === correctKeys.size &&
      [...selectedSet].every(k => correctKeys.has(k));

    answer.submitted = true;
    answer.correct = isCorrect;
    saveProgress();
    renderQuestion();

    if (isCorrect) {
      launchConfetti();
    }
  }

  function renderSummary() {
    const total = QUESTIONS.length;
    const score = getScore();
    const pct = Math.round((score / total) * 100);

    let emoji, message;
    if (pct >= 90) {
      emoji = "💖🌭👑";
      message = "¡Excelencia total! Tienes esto dominado, futura AWS AI Practitioner certificada. ¡Te amo, campeona!";
    } else if (pct >= 75) {
      emoji = "💗🐾";
      message = "¡Muy bien hecho! Estás lista para el examen real, solo repasa los detalles que fallaste.";
    } else if (pct >= 50) {
      emoji = "🌭💕";
      message = "Vas por buen camino. Repasemos juntas la teoría de las que fallaste y lo lograrás.";
    } else {
      emoji = "🐕💌";
      message = "Este es solo el comienzo del entrenamiento. Repasa la guía de teoría y vuelve a intentarlo, ¡confío en ti!";
    }

    const box = document.createElement("div");
    box.className = "summary-box";
    box.innerHTML = `
      <span class="summary-emoji">${emoji}</span>
      <div class="summary-score">${score} / ${total} correctas (${pct}%)</div>
      <p class="summary-message">${message}</p>
    `;
    quizCard.appendChild(box);

    if (pct >= 75) {
      launchConfetti();
    }
  }

  function updateNavButtons() {
    prevBtn.disabled = state.current <= 0;
    nextBtn.disabled = state.current >= QUESTIONS.length;
    const currentAnswer = state.answers[state.current];
    if (state.current < QUESTIONS.length) {
      nextBtn.textContent = currentAnswer && currentAnswer.submitted ? "Siguiente ➡️" : "Saltar ➡️";
    }
  }

  prevBtn.addEventListener("click", () => {
    if (state.current > 0) {
      state.current--;
      saveProgress();
      renderQuestion();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (state.current < QUESTIONS.length) {
      state.current++;
      saveProgress();
      renderQuestion();
    }
  });

  restartBtn.addEventListener("click", () => {
    if (confirm("¿Reiniciar todo el examen desde la pregunta 1? 🐾")) {
      state.current = 0;
      state.answers = new Array(QUESTIONS.length).fill(null);
      saveProgress();
      renderQuestion();
    }
  });

  loadProgress();
  renderQuestion();
})();
