const API_URL = "https://script.google.com/macros/s/AKfycbwWvvkAoDzom-EY5SNh6wMZLaQcyK4QMTimzag0wlsSOlHKqmSLllVzI-YfMEpRjDc/exec";

document.addEventListener("DOMContentLoaded", () => {

  const galleryGrid = document.getElementById("gallery-grid");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");

  // 開啟 modal
  function openModal(role) {
    document.getElementById("modal-img").src = role.image;
    document.getElementById("modal-img").alt = role.name;
    document.getElementById("modal-name").textContent = role.name;
    document.getElementById("modal-designer").textContent =
      "BY " + role.designer + (role.organization ? " # " + role.organization : "");
    document.getElementById("modal-desc").textContent = role.description;
    document.getElementById("modal-btn").href = role.gemUrl;
    modalOverlay.classList.add("active");
  }

  // 關閉 modal
  function closeModal() {
    modalOverlay.classList.remove("active");
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // 載入卡片
  fetch(API_URL)
    .then(res => res.json())
    .then(rolesData => {
      rolesData.forEach(role => {
        const card = document.createElement("div");
        card.className = "role-card";

        card.innerHTML = `
          <div class="img-container">
            <img src="${role.image}" alt="${role.name} 的角色畫像">
          </div>
          <div class="card-content">
            <h2 class="role-name">${role.name}</h2>
            <div class="designer">BY ${role.designer}${role.organization ? ' # ' + role.organization : ''}</div>
          </div>
        `;

        card.addEventListener("click", () => openModal(role));
        galleryGrid.appendChild(card);
      });
    })
    .catch(err => console.error("無法載入角色資料：", err));
});
