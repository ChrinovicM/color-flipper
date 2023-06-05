const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8,9, 'A', 'B', 'C', 'D', 'E',"F"]

//#letters are an extansion. ex:F=15
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colors = document.getElementById('colors');
btn.addEventListener('click', function (){
    let hexColor = '#';
    for (let i=0; i < 6; i ++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

colors.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    color.style.color = hexColor;
});



function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

