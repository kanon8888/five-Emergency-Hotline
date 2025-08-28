const countButton = document.getElementById('count').addEventListener('click',function(e){
    count++;
    heartDisplay.textContent = count;
    console.log(count)
})