// JaeForge — progressive enhancement only. The page is fully readable without JS.
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var cards = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !cards.length) {
    cards.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  cards.forEach(function (el) { io.observe(el); });
  // Safety net: never leave content hidden (print, capture tools, odd embeds).
  setTimeout(function () {
    cards.forEach(function (el) { el.classList.add("is-visible"); });
  }, 1600);
})();
