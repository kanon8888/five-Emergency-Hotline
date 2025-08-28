// hard click
let count = 0;


const heartDisplay = document.getElementById('heart-count');

const cardButtons = document.querySelectorAll('.card-count');
for (let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].addEventListener('click', function() {
        count++;
        heartDisplay.textContent = count; 
        console.log(count);
    });
}
// hard click
let point = 0;


const copyDisplay = document.getElementById('copy-click');

const numberButtons = document.querySelectorAll('.number-count');
for (let i = 0; i < cardButtons.length; i++) {
    numberButtons[i].addEventListener('click', function() {
        point++;
        copyDisplay.textContent = point; 
        console.log(point);
    });
}





// let coins = 100; // শুরুর কয়েন সংখ্যা
// const coinDisplay = document.getElementById('coin-count');
// const callButtons = document.querySelectorAll('.call-btn');

// callButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (coins >= 20) {
//       coins -= 20; // ২০ কয়েন কমাও
//       coinDisplay.textContent = coins;
//       console.log("Call Done. Coins left:", coins);
//     } else {
//       alert("Not enough coins!");
//     }
//   });
// });
// cupy click
// let count = 0;


