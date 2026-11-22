/* MUV STUDIO — comportamento do site. Os dados ficam em js/projetos.js */
(function () {
  "use strict";
  var CFG = window.MUV_CONFIG, PROJ = window.MUV_PROJETOS, CATS = window.MUV_CATEGORIAS;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- WhatsApp ---------- */
  function waLink(msg) {
    return "https://wa.me/" + CFG.whatsappNumero + "?text=" + encodeURIComponent(msg || CFG.whatsappMensagem);
  }
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waLink(); a.target = "_blank"; a.rel = "noopener";
  });
  if (/^5500000000000$|^0+$/.test(CFG.whatsappNumero)) {
    console.warn("[MUV] Troque o número em js/projetos.js (whatsappNumero) — ainda é o placeholder.");
  }

  /* ---------- Header / menu mobile ---------- */
  var header = $(".site-header"), nav = $("#nav"), menuBtn = $("#menuBtn");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 24); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  function setMenu(open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });

  /* ---------- Rodapé: redes ---------- */
  var socials = $("#socials"), R = CFG.redes || {};
  [["Instagram", R.instagram], ["YouTube", R.youtube], ["E-mail", R.email && "mailto:" + R.email]].forEach(function (s) {
    if (!s[1]) return;
    var li = document.createElement("li"), a = document.createElement("a");
    a.href = s[1]; a.textContent = s[0];
    if (s[1].indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
    li.appendChild(a); socials.appendChild(li);
  });
  $("#ano").textContent = new Date().getFullYear();

  /* ---------- Reveal ao rolar ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }) : null;
  function reveal(el) { if (io && !reduce) io.observe(el); else el.classList.add("in"); }
  document.querySelectorAll(".svc,.quote,.sec-head,.about-in").forEach(function (el) { el.classList.add("reveal"); reveal(el); });

  /* ---------- Portfólio ---------- */
  var grid = $("#grid"), filters = $("#filters"), live = $("#countLive");
  var PLAY = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>';

  function ratioNum(ar) { var p = String(ar).split("/"); return (+p[0]) / (+p[1]) || 16 / 9; }

  PROJ.forEach(function (p) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "card"; b.dataset.cat = p.categoria; b.dataset.id = p.id;
    b.style.setProperty("--ar", p.aspectRatio);
    b.setAttribute("aria-label", "Assistir: " + p.titulo + " (" + (CATS[p.categoria] || p.categoria) + ")");
    var w = ratioNum(p.aspectRatio) < 1 ? 720 : 1280, h = ratioNum(p.aspectRatio) < 1 ? 1280 : 720;
    b.innerHTML =
      '<img src="' + p.thumb + '" width="' + w + '" height="' + h + '" loading="lazy" alt="Capa do projeto ' + p.titulo.replace(/"/g, "&quot;") + '">' +
      '<span class="card-play">' + PLAY + '</span>' +
      '<span class="card-info"><span class="card-cat">' + (CATS[p.categoria] || p.categoria) + '</span><span class="card-title">' + p.titulo + '</span></span>';
    b.addEventListener("click", function () { openModal(p, b); });
    // prévia no hover (só mouse; no toque o clique abre direto o modal)
    b.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") startPreview(b, p); });
    b.addEventListener("pointerleave", function () { stopPreview(b); });
    b.addEventListener("focus", function () { startPreview(b, p); });
    b.addEventListener("blur", function () { stopPreview(b); });
    grid.appendChild(b); reveal(b);
  });

  function startPreview(card, p) {
    if (reduce || !p.previewVideo) return;               // sem prévia -> fallback visual (zoom + brilho)
    var v = card.querySelector("video");
    if (!v) {
      v = document.createElement("video");
      v.muted = true; v.loop = true; v.playsInline = true; v.preload = "none"; v.setAttribute("aria-hidden", "true");
      v.addEventListener("error", function () { v.remove(); card.classList.remove("playing"); }, { once: true });
      v.src = p.previewVideo;
      card.insertBefore(v, card.querySelector(".card-play"));
    }
    var pr = v.play(); if (pr && pr.then) pr.then(function () { card.classList.add("playing"); }).catch(function () {});
  }
  function stopPreview(card) {
    var v = card.querySelector("video");
    card.classList.remove("playing");
    if (v) { v.pause(); try { v.currentTime = 0; } catch (e) {} }
  }

  // filtros
  var counts = { todos: PROJ.length };
  PROJ.forEach(function (p) { counts[p.categoria] = (counts[p.categoria] || 0) + 1; });
  Object.keys(CATS).forEach(function (k, i) {
    if (k !== "todos" && !counts[k]) return;
    var c = document.createElement("button");
    c.type = "button"; c.className = "chip"; c.dataset.f = k; c.textContent = CATS[k];
    c.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    c.addEventListener("click", function () { applyFilter(k); });
    filters.appendChild(c);
  });
  function applyFilter(k) {
    filters.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", c.dataset.f === k); });
    var n = 0;
    grid.querySelectorAll(".card").forEach(function (card) {
      var show = k === "todos" || card.dataset.cat === k;
      card.hidden = !show; if (show) { n++; card.classList.add("in"); }
    });
    live.textContent = n + " projetos em " + CATS[k];
  }

  /* ---------- Modal ---------- */
  var modal = $("#modal"), box = $("#modalBox"), player = $("#player"), lastFocus = null;
  var inertEls = [$("header"), $("main"), $("footer")];

  function parseVideo(url) {
    if (!url) return null;
    var m;
    if ((m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/)))
      return { type: "iframe", src: "https://www.youtube-nocookie.com/embed/" + m[1] + "?autoplay=1&rel=0&modestbranding=1" };
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-f0-9]+))?/)) && url.indexOf("player.vimeo.com") === -1)
      return { type: "iframe", src: "https://player.vimeo.com/video/" + m[1] + "?autoplay=1" + (m[2] ? "&h=" + m[2] : "") };
    if (/\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(url)) return { type: "video", src: url };
    return { type: "iframe", src: url };                  // qualquer outro embed configurado
  }

  function state(html) { player.innerHTML = '<div class="state">' + html + "</div>"; }

  function openModal(p, opener) {
    lastFocus = opener || document.activeElement;
    var ar = p.aspectRatio || "16/9";
    player.style.setProperty("--ar", ar);
    player.style.setProperty("--arn", ratioNum(ar));
    $("#mTitle").textContent = p.titulo;
    $("#mCat").textContent = CATS[p.categoria] || p.categoria || "";
    $("#mDesc").textContent = p.descricao || "";
    $(".modal-info [data-wa]").href = waLink('Olá, Neri! Vi o projeto "' + p.titulo + '" no portfólio da MUV STUDIO e quero um vídeo assim.');

    var v = parseVideo(p.fullVideoUrl);
    if (!v) {
      state('<strong style="color:#fff">Vídeo em breve</strong><span>Este projeto ainda não tem o vídeo completo configurado.</span>');
    } else {
      state('<div class="spinner" role="status" aria-label="Carregando vídeo"></div>');
      var el;
      if (v.type === "video") {
        el = document.createElement("video");
        el.controls = true; el.autoplay = true; el.playsInline = true; el.preload = "metadata";
        if (p.thumb) el.poster = p.thumb;
        el.addEventListener("loadeddata", clearState);
        el.addEventListener("error", function () { state("<strong style=\"color:#fff\">Não foi possível carregar o vídeo</strong><span>Confira o link em js/projetos.js.</span>"); });
        el.src = v.src;
      } else {
        el = document.createElement("iframe");
        el.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
        el.allowFullscreen = true; el.title = "Vídeo: " + p.titulo;
        el.addEventListener("load", clearState);
        el.src = v.src;
      }
      player.appendChild(el);
    }
    modal.hidden = false; document.body.classList.add("lock");
    inertEls.forEach(function (e) { e && e.setAttribute("inert", ""); });
    $(".modal-x").focus();
  }
  function clearState() { var s = player.querySelector(".state"); if (s) s.remove(); }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true; player.innerHTML = "";           // remove iframe/video => para o áudio
    document.body.classList.remove("lock");
    inertEls.forEach(function (e) { e && e.removeAttribute("inert"); });
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  modal.addEventListener("click", function (e) { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") { closeModal(); return; }
    if (e.key === "Tab") {                                // focus trap
      var f = box.querySelectorAll('a[href],button:not([disabled]),iframe,video[controls]');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // showreel do hero
  $("#reelBtn").addEventListener("click", function (e) {
    openModal({
      titulo: "Showreel MUV STUDIO", categoria: "", aspectRatio: "16/9",
      thumb: "assets/img/wallpaper5-vidro.jpg", fullVideoUrl: CFG.showreelUrl,
      descricao: "Uma amostra do trabalho de edição e produção da MUV STUDIO."
    }, e.currentTarget);
    $("#mCat").textContent = "Showreel";
  });
})();
