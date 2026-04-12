/**
 * GEM 角色展覽館資料層
 * 若有新學員加入，只需要在這個陣列裡面新增大括號 {} 包起來的資料即可！
 */
const rolesData = [
    {
      name: "奧術主宰・艾瑞克",
      designer: "小明同學",
      description: "精通禁忌魔法的大法師，為了尋找失落的星辰之力而踏上旅途。喜歡在半夜研究危險的星空咒語，個性偏冷但會默默照顧菜鳥。",
      image: "./assets/mage.png", 
      gemUrl: "https://gemini.google.com/" // 這裡可以填入真正的 GEM 網址
    },
    {
      name: "賽博駭客・零 (Zero)",
      designer: "阿華",
      description: "在霓虹都市中穿梭的地下駭客，擁有直接將意識連入網路的特殊能力。她的代碼總是帶有淡淡的粉色光芒，擅長隱匿與搜集黑市情報。",
      image: "./assets/cyberpunk.png",
      gemUrl: "https://gemini.google.com/"
    },
    {
      name: "晨曦守護者・伊露維塔",
      designer: "林小美",
      description: "古老森林的精靈戰士，身披黃金戰甲，負責守護世界樹的最後一顆種子。性格高傲但內心溫柔，是一名稱職的守護神。",
      image: "./assets/elf.png",
      gemUrl: "https://gemini.google.com/"
    }
  ];
  
  // 當網頁載入完成後，執行這段邏輯
  document.addEventListener("DOMContentLoaded", () => {
    
    const galleryGrid = document.getElementById("gallery-grid");
  
    // 遍歷所有學員角色資料
    rolesData.forEach(role => {
      // 建立卡片連結元素：這裡讓整張卡片變成一個超連結 <a>
      const card = document.createElement("a");
      card.className = "role-card";
      
      // 綁定角色專屬的 GEM 網址
      card.href = role.gemUrl;
      // 設定另開新分頁
      card.target = "_blank"; 
      card.rel = "noopener noreferrer"; // 安全性設置
  
      // 利用字串模板填入卡片的 HTML 結構
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
  
      // 將卡片放入畫面上的實體網格裡
      galleryGrid.appendChild(card);
    });
  });
  
