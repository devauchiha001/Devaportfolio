(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var nav = document.getElementById('primary-nav');
  if (!header || !nav) return;

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sections = links.map(function (link) {
    var id = link.getAttribute('href');
    return id && id.length > 1 ? document.querySelector(id) : null;
  }).filter(Boolean);

  function updateHeaderState() {
    header.classList.toggle('is-scrolled', window.scrollY > 18);
  }

  function activateSection(sectionId) {
    links.forEach(function (link) {
      var active = link.getAttribute('href') === '#' + sectionId;
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  if ('IntersectionObserver' in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) activateSection(entry.target.id);
      });
    }, {
      root: null,
      rootMargin: '-32% 0px -58% 0px',
      threshold: 0
    });
    sections.forEach(function (section) { sectionObserver.observe(section); });
  } else {
    function updateActiveSectionFallback() {
      var marker = window.scrollY + window.innerHeight * 0.4;
      var current = sections[0];
      sections.forEach(function (section) {
        if (section.offsetTop <= marker) current = section;
      });
      if (current) activateSection(current.id);
    }
    window.addEventListener('scroll', updateActiveSectionFallback, { passive: true });
    updateActiveSectionFallback();
  }
  // Accessible skill filters; native buttons support keyboard activation.
  var skillFilters = Array.prototype.slice.call(document.querySelectorAll('[data-skill-filter]'));
  var skillTiles = Array.prototype.slice.call(document.querySelectorAll('[data-skill-groups]'));
  var skillStatus = document.querySelector('.skill-filter-status');
  if (skillFilters.length && skillTiles.length) {
    skillFilters.forEach(function (button) {
      button.addEventListener('click', function () {
        var selected = button.getAttribute('data-skill-filter');
        var visibleCount = 0;
        skillFilters.forEach(function (filterButton) {
          var active = filterButton === button;
          filterButton.classList.toggle('is-current', active);
          filterButton.setAttribute('aria-pressed', String(active));
        });
        skillTiles.forEach(function (tile) {
          var groups = (tile.getAttribute('data-skill-groups') || '').split(/\\s+/);
          var visible = selected === 'all' || groups.indexOf(selected) !== -1;
          tile.hidden = !visible;
          if (visible) visibleCount += 1;
        });
        if (skillStatus) {
          var selectedLabel = button.textContent.trim();
          skillStatus.textContent = selected === 'all'
            ? 'Showing all ' + visibleCount + ' skills.'
            : 'Showing ' + visibleCount + ' skills in ' + selectedLabel + '.';
        }
      });
    });
  }

})();