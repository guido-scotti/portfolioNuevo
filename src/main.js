import "./styles.css";
import { i18n, socials, stack, edu, projects } from "./content.js";

const $ = (s) => document.querySelector(s);
const get = (obj, path) => path.split(".").reduce((o, k) => o?.[k], obj);

/* ---------- Render ---------- */
const iconLinks = socials
  .map((s) => `<a href="${s.href}" target="_blank" class="tint-hover flex items-center justify-center"><img src="/public/img/png/${s.img}" alt="${s.alt}" width="${s.w}"></a>`)
  .join("");
$("#social-side").innerHTML = iconLinks;


$("#stack").innerHTML = stack
  .map(
    (row) => `
  <div class="reveal-up card border border-brand/30 p-6 text-left transition hover:-translate-y-1 hover:border-brand">
    <h3 class="mb-4 text-sm font-bold tracking-widest text-accent" data-i18n="${row.key}"></h3>
    <div class="flex flex-wrap gap-2">
      ${row.items.map(([n, c]) => `<span class="rounded-full border px-3 py-1 text-sm transition hover:-translate-y-0.5" style="border-color:${c}80;box-shadow:0 0 10px ${c}33">${n}</span>`).join("")}
    </div>
  </div>`
  )
  .join("");

$("#about-facts").innerHTML = [0, 1, 2]
  .map(
    (i) => `
  <div class="card border-l-4 border-brand p-4 text-left">
    <p class="text-xs font-bold uppercase tracking-widest text-accent" data-i18n="about.facts.${i}.0"></p>
    <p class="mt-1 text-sm md:text-base" data-i18n="about.facts.${i}.1"></p>
  </div>`
  )
  .join("");

$("#edu-items").innerHTML = edu
  .map(
    (e, i) => `
  <article class="reveal-up card border-l-4 border-brand p-6 text-left transition hover:-translate-y-1">
    <a class="badge mb-3" href="${e.url}" target="_blank"><img src="/public/img/png/${e.img}" alt="${e.alt}" class="mr-2 size-6 object-contain">${e.label}</a>
    <h3 class="mb-3 text-lg font-bold text-white md:text-xl" data-i18n="edu.items.${i}.t"></h3>
    <p class="text-sm leading-relaxed text-gray-300 md:text-base" data-i18n="edu.items.${i}.d"></p>
  </article>`
  )
  .join("");

$("#projects-grid").innerHTML = projects
  .map(
    (p, i) => `
  <article class="reveal-up card w-full max-w-[550px] p-5 text-center transition hover:scale-[1.02]">
    <img src="/public/img/others/${p.img}" alt="${p.alt}" class="h-[300px] w-full rounded-xl object-cover">
    <div class="mx-auto mb-4 mt-2.5 h-[3px] w-full bg-gray-300"></div>
    <h3 class="mb-2.5 text-2xl text-brand" data-i18n="projects.${i}.t"></h3>
    <p data-i18n="projects.${i}.d"></p>
    <div class="mt-4 flex justify-center gap-6">
      <a href="${p.repo}" target="_blank" class="tint-hover"><img src="/public/img/png/githubblanco.png" alt="github" width="30"></a>
      ${p.web ? `<a href="${p.web}" target="_blank" class="tint-hover"><img src="/public/img/png/web.png" alt="web" width="30"></a>` : ""}
    </div>
  </article>`
  )
  .join("");

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