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

  // Sidebar show/hide. Below 901px it's an overlay drawer (sidebar-is-open);
  // at 901px+ it's a persistent collapse of the sidebar column (sidebar-collapsed),
  // remembered across visits.
  var DESKTOP_QUERY = "(min-width: 901px)";
  var isDesktop = function () {
    return window.matchMedia && window.matchMedia(DESKTOP_QUERY).matches;
  };

  var SIDEBAR_COLLAPSED_KEY = "sidebar-collapsed";
  var startCollapsed = isDesktop() && localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "true";
  if (startCollapsed) {
    app.classList.add("sidebar-collapsed");
  }
  if (openBtn) {
    openBtn.setAttribute("aria-expanded", startCollapsed ? "false" : "true");
    openBtn.setAttribute("aria-label", startCollapsed ? "Show menu" : "Hide menu");
  }

  function openSidebar() {
    if (isDesktop()) {
      app.classList.remove("sidebar-collapsed");
      try { localStorage.setItem(SIDEBAR_COLLAPSED_KEY, "false"); } catch (e) { /* ignore */ }
    } else {
      app.classList.add("sidebar-is-open");
    }
    if (openBtn) {
      openBtn.setAttribute("aria-expanded", "true");
      openBtn.setAttribute("aria-label", "Hide menu");
    }
  }
  function closeSidebar() {
    if (isDesktop()) {
      app.classList.add("sidebar-collapsed");
      try { localStorage.setItem(SIDEBAR_COLLAPSED_KEY, "true"); } catch (e) { /* ignore */ }
    } else {
      app.classList.remove("sidebar-is-open");
    }
    if (openBtn) {
      openBtn.setAttribute("aria-expanded", "false");
      openBtn.setAttribute("aria-label", "Show menu");
    }
  }
  function toggleSidebar() {
    var isHidden = isDesktop()
      ? app.classList.contains("sidebar-collapsed")
      : !app.classList.contains("sidebar-is-open");
    if (isHidden) {
      openSidebar();
    } else {
      closeSidebar();
    }
  }
  if (openBtn) openBtn.addEventListener("click", toggleSidebar);
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
