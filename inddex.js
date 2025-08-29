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



//call button and history



// let coins = 100; 
// const coinDisplay = document.getElementById("coin-count");
// coinDisplay.textContent = coins;


// const callLog = document.getElementById("call-log");


// document.querySelectorAll(".call-now").forEach(btn => {
//   btn.addEventListener("click", () => {
//     if (coins < 20) {
//       alert("Not enough coins!");
//       return;
//     }

//     coins -= 20; 
//     coinDisplay.textContent = coins;

    
//     const card = btn.closest(".w-full");
//     const hotlineName = card.querySelector("h1.text-xl ").textContent;
//     const hotlineNumber = card.querySelector("h1.text-2xl, h1.text-xl.font-bold.my-5").textContent;

    
//     const now = new Date();
//     const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second:'2-digit' });

    
//     alert('${hotlineName}\n${hotlineNumber}\nTime: ${time}');

//     const div = document.createElement("div");
//     div.className = "flex justify-between items-center  py-2";
//     div.innerHTML = `
//       <div>
//         <p class="font-bold text-black text-lg">${hotlineName}</p>
//         <p class=" text-black font-bold text-lg">${hotlineNumber}</p>
//       </div>
//       <div class="text-right text-black font-bold text-lg">${time}</div>
//     `;
//     callLog.prepend(div);
//   });
// });

// // clear history
// document.getElementById("clear-history").addEventListener("click", () => {
//   callLog.innerHTML = "";
// });



// Coins শুরুতে
let coins = 100;
const coinDisplay = document.getElementById("coin-count");
coinDisplay.textContent = coins;

// Call history container
const callLog = document.getElementById("call-log");

// সব call buttons select করা
document.querySelectorAll(".call-now").forEach(btn => {
  btn.addEventListener("click", () => {
    // Coins check
    if (coins < 20) {
      alert("Not enough coins!");
      return;
    }

    coins -= 20;
    coinDisplay.textContent = coins;

    // Card select করা
    const card = btn.closest(".w-full");
    const hotlineName = card.querySelector("h1.text-xl").textContent;
    const hotlineNumber = card.querySelector("h1.text-2xl").textContent;

    // Call time
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Alert দেখানো
    alert(`Calling ${hotlineName}\nNumber${hotlineNumber}\nTime: ${time}`);

    // History তে add করা
    const div = document.createElement("div");
    div.className = "flex justify-between items-center py-2 border-b border-gray-200";
    div.innerHTML = `
      <div>
        <p class="font-bold text-black text-lg">${hotlineName}</p>
        <p class="text-black font-bold text-lg">${hotlineNumber}</p>
      </div>
      <div class="text-right text-black font-bold text-lg">${time}</div>
    `;
    callLog.prepend(div);
  });
});

// Clear history
document.getElementById("clear-history").addEventListener("click", () => {
  callLog.innerHTML = "";
});



