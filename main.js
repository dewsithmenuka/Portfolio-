// =============================================
//  MAIN.JS — Portfolio Interactions
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initNavbar();
  initTypingCode();
  initReveal();
  renderSkills();
  renderProcess();
  renderProjects();
  renderCourses();
  renderBlog();
  renderContact();
  initCounters();
  initContactForm();
  initDownloadCV();
});

// ---- CUSTOM CURSOR ----
function initCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let ringX = 0, ringY = 0, dotX = 0, dotY = 0;
  let raf;

  document.addEventListener("mousemove", (e) => {
    dotX = e.clientX;
    dotY = e.clientY;
  });

  function animateCursor() {
    ringX += (dotX - ringX) * 0.12;
    ringY += (dotY - ringY) * 0.12;
    dot.style.left = dotX + "px";
    dot.style.top = dotY + "px";
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    raf = requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll("a, button, .project-card, .blog-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.borderColor = "rgba(108, 99, 255, 0.8)";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(108, 99, 255, 0.5)";
    });
  });
}

// ---- NAVBAR SCROLL ----
function initNavbar() {
  const nav = document.getElementById("mainNav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });

  // Active link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => observer.observe(s));
}

// ---- TYPING CODE ANIMATION ----
function initTypingCode() {
  const container = document.getElementById("typingCode");
  if (!container) return;

  const lines = [
    { text: `<span class="cm">// Developer profile</span>` },
    { text: `<span class="kw">const</span> <span class="fn">developer</span> = {` },
    { text: `&nbsp;&nbsp;name: <span class="str">"Menuka Dewsith"</span>,` },
    { text: `&nbsp;&nbsp;role: <span class="str">"Full-Stack Dev"</span>,` },
    { text: `&nbsp;&nbsp;focus: <span class="str">"Backend & PostgreSQL"</span>,` },
    { text: `&nbsp;&nbsp;stack: [<span class="str">"React"</span>, <span class="str">"Node"</span>, <span class="str">"PG"</span>],` },
    { text: `&nbsp;&nbsp;status: <span class="str">"open to work"</span>` },
    { text: `};` },
    { text: `` },
    { text: `<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Let's build! 🚀"</span>);` },
  ];

  let lineIdx = 0;

  function typeLine() {
    if (lineIdx >= lines.length) {
      container.innerHTML += `<span class="cursor-blink"></span>`;
      return;
    }
    const line = document.createElement("div");
    line.innerHTML = lines[lineIdx].text + (lineIdx < lines.length - 1 ? "" : "");
    container.appendChild(line);
    lineIdx++;
    setTimeout(typeLine, lineIdx === 1 ? 400 : 220);
  }

  setTimeout(typeLine, 800);
}

// ---- SCROLL REVEAL ----
function initReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));

  // Also make non-reveal section elements animate
  const sectionEls = document.querySelectorAll(
    ".skill-category, .project-card, .blog-card, .process-item, .course-item, .about-pillars .pillar"
  );
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sectionEls.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.55s ease ${(i % 6) * 0.08}s, transform 0.55s ease ${(i % 6) * 0.08}s`;
    sectionObserver.observe(el);
  });
}

// ---- RENDER SKILLS ----
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = SKILLS_DATA.map(cat => `
    <div class="skill-category">
      <div class="skill-cat-title">
        <i class="${cat.icon}"></i>${cat.category}
      </div>
      <div class="skill-tags">
        ${cat.items.map(item => `
          <span class="skill-tag">
            <span class="skill-dot"></span>${item}
          </span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// ---- RENDER PROCESS ----
function renderProcess() {
  const list = document.getElementById("processList");
  if (!list) return;

  list.innerHTML = PROCESS_DATA.map(item => `
    <div class="process-item">
      <span class="process-num">${item.num}</span>
      <p class="process-text">${item.text}</p>
    </div>
  `).join("");
}

// ---- RENDER PROJECTS ----
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS_DATA.map(proj => `
    <div class="col-md-6">
      <div class="project-card">
        <div class="project-num">Project ${proj.id}</div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <ul class="project-features">
          ${proj.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
        <div class="project-stack">
          ${proj.stack.map(t => `<span class="stack-tag">${t}</span>`).join("")}
        </div>
        <div class="project-btns">
          <a href="${proj.demo}" class="btn-project demo" target="_blank">
            <i class="fas fa-external-link-alt"></i>Live Demo
          </a>
          <a href="${proj.github}" class="btn-project gh" target="_blank">
            <i class="fab fa-github"></i>GitHub
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

// ---- RENDER COURSES ----
function renderCourses() {
  const grid = document.getElementById("coursesGrid");
  if (!grid) return;

  grid.innerHTML = COURSES_DATA.map(c => `
    <div class="course-item">
      <i class="${c.icon}"></i>${c.name}
    </div>
  `).join("");
}

// ---- RENDER BLOG ----
function renderBlog() {
  const grid = document.getElementById("blogGrid");
  if (!grid) return;

  grid.innerHTML = BLOG_DATA.map(post => `
    <div class="col-md-4">
      <a href="${post.link}" class="blog-card">
        <div class="blog-num">Post ${post.num}</div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-desc">${post.description}</p>
        <div class="blog-read">
          Read more <i class="fas fa-arrow-right"></i>
        </div>
      </a>
    </div>
  `).join("");
}

// ---- RENDER CONTACT LINKS ----
function renderContact() {
  const links = document.getElementById("contactLinks");
  if (!links) return;

  links.innerHTML = CONTACT_DATA.map(c => `
    <a href="${c.href}" class="contact-link" target="_blank">
      <i class="${c.icon}"></i>${c.label}
    </a>
  `).join("");
}

// ---- COUNTER ANIMATION ----
function initCounters() {
  const counters = document.querySelectorAll(".stat-num");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let start = 0;
        const duration = 1200;
        const step = Math.ceil(target / (duration / 30));

        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = start;
          }
        }, 30);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ---- CONTACT FORM ----
function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form || !success) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    btn.disabled = true;

    // Simulate send
    setTimeout(() => {
      form.style.display = "none";
      success.classList.remove("d-none");
    }, 1600);
  });
}

// ---- DOWNLOAD CV ----
function initDownloadCV() {
  const btn = document.getElementById("downloadCV");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // In production, replace with actual CV file URL
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check me-2"></i>CV Ready Soon!';
    btn.style.background = "rgba(0, 212, 170, 0.15)";
    btn.style.borderColor = "rgba(0, 212, 170, 0.4)";
    btn.style.color = "var(--accent-2)";

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = "";
      btn.style.borderColor = "";
      btn.style.color = "";
    }, 2500);
  });
}

// ---- SMOOTH SCROLL FOR NAV ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu if open
      const collapse = document.getElementById("navMenu");
      if (collapse && collapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) bsCollapse.hide();
      }
    }
  });
});
