(function(){
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  var year = document.getElementById('year');
  if(year) year.textContent = String(new Date().getFullYear());

  var header = document.querySelector('.site-header');
  function headerState(){ if(header) header.classList.toggle('is-scrolled',window.scrollY>18); }
  headerState();
  window.addEventListener('scroll',headerState,{passive:true});

  var nav = document.getElementById('primary-nav');
  var toggle = document.querySelector('.menu-toggle');
  if(nav && toggle){
    toggle.addEventListener('click',function(){
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    });
    nav.querySelectorAll('a').forEach(function(link){ link.addEventListener('click',function(){
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Open navigation');
    });});
    document.addEventListener('click',function(event){
      if(!nav.contains(event.target) && !toggle.contains(event.target)){
        nav.querySelectorAll('details[open]').forEach(function(item){item.open=false;});
      }
    });
    document.addEventListener('keydown',function(event){
      if(event.key==='Escape'){
        nav.querySelectorAll('details[open]').forEach(function(item){item.open=false;});
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
        toggle.setAttribute('aria-label','Open navigation');
      }
    });
  }

  var reveals = document.querySelectorAll('.reveal');
  if(reduce || !('IntersectionObserver' in window)){
    reveals.forEach(function(el){el.classList.add('is-visible');});
  }else{
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
      });
    },{threshold:0.12,rootMargin:'0px 0px -24px 0px'});
    reveals.forEach(function(el){observer.observe(el);});
    document.documentElement.classList.add('js-motion-enabled');
  }

  var dialog = document.getElementById('demo-dialog');
  var openDemo = document.querySelector('[data-demo-trigger]');
  var closeDemo = document.querySelector('[data-demo-close]');
  if(dialog && openDemo && typeof dialog.showModal==='function'){
    openDemo.addEventListener('click',function(){dialog.showModal();});
    if(closeDemo) closeDemo.addEventListener('click',function(){dialog.close();});
    dialog.addEventListener('click',function(event){if(event.target===dialog)dialog.close();});
    dialog.addEventListener('close',function(){openDemo.focus();});
  }else if(openDemo){
    openDemo.addEventListener('click',function(){window.location.href='https://careerforge-ai.de5.net/';});
  }

  // Low-amplitude project-art parallax is scheduled once per animation frame.
  // Sticky artwork remains readable and the effect is disabled for touch or reduced motion.
  if(!reduce && !coarse && window.matchMedia('(min-width: 761px)').matches){
    var parallaxArts = Array.prototype.slice.call(document.querySelectorAll('.project-art'));
    var parallaxFrame = 0;
    function updateProjectParallax(){
      parallaxFrame = 0;
      var viewportMid = (window.innerHeight || 800) * 0.5;
      parallaxArts.forEach(function(art){
        var rect = art.getBoundingClientRect();
        if(rect.bottom < -100 || rect.top > (window.innerHeight || 800) + 100) return;
        var artMid = rect.top + rect.height * 0.5;
        var shift = Math.max(-14,Math.min(14,(viewportMid-artMid)*0.025));
        art.style.setProperty('--scroll-shift',shift.toFixed(2)+'px');
      });
    }
    function requestProjectParallax(){
      if(!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateProjectParallax);
    }
    updateProjectParallax();
    window.addEventListener('scroll',requestProjectParallax,{passive:true});
    window.addEventListener('resize',requestProjectParallax,{passive:true});
  }

  // Close sibling navigation groups when a different group opens.
  document.querySelectorAll('.nav-group').forEach(function(group){
    group.addEventListener('toggle',function(){
      if(!group.open) return;
      document.querySelectorAll('.nav-group').forEach(function(other){
        if(other!==group && other.open) other.open=false;
      });
    });
  });

  // Custom pill cursor: created only for fine pointers and only when motion is allowed.
  if(reduce || coarse || !window.matchMedia('(hover: hover)').matches) return;
  var cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.setAttribute('aria-hidden','true');
  cursor.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3.5 19 15l-6.4 1.1-3.2 5.3L5 3.5Z" fill="currentColor"/><path d="m12 16 4.3 4.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><span>View</span>';
  document.body.appendChild(cursor);
  var label = cursor.querySelector('span');
  var mx = -100, my = -100, cx = mx, cy = my, active = false, frame = 0, target = null;
  function renderCursor(){
    cx += (mx-cx)*0.18;
    cy += (my-cy)*0.18;
    cursor.style.transform='translate3d(' + cx + 'px,' + cy + 'px,0) translate(-50%,-50%) scale(' + (active?1:0.55) + ')';
    if(Math.abs(mx-cx)>0.2 || Math.abs(my-cy)>0.2){frame=window.requestAnimationFrame(renderCursor);}
    else {frame=0;}
  }
  function schedule(){if(!frame)frame=window.requestAnimationFrame(renderCursor);}
  document.addEventListener('pointermove',function(event){
    if(event.pointerType==='touch') return;
    mx=event.clientX;my=event.clientY;schedule();
  },{passive:true});
  document.addEventListener('pointerover',function(event){
    var el=event.target.closest && event.target.closest('[data-cursor]');
    if(el && !el.matches('input,textarea,select,[contenteditable="true"]')){
      target=el;active=true;label.textContent=el.getAttribute('data-cursor')||'View';cursor.classList.add('is-visible');document.body.classList.add('has-custom-cursor');
      schedule();
    }
  });
  document.addEventListener('pointerout',function(event){
    if(!target) return;
    var next=event.relatedTarget;
    if(next && target.contains(next)) return;
    if(event.target===target || target.contains(event.target)){
      active=false;target=null;cursor.classList.remove('is-visible');document.body.classList.remove('has-custom-cursor');schedule();
    }
  });
  // Native text-entry cursors always remain visible; restore cursor behavior when an input receives focus.
  document.addEventListener('focusin',function(event){
    if(event.target.matches('input,textarea,select,[contenteditable="true"]')){
      active=false;target=null;cursor.classList.remove('is-visible');document.body.classList.remove('has-custom-cursor');
    }
  });
  document.addEventListener('visibilitychange',function(){if(document.hidden && frame){cancelAnimationFrame(frame);frame=0;}});
})();