import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles.css";
import { i18n, socials, stack, edu, projects } from "./content.js";

const $ = (s) => document.querySelector(s);
const get = (obj, path) => path.split(".").reduce((o, k) => o?.[k], obj);

/* ---------- Render ---------- */
const iconLinks = socials
  .map((s) => `<a href="${s.href}" target="_blank" aria-label="${s.alt}" class="tint-hover grid size-10 place-items-center text-[28px]"><i class="${s.icon}"></i></a>`)
  .join("");
$("#social-side").innerHTML = iconLinks;
$("#social-foot").innerHTML = iconLinks;

$("#stack").innerHTML = stack
  .map(
    (row) => `
  <div class="reveal-up group rounded-2xl bg-linear-to-br from-accent/70 via-brand/20 to-transparent p-px transition hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,114,255,0.35)]">
    <div class="relative h-full overflow-hidden rounded-[15px] bg-[#1b1c24] p-6 text-left">
      <div class="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-brand/30 blur-2xl transition group-hover:bg-accent/40"></div>
      <h3 class="relative mb-5 flex items-center gap-3 text-sm font-bold tracking-widest text-white">
        <span class="h-5 w-1 rounded-full bg-linear-to-b from-[#00c6ff] to-brand"></span><span data-i18n="${row.key}"></span>
      </h3>
      <div class="relative flex flex-wrap gap-2.5">
        ${row.items
          .map(([n, c]) => `<span class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition hover:-translate-y-0.5 hover:border-[var(--c)] hover:shadow-[0_0_14px_var(--c)]" style="--c:${c}"><i class="size-2 rounded-full" style="background:${c};box-shadow:0 0 8px ${c}"></i>${n}</span>`)
          .join("")}
      </div>
    </div>
  </div>`
  )
  .join("");

$("#about-facts").innerHTML = `
  <div class="reveal-up overflow-hidden rounded-2xl border border-accent/40 bg-[#0f0f14] font-mono text-sm shadow-[0_0_40px_rgba(0,114,255,0.25)]">
    <div class="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
      <span class="size-3 rounded-full bg-[#ff5f56]"></span><span class="size-3 rounded-full bg-[#ffbd2e]"></span><span class="size-3 rounded-full bg-[#27c93f]"></span>
      <span class="ml-3 text-xs text-gray-400">guido.json</span>
    </div>
    <pre class="m-0 whitespace-pre-wrap p-5 leading-8"><span class="text-gray-400">{</span>
${[0, 1, 2]
  .map((i) => `  <span class="lowercase text-accent">"<span data-i18n="about.facts.${i}.0"></span>"</span><span class="text-gray-400">:</span> <span class="text-[#7ee787]">"<span data-i18n="about.facts.${i}.1"></span>"</span>${i < 2 ? "," : ""}`)
  .join("\n")}
<span class="text-gray-400">}</span></pre>
  </div>`;

$("#edu-items").innerHTML = edu
  .map(
    (e, i) => `
  <article class="reveal-up card relative border border-white/10 p-6 text-left transition hover:border-accent/60">
    <span class="absolute -left-8 top-7 size-3.5 rounded-full bg-accent shadow-[0_0_14px_#4facfe]"></span>
    <div class="mb-3 flex flex-wrap items-center gap-3">
      <h3 class="text-lg font-bold text-white md:text-xl" data-i18n="edu.items.${i}.t"></h3>
      <a class="badge" href="${e.url}" target="_blank"><img src="/img/png/${e.img}" alt="${e.alt}" class="mr-2 size-6 object-contain">${e.label}</a>
    </div>
    <p class="text-sm leading-relaxed text-gray-300 md:text-base" data-i18n="edu.items.${i}.d"></p>
  </article>`
  )
  .join("");

// Para sumar imágenes a un proyecto: en content.js usá imgs: ["a.png", "b.png", "c.png"] en lugar de img
$("#projects-grid").innerHTML = projects
  .map((p, i) => {
    const imgs = p.imgs || [p.img];
    const multi = imgs.length > 1;
    return `
  <article class="reveal-up flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1b1c24] text-left transition hover:border-accent/60 hover:shadow-[0_0_30px_rgba(0,114,255,0.3)]">
    <div class="carousel relative overflow-hidden" data-i="0">
      <div class="track flex transition-transform duration-500">
        ${imgs.map((f) => `<img src="/img/others/${f}" alt="${p.alt}" class="h-56 w-full shrink-0 object-cover">`).join("")}
      </div>
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#1b1c24] to-transparent"></div>
      ${multi ? `<button class="car-btn left-2" data-dir="-1" aria-label="Previous">‹</button><button class="car-btn right-2" data-dir="1" aria-label="Next">›</button>
      <div class="absolute bottom-2 left-0 flex w-full justify-center gap-1.5">${imgs.map((_, k) => `<i class="dot size-2 rounded-full ${k === 0 ? "bg-accent" : "bg-white/40"}"></i>`).join("")}</div>` : ""}
    </div>
    <div class="flex flex-1 flex-col p-5">
      <h3 class="mb-2 text-xl font-bold text-white" data-i18n="projects.${i}.t"></h3>
      <p class="flex-1 text-sm text-gray-300" data-i18n="projects.${i}.d"></p>
      <div class="mt-4 flex gap-5">
        ${p.repo ? `<a href="${p.repo}" target="_blank" aria-label="GitHub" class="tint-hover grid size-10 place-items-center text-[28px]"><i class="fa-brands fa-github"></i></a>` : ""}
        ${p.web ? `<a href="${p.web}" target="_blank" aria-label="Web" class="tint-hover grid size-10 place-items-center text-[28px]"><i class="fa-solid fa-globe"></i></a>` : ""}
      </div>
    </div>
  </article>`;
  })
  .join("");

$("#projects-grid").addEventListener("click", (e) => {
  const b = e.target.closest("[data-dir]");
  if (!b) return;
  const c = b.closest(".carousel");
  const n = c.querySelectorAll("img").length;
  const i = (Number(c.dataset.i) + Number(b.dataset.dir) + n) % n;
  c.dataset.i = i;
  c.querySelector(".track").style.transform = `translateX(-${i * 100}%)`;
  c.querySelectorAll(".dot").forEach((d, k) => {
    d.classList.toggle("bg-accent", k === i);
    d.classList.toggle("bg-white/40", k !== i);
  });
});

/* ---------- Idioma ---------- */
let lang = localStorage.getItem("siteLang") || "en";

function setLanguage(l) {
  lang = l;
  localStorage.setItem("siteLang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.innerHTML = get(i18n[l], el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => (el.placeholder = get(i18n[l], el.dataset.i18nPh)));
  document.querySelectorAll("[data-i18n-href]").forEach((el) => (el.href = get(i18n[l], el.dataset.i18nHref)));
  document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === l));
}

document.querySelectorAll(".lang-btn").forEach((b) =>
  b.addEventListener("click", (e) => {
    e.preventDefault();
    setLanguage(b.dataset.lang);
  })
);
setLanguage(lang);

/* ---------- Animación al hacer scroll ---------- */
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.12}s`;
        entry.target.classList.add("visible");
      }
    }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));

/* ---------- Formulario (EmailJS) ---------- */
emailjs.init("CdLb5SWx4R2_52mgO");
const form = $("#contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailjs
    .sendForm("service_6y83n3o", "template_zzy4zi3", form)
    .then(() => {
      alert("✅ Mensaje enviado correctamente!");
      form.reset();
    })
    .catch((err) => {
      console.error("❌ Error:", err);
      alert("Hubo un error al enviar el mensaje, intentá de nuevo.");
    });
});