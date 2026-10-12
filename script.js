(function () {
  var nav = document.getElementById('primary-nav');
  var toggle = document.querySelector('.menu-toggle');
  var year = document.getElementById('year');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (year) year.textContent = String(new Date().getFullYear());

  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
      });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        toggle.focus();
      }
    });
  }

  var revealItems = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    revealItems.forEach(function (item) { observer.observe(item); });
  }

  // Lightweight pointer parallax for the CSS-built 3D hero; motion is opt-in.
  var scene = document.getElementById('hero-scene');
  var canvas = document.getElementById('scene-particles');
  var motionPreference = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  var coarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  if (scene && !reduceMotion && !coarsePointer) {
    scene.addEventListener('pointermove', function (event) {
      var rect = scene.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;
      scene.style.setProperty('--pointer-x', (x * 10).toFixed(2) + 'px');
      scene.style.setProperty('--pointer-y', (y * 10).toFixed(2) + 'px');
      var orb = scene.querySelector('.orb-system');
      if (orb) orb.style.animationPlayState = 'paused';
      if (orb) orb.style.transform = 'translate(calc(-50% + ' + (x * 14).toFixed(1) + 'px), calc(-50% + ' + (y * 14).toFixed(1) + 'px)) rotateX(' + (-y * 8).toFixed(1) + 'deg) rotateY(' + (x * 12).toFixed(1) + 'deg)';
    });
    scene.addEventListener('pointerleave', function () {
      var orb = scene.querySelector('.orb-system');
      if (orb) { orb.style.transform = ''; orb.style.animationPlayState = ''; }
      scene.style.setProperty('--pointer-x', '0px');
      scene.style.setProperty('--pointer-y', '0px');
    });
  }
  // Small, density-limited canvas particle field. CSS scene remains complete if canvas is unavailable.
  if (canvas && !reduceMotion && !coarsePointer && canvas.getContext) {
    var context = canvas.getContext('2d');
    if (context) {
      var particles = [];
      var frame = 0;
      var width = 0;
      var height = 0;
      var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      function sizeScene() {
        var rect = canvas.getBoundingClientRect();
        width = rect.width; height = rect.height;
        canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        var count = Math.min(58, Math.max(22, Math.round(width * height / 6500)));
        particles = Array.from({ length: count }, function () {
          return { x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.4 + .3, v: Math.random() * .22 + .04, a: Math.random() * .48 + .12 };
        });
      }
      function drawParticles() {
        if (!document.hidden && context) {
          context.clearRect(0, 0, width, height);
          particles.forEach(function (p, i) {
            p.y -= p.v;
            if (p.y < -3) { p.y = height + 3; p.x = Math.random() * width; }
            context.beginPath();
            context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            context.fillStyle = 'rgba(115, 190, 255,' + p.a + ')';
            context.fill();
            if (i % 3 === 0) {
              var next = particles[(i + 1) % particles.length];
              var dx = p.x - next.x, dy = p.y - next.y;
              if (dx * dx + dy * dy < 4400) {
                context.beginPath(); context.moveTo(p.x, p.y); context.lineTo(next.x, next.y);
                context.strokeStyle = 'rgba(90, 150, 255, .08)'; context.stroke();
              }
            }
          });
        }
        frame = window.requestAnimationFrame(drawParticles);
      }
      sizeScene();
      drawParticles();
      window.addEventListener('resize', sizeScene, { passive: true });
      document.addEventListener('visibilitychange', function () {
        if (document.hidden && frame) window.cancelAnimationFrame(frame);
        else if (!document.hidden && frame) { window.cancelAnimationFrame(frame); drawParticles(); }
      });
    }
  }

})();