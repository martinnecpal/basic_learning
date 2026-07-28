(function () {
  "use strict";

  var app = document.querySelector(".app");
  var sidebar = document.getElementById("sidebar");
  var openBtn = document.getElementById("sidebar-open");
  var closeBtn = document.getElementById("sidebar-close");
  var backdrop = document.getElementById("sidebar-backdrop");
  var expandAllBtn = document.getElementById("expand-all");
  var collapseAllBtn = document.getElementById("collapse-all");
  var themeToggleBtn = document.getElementById("theme-toggle");

  var STORAGE_KEY = "chapter-toggle-state";

  function readState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function writeState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* localStorage unavailable (e.g. private mode) — state just won't persist */
    }
  }

  function setToggle(toggleBtn, isOpen) {
    var list = document.getElementById(toggleBtn.getAttribute("aria-controls"));
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (list) list.classList.toggle("is-open", isOpen);
  }

  var toggles = Array.prototype.slice.call(document.querySelectorAll(".chapter-toggle"));
  var state = readState();

  toggles.forEach(function (toggle) {
    var id = toggle.getAttribute("data-chapter-id");
    var alreadyOpen = toggle.getAttribute("aria-expanded") === "true";
    var saved = state[id];
    var isOpen = typeof saved === "boolean" ? saved : alreadyOpen;
    setToggle(toggle, isOpen);

    toggle.addEventListener("click", function () {
      var nowOpen = toggle.getAttribute("aria-expanded") !== "true";
      setToggle(toggle, nowOpen);
      state[id] = nowOpen;
      writeState(state);
    });
  });

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", function () {
      toggles.forEach(function (toggle) {
        setToggle(toggle, true);
        state[toggle.getAttribute("data-chapter-id")] = true;
      });
      writeState(state);
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", function () {
      toggles.forEach(function (toggle) {
        setToggle(toggle, false);
        state[toggle.getAttribute("data-chapter-id")] = false;
      });
      writeState(state);
    });
  }

  // Highlight the current section link within an open chapter.
  var here = window.location.pathname + window.location.hash;
  document.querySelectorAll(".section-list a").forEach(function (link) {
    if (link.getAttribute("href") === here || (window.location.hash && link.getAttribute("href").endsWith(window.location.hash))) {
      link.classList.add("is-active");
    }
  });

  // Mobile drawer.
  function openSidebar() {
    app.classList.add("sidebar-is-open");
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
  }
  function closeSidebar() {
    app.classList.remove("sidebar-is-open");
    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
  }
  if (openBtn) openBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (backdrop) backdrop.addEventListener("click", closeSidebar);

  // Theme toggle (light/dark), independent of OS preference once chosen.
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-theme");
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var isDark = current ? current === "dark" : prefersDark;
      var next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* ignore */
      }
    });
  }
})();
