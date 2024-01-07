console.log("JavaScript file loaded!");

var generateButton = document.getElementById("generateButton");
var gameDiv = document.getElementById("gameText");drawcardsButton
var drawcardsButton = document.getElementById("drawcardsButton");

generateButton.addEventListener("click", function() {

    let 號碼 = 生成隨機號碼();
    圖片路徑陣列 = 號碼轉相對圖片路徑(號碼)
    
    for (let i = 0; i < 圖片路徑陣列.length; i++) {
        let imgId = "M_" + (i + 1);
        let imgElement = document.getElementById(imgId);

          imgElement.classList.add("img-class");
        imgElement.src = 圖片路徑陣列[i];

    }

    gameDiv.innerHTML = "生成的號碼：" + 號碼;
  });

  document.addEventListener("DOMContentLoaded", function () {
    // 獲取按鈕元素
    const generateButton = document.getElementById("generate2Button");
  
    // 添加點擊事件
    generateButton.addEventListener("click", function () {
      // 獲取需要傳遞的資料
      const mahjongData = "13789m22579p3s157z"; // 這裡替換成你要的麻將資料
  
      // 構建 URL
      const url = `https://tenhou.net/2/?q=${mahjongData}`;
  
      // 發送 GET 請求
      fetch(url)
        .then(response => response.text())
        .then(data => {
          // 在這裡處理從網站返回的計算結果
          console.log("計算結果:", data);
          // 可以根據需要進一步處理結果，例如顯示在網頁上或其他操作
        })
        .catch(error => {
          console.error("發生錯誤:", error);
        });
    });
  });
  

  
  document.addEventListener("DOMContentLoaded", function () {
    // 獲取所有圖片元素
    const imgElements = document.querySelectorAll(".div3_img img");
  
    // 為每個圖片元素添加點擊事件
    imgElements.forEach((img, index) => {
      img.addEventListener("click", function () {
        // 獲取圖片路徑
        const imagePath = img.getAttribute("src");
  
        // 顯示路徑
        alert("圖片路徑：" + imagePath);
      });
    });
  });



  
  function 生成隨機號碼() {
    let 號碼集合 = [];
    let mpsCount = { m: 0, p: 0, s: 0 };
    let zCount = 0;
  
    for (let i = 0; i <14; i++) {
        let 隨機數字 = Math.floor(Math.random() * 10);
        let 隨機字母 = '';
    
        if (隨機數字 === 0) {
            if (mpsCount.m < 1) {
                隨機字母 = 'm';
                mpsCount.m++;
            } else if (mpsCount.p < 1) {
                隨機字母 = 'p';
                mpsCount.p++;
            } else if (mpsCount.s < 1) {
                隨機字母 = 's';
                mpsCount.s++;
            } else {
                隨機數字 = Math.floor(Math.random() * 7) + 1;
                隨機字母 = 'z';
                zCount++;
            }
        } else {
            if (zCount < 1) {
                隨機數字 = Math.floor(Math.random() * 7) + 1;
                隨機字母 = 'z';
                zCount++;
            } else {
                隨機字母 = Math.random() < 0.5 ? 'm' : (Math.random() < 0.5 ? 'p' : 's');
                mpsCount[隨機字母]++;
            }
        }
    
        // 檢查是否超過 4 張
        if (mpsCount.m > 4) mpsCount.m = 4;
        if (mpsCount.p > 4) mpsCount.p = 4;
        if (mpsCount.s > 4) mpsCount.s = 4;
  
        let 隨機號碼 = (隨機數字 + 隨機字母 + ",").toString();
    
        號碼集合.push(隨機號碼);
    }
  
    // 將號碼集合按照 m、p、s、z 的順序進行排序
    號碼集合.sort((a, b) => {
        let 字母A = a.charAt(1);
        let 字母B = b.charAt(1);
        let 字母順序 = { m: 1, p: 2, s: 3, z: 4 };
    
        if (字母順序[字母A] < 字母順序[字母B]) {
            return -1;
        } else if (字母順序[字母A] > 字母順序[字母B]) {
            return 1;
        } else {
            return parseInt(a) - parseInt(b);
        }
    });
  
    // 刪掉號碼集合的最後一個字元
    號碼集合[號碼集合.length - 1] = 號碼集合[號碼集合.length - 1].slice(0, -1);
  
    return 號碼集合.join('');
}
  
  function 號碼轉相對圖片路徑(號碼) {
    let 號碼陣列 = 號碼.split(',');
  
    let 相對圖片路徑陣列 = 號碼陣列.map((號碼) => {
      let 字母 = 號碼.charAt(1);
      let 圖片路徑 = `images/牌/${字母}/${號碼.charAt(0)}.png`;
      return 圖片路徑;
    });
  
    return 相對圖片路徑陣列;
  }
  

  