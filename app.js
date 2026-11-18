// ===== Helper =====
const $ = (s) => document.querySelector(s);
const formatPrice = (n) => n.toLocaleString("vi-VN") + "đ";

// ===== Render SITE info =====
$("#site-logo").textContent = SITE.name;
$("#github-link").href = SITE.github;
$("#hero-badge").textContent = SITE.hero.badge;
$("#hero-title").textContent = SITE.hero.title;
$("#hero-subtitle").textContent = SITE.hero.subtitle;
$("#footer-text").textContent = SITE.footer;
$("#hero-stats").innerHTML = SITE.hero.stats
  .map((s) => `<div><strong>${s.number}</strong><span>${s.label}</span></div>`).join("");
$("#contact-links").innerHTML = SITE.contact
  .map((c) => `<a href="${c.url}" target="_blank">${c.label}</a>`).join("");

// ===== Render Courses =====
const renderImage = (img) =>
  img.startsWith("http") ? `<img src="${img}" alt="">` : img;

$("#courses-grid").innerHTML = COURSES.map((c) => `
  <div class="card">
    <div class="card-img">${renderImage(c.image)}</div>
    <div class="card-body">
      <span class="card-tag">${c.tag}</span>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="card-footer">
        <span class="price">${c.oldPrice ? `<del>${formatPrice(c.oldPrice)}</del>` : ""}${formatPrice(c.price)}</span>
        <a href="${c.link}" target="_blank" class="btn btn-primary btn-sm">Mua ngay</a>
      </div>
    </div>
  </div>`).join("");

// ===== Render Pr// ===== Render Prompts =====
let currentFilter = "all";

function renderPrompts() {
  const keyword = $("#prompt-search").value.toLowerCase();
  const list = PROMPTS.filter((p) => {
    const matchType = currentFilter === "all" || p.type === currentFilter;
    const matchText = (p.title + p.desc + p.category).toLowerCase().includes(keyword);
    return matchType && matchText;
  });

  $("#prompts-grid").innerHTML = list.length
    ? list.map((p, i) => `
      <div class="card">
        <div class="card-img">
          <span class="label ${p.type === "free" ? "label-free" : "label-paid"}">
            ${p.type === "free" ? "MIỄN PHÍ" : "CÓ PHÍ"}
          </span>
          ${p.type === "free" ? "🧠" : "💎"}
        </div>
        <div class="card-body">
          <span class="card-tag">${p.category}</span>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="card-footer">
            ${p.type === "free"
              ? `<span class="price free">Miễn phí</span>
                 <button class="btn btn-primary btn-sm" onclick="openPrompt(${PROMPTS.indexOf(p)})">Xem Prompt</button>`
              : `<span class="price">${formatPrice(p.price)}</span>
                 <a href="${p.link}" target="_blank" class="btn btn-primary btn-sm">Mua ngay</a>`}
          </div>
        </div>
      </div>`).join("")
    : `<p style="color:#94a3b8;text-align:center;grid-column:1/-1">Không tìm thấy prompt nào.</p>`;
}

// ===== Filter & Search =====
document.querySelectorAll("#prompt-filters button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#prompt-filters .active").classList.remove("active");
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderPrompts();
  });
});
$("#prompt-search").addEventListener("input", renderPrompts);

// ===== Modal =====
function openPrompt(i) {
  $("#modal-title").textContent = PROMPTS[i].title;
  $("#modal-body").textContent = PROMPTS[i].content;
  $("#modal").classList.add("open");
}
$("#modal-close").onclick = () => $("#modal").classList.remove("open");
$("#modal").onclick = (e) => { if (e.target === $("#modal")) $("#modal").classList.remove("open"); };
$("#copy-btn").onclick = () => {
  navigator.clipboard.writeText($("#modal-body").textContent);
  $("#copy-btn").textContent = "✅ Đã copy!";
  setTimeout(() => ($("#copy-btn").textContent = "📋 Copy Prompt"), 1500);
};

// ===== Mobile menu =====
$("#menu-toggle").onclick = () => $(".nav-links").classList.toggle("show");

// ===== Init =====
renderPrompts();
