/**
 * GEM 角色展覽館資料層
 * 資料來源：Google Apps Script (試算表 JSON API)
 * 只有「圖片已生成的完整資料」才會出現在試算表中，無需無圖防呆。
 */
const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"; // 步驟 2 完成後填入

document.addEventListener("DOMContentLoaded", () => {

  const galleryGrid = document.getElementById("gallery-grid");

  fetch(API_URL)
    .then(res => res.json())
    .then(rolesData => {
      rolesData.forEach(role => {
        const card = document.createElement("a");
        card.className = "role-card";
        card.href = role.gemUrl;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        card.innerHTML = `
          <div class="img-container">
            <img src="${role.image}" alt="${role.name} 的角色畫像">
          </div>
          <div class="card-content">
            <h2 class="role-name">${role.name}</h2>
            <div class="designer">Designed by ${role.designer}</div>
            <p class="description">${role.description}</p>
          </div>
        `;

        galleryGrid.appendChild(card);
      });
    })
    .catch(err => console.error("無法載入角色資料：", err));
});
