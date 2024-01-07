

// Personalized welcome message code
function toggleSwitch(checkbox) {
  const switchElement = checkbox.parentNode;
  switchElement.classList.toggle('switch--on');
  switchElement.classList.toggle('switch--off');
}

function toggleColorSwitch(checkbox) {
  toggleSwitch(checkbox); // 保持 toggleSwitch 不變

  const body = document.body;
  if (checkbox.parentNode.classList.contains('switch--on')) {
      // 切換為白色背景、黑色文字
      body.style.backgroundColor = '#fff';
      body.style.color = '#000';
  } else {
      // 切換為黑色背景、白色文字
      body.style.backgroundColor = '#7B7B7B';
      body.style.color = '#fff';
  }
}

function toggleFontSizeSwitch(checkbox) {
  toggleSwitch(checkbox); // 保持 toggleSwitch 不變

  const body = document.body;
  if (checkbox.parentNode.classList.contains('switch--on')) {
      // 切換為字體大小 24px
      body.style.fontSize = '24px';
  } else {
      // 切換為字體大小 12px
      body.style.fontSize = '12px';
  }
}

document.addEventListener('DOMContentLoaded', function() {

// 滑條相關 
// Get elements
const slider = document.getElementById('slider');
const sliderLeft = document.getElementById('sliderLeft');
const sliderCircle = document.getElementById('sliderCircle');
const sliderRight = document.getElementById('sliderRight');


// Add event listener to the slider
slider.addEventListener('mousemove', handleMouseMove);
slider.addEventListener('mouseup', handleMouseUp);

// Flag to check if dragging
let isDragging = false;

// Handle mouse down
sliderCircle.addEventListener('mousedown', (event) => {
    event.preventDefault(); // Prevent text selection during drag
    isDragging = true;



    
});

// Handle mouse up
function handleMouseUp() {
    isDragging = false;
}
function handleMouseMove(event) {
  if (isDragging) {
      const sliderRect = slider.getBoundingClientRect();
      const percentage = (event.clientX - sliderRect.left) / sliderRect.width * 100;

      // 將百分比限制在 0% 和 100% 之間
      const clampedPercentage = Math.max(0, Math.min(100, percentage));

      // 更新樣式
      sliderLeft.style.width = clampedPercentage + '%';
      sliderCircle.style.left = clampedPercentage + '%';
      sliderRight.style.width = 100 - clampedPercentage + '%';



      // 根據百分比改變背景色
      const backgroundColor = `rgb(${clampedPercentage}%, ${clampedPercentage}%, ${clampedPercentage}%)`;
      document.body.style.backgroundColor = backgroundColor;
  }
}

/* 黏性標題欄按鈕    */
document.getElementById("首頁按鈕測試").onclick = function() {
    location.href = "按鈕測試l.html";
}
document.getElementById("首頁拉條測試").onclick = function() {
  location.href = "拉條測試.html";
}


});