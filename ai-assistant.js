(function () {
  'use strict';
  var widget = document.getElementById('deva-ai-widget');
  if (!widget) return;

  var panel = document.getElementById('deva-ai-panel');
  var launcher = document.getElementById('deva-ai-launcher');
  var closeButton = document.getElementById('deva-ai-close');
  var form = document.getElementById('deva-ai-form');
  var input = document.getElementById('deva-ai-input');
  var messages = document.getElementById('deva-ai-messages');
  var suggestions = document.getElementById('deva-ai-suggestions');

  var links = {
    careerforge: 'https://careerforge-ai.de5.net/',
    caseStudy: 'case-study.html',
    careerforgeRepo: 'https://github.com/devauchiha001/careerforge-ai-main',
    smartStudy: 'https://smartstudyapp-ca670.web.app/',
    github: 'https://github.com/devauchiha001',
    linkedin: 'https://www.linkedin.com/in/devaraj-j-5021363a8',
    email: 'mailto:j.devarajtech@gmail.com'
  };

  function matches(text, words) {
    var normalizedText = ' ' + text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
    return words.some(function (word) {
      var needle = word.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
      return needle.length > 0 && normalizedText.indexOf(' ' + needle + ' ') !== -1;
    });
  }

  function answerFor(question) {
    var q = question.toLowerCase().replace(/\s+/g, ' ').trim();

    if (matches(q, ["what's your name", "what is your name", "who are you", "your name", "who made you", "who created you", "are you ai"])) {
      return {
        text: 'I’m the Quick answers guide for Devaraj’s portfolio. I can help you explore his projects, technical skills, experience and contact links. This version uses curated portfolio information; a live AI model is not connected yet.',
        actions: [
          { label: 'CareerForge AI', url: links.careerforge },
          { label: 'GitHub profile', url: links.github },
          { label: 'Email Devaraj', url: links.email }
        ]
      };
    }
    if (matches(q, ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
      return {
        text: 'Hi! Welcome to Devaraj’s portfolio. I’m the Quick answers guide. Ask me about CareerForge AI, Smart Study AI, his technical skills or experience—or use a link below to explore his work.',
        actions: [
          { label: 'Explore projects', url: 'index.html#work' },
          { label: 'CareerForge AI', url: links.careerforge },
          { label: 'Contact Devaraj', url: links.email }
        ]
      };
    }
    if (matches(q, ['what can you do', 'how can you help', 'help me', 'what do you do'])) {
      return {
        text: 'I can point you to Devaraj’s projects, summarize documented skills and experience, explain the CareerForge AI stack, and share contact or repository links. I use verified portfolio facts in this preview version and won’t invent experience or project metrics.',
        actions: [
          { label: 'CareerForge AI', url: links.careerforge },
          { label: 'Smart Study AI', url: links.smartStudy },
          { label: 'LinkedIn', url: links.linkedin }
        ]
      };
    }

    if (matches(q, ['careerforge', 'career forge', 'job application project', 'resume analyzer', 'resume analysis'])) {
      return {
        text: 'CareerForge AI is Devaraj’s flagship project: a workspace for resume analysis, job-description matching, AI-assisted application drafts, remote-job discovery, saved jobs and application tracking. Its stack includes React, TypeScript, Vite, Firebase Authentication and Realtime Database, pdf.js, and Gemini through Firebase AI Logic when configured. The match score is a transparent heuristic, not an employer ATS score.',
        actions: [
          { label: 'Live application', url: links.careerforge },
          { label: 'Read case study', url: links.caseStudy },
          { label: 'Source code', url: links.careerforgeRepo }
        ]
      };
    }
    if (matches(q, ['smart study', 'study ai', 'flashcard', 'learning project'])) {
      return {
        text: 'Smart Study AI is a learning workspace with note/PDF analysis, AI tutoring, spaced-repetition flashcards, voice tools, focus sessions and progress tracking. The portfolio lists React, Vite, Firebase and Gemini API among its technologies.',
        actions: [{ label: 'Open Smart Study AI', url: links.smartStudy }]
      };
    }
    if (matches(q, ['skill', 'tech stack', 'technology', 'technologies', 'programming language', 'tools'])) {
      return {
        text: 'The portfolio lists these technologies and areas: HTML, CSS, JavaScript, TypeScript, React, Vite, Firebase, Gemini API, Python, Java, MySQL/JDBC, Git/GitHub and UI/UX. For a specific role, check each project repository for the exact implementation details.',
        actions: [{ label: 'GitHub profile', url: links.github }, { label: 'CareerForge source', url: links.careerforgeRepo }]
      };
    }
    if (matches(q, ['experience', 'work history', 'domino', 'dream code', 'internship', 'support staff'])) {
      return {
        text: 'Devaraj’s listed experience includes Technical Support Staff at Domino’s Pizza (June 2025–August 2026), focused on operational support and troubleshooting, and a Frontend Web Developer internship at Dream Code (May–July 2025), involving responsive interfaces and UI debugging.',
        actions: [{ label: 'See experience', url: 'index.html#experience' }, { label: 'LinkedIn profile', url: links.linkedin }]
      };
    }
    if (matches(q, ['education', 'degree', 'college', 'b.sc', 'bsc', 'graduate'])) {
      return {
        text: 'Devaraj completed a B.Sc. in Computer Science at Nazareth College of Arts & Science, from 2023 to 2026.',
        actions: [{ label: 'About Devaraj', url: 'index.html#about' }, { label: 'LinkedIn profile', url: links.linkedin }]
      };
    }
    if (matches(q, ['contact', 'email', 'hire', 'connect', 'linkedin', 'github profile', 'resume', 'recruiter', 'recruitment', 'why hire', 'role fit', 'candidate'])) {
      return {
        text: 'Recruiter summary: Devaraj is a Computer Science graduate with a frontend web development internship and technical-support experience. His portfolio projects include CareerForge AI and Smart Study AI, showcasing web development and AI integration. Potential areas to explore include frontend, junior software development and technical support; fit depends on the specific job requirements.',
        actions: [
          { label: 'Email Devaraj', url: links.email },
          { label: 'LinkedIn', url: links.linkedin },
          { label: 'GitHub', url: links.github }
        ]
      };
    }
    if (matches(q, ['where', 'location', 'chennai', 'relocate'])) {
      return {
        text: 'The portfolio lists Devaraj as based in Chennai, India (IST), and open to suitable opportunities. Please contact him directly to confirm location or relocation preferences for a particular role.',
        actions: [{ label: 'Email Devaraj', url: links.email }, { label: 'LinkedIn', url: links.linkedin }]
      };
    }
    if (matches(q, ['how does', 'architecture', 'firebase', 'gemini', 'pdf', 'source code', 'repository', 'repo', 'match score', 'ats'])) {
      return {
        text: 'For CareerForge AI, the documented stack includes React 19, TypeScript, Vite, Firebase Authentication and Realtime Database, pdf.js for selectable PDF text, and Gemini through Firebase AI Logic when configured. Its related-job integration uses Jobicy and Himalayas. Some deployed Firebase flows require live validation; see the source and case study for implementation caveats.',
        actions: [{ label: 'Technical case study', url: links.caseStudy }, { label: 'View source code', url: links.careerforgeRepo }]
      };
    }
    return {
      text: 'This quick-answers widget uses pre-written answers from Devaraj’s published portfolio facts; it is not connected to a live AI model. Try asking about CareerForge AI, Smart Study AI, technical skills, work experience, education or how to contact Devaraj.',
      actions: [
        { label: 'CareerForge AI', url: links.careerforge },
        { label: 'GitHub profile', url: links.github },
        { label: 'Email Devaraj', url: links.email }
      ]
    };
  }

  function scrollToLatest() {
    messages.scrollTop = messages.scrollHeight;
  }

  function makeActionLink(action) {
    var anchor = document.createElement('a');
    anchor.href = action.url;
    anchor.textContent = action.label;
    if (/^https?:\/\//i.test(action.url)) {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      var arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '↗';
      anchor.appendChild(arrow);
    }
    return anchor;
  }

  function addMessage(text, role, actions) {
    var item = document.createElement('div');
    item.className = 'deva-ai-message ' + (role === 'user' ? 'deva-ai-message-user' : 'deva-ai-message-assistant');

    var label = document.createElement('div');
    label.className = 'deva-ai-message-label';
    label.textContent = role === 'user' ? 'YOU' : 'QUICK ANSWERS';

    var bubble = document.createElement('div');
    bubble.className = 'deva-ai-bubble';
    bubble.textContent = text;

    item.appendChild(label);
    item.appendChild(bubble);

    if (Array.isArray(actions) && actions.length) {
      var actionRow = document.createElement('div');
      actionRow.className = 'deva-ai-actions';
      actions.forEach(function (action) { actionRow.appendChild(makeActionLink(action)); });
      item.appendChild(actionRow);
    }
    messages.appendChild(item);
    scrollToLatest();
  }

  function ask(question) {
    var clean = question.trim();
    if (!clean) return;
    addMessage(clean, 'user');
    var answer = answerFor(clean);
    addMessage(answer.text, 'assistant', answer.actions);
    suggestions.hidden = true;
  }

  function openPanel() {
    panel.hidden = false;
    widget.classList.add('is-open');
    launcher.setAttribute('aria-expanded', 'true');
    launcher.setAttribute('aria-label', 'Close quick answers panel');
    input.focus();
  }

  function closePanel() {
    panel.hidden = true;
    widget.classList.remove('is-open');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.setAttribute('aria-label', 'Open quick answers panel');
    launcher.focus();
  }

  launcher.addEventListener('click', function () {
    if (panel.hidden) openPanel();
    else closePanel();
  });
  closeButton.addEventListener('click', closePanel);
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    ask(input.value);
    input.value = '';
    input.focus();
  });
  suggestions.querySelectorAll('[data-question]').forEach(function (button) {
    button.addEventListener('click', function () { ask(button.getAttribute('data-question') || ''); });
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !panel.hidden) closePanel();
  });
})();