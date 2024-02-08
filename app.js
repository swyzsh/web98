// Function to update the Clock in TaskBar
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.querySelector('#clock span').textContent = `${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 30000); // updates the clock immediately and every 30 seconds

// Selection box logic
let isSelecting = false;
let startX, startY, endX, endY;
const desktop = document.getElementById('desktop');
const selectionBox = document.getElementById('selection-box');

desktop.addEventListener('mousedown', function(e) {
  isSelecting = true;
  startX = e.clientX;
  startY = e.clientY;
  // Initialize the selection box styles
  selectionBox.style.left = `${startX}px`;
  selectionBox.style.top = `${startY}px`;
  selectionBox.style.width = '0';
  selectionBox.style.height = '0';
  selectionBox.style.visibility = 'visible';
});

desktop.addEventListener('mousemove', function(e) {
  if (isSelecting) {
    endX = e.clientX;
    endY = e.clientY;
    // Update the selection box styles
    selectionBox.style.width = `${Math.abs(endX - startX)}px`;
    selectionBox.style.height = `${Math.abs(endY - startY)}px`;
    selectionBox.style.left = `${Math.min(startX, endX)}px`;
    selectionBox.style.top = `${Math.min(startY, endY)}px`;
  }
});

desktop.addEventListener('mouseup', function() {
  if (isSelecting) {
    isSelecting = false;
    selectionBox.style.visibility = 'hidden';
  }
});

// Basic Hyperlink functions for some buttons

const telegramIcon = document.getElementById('telegram-icon');
telegramIcon.addEventListener('click', function() {
  window.open('https://telegram.org/', '_blank');
});

const twitterIcon = document.getElementById('twitter-icon');
twitterIcon.addEventListener('click', function() {
  window.open('https://twitter.com/finisusdoteth/', '_blank');
});

// Creating a Internet explorer Window lookalike for buy page

document.getElementById('buy-page').addEventListener('click', function() {
  document.getElementById('ie-window').style.display = 'block';
  document.getElementById('ie-content').src="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&fixed=in";
});

document.getElementById('ie-close').addEventListener('click', function() {
  document.getElementById('ie-window').style.display = 'none';
});

// Internet Explorer Toolbar

// function to change toolbar icons color on hover
document.addEventListener('DOMContentLoaded', (event) => {
  const toolbarHoverImages = {
    'ie-home': './metadata/toolbar/color-icons/home.png',
    'ie-favorites': './metadata/toolbar/color-icons/favorites.png',
    'ie-print': './metadata/toolbar/color-icons/print.png',
  };

  function setImageSource(buttonId, src) {
    const button = document.getElementById(buttonId);
    const img = button.querySelector('img');
    img.src = src;
  }

  Object.keys(toolbarHoverImages).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    const img = button.querySelector('img');
    const originalSrc = img.src;

    button.addEventListener('mouseenter', () => setImageSource(buttonId, toolbarHoverImages[buttonId]));
    button.addEventListener('mouseleave', () => setImageSource(buttonId, originalSrc));
  });
});


/*
 * Info Page    
 */

// creating and opening explorer window for info page

document.getElementById('info-page').addEventListener('click', function() {
  document.getElementById('info-window').style.display = 'block';
});

document.getElementById('ie-close').addEventListener('click', function() {
  document.getElementById('info-window').style.display = 'none';
});
