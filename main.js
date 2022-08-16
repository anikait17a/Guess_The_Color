rgbval = document.getElementById('rgb')

//Setting the main Color. Setting the text Content of RGB val.
rgbval.textContent+="("
let a=0
while (a!=3) {
    randomnum = Math.floor(Math.random() * 255);
    rgbval.textContent+=randomnum.toString();
    a++
    rgbval.textContent+=",";
}
rgbval.textContent = rgbval.textContent.slice(0,-1)
rgbval.textContent+=")"

let randomitem = (Math.floor(Math.random()*6)+1).toString()
// console.log(randomitem)

let mainItem = document.getElementById('color'+randomitem)
mainItem.style = "background-color:"+rgbval.textContent+";"


a = 1

//Giving a color to every colorDiv excluding mainDiv
while(a!=7){
    if("color"+a.toString == "color"+randomitem){
        a++
        continue
    }
    document.getElementById('color'+a).style = "background-color:"+"rgb("+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()
    a++
}

articles = document.getElementsByTagName('div');

let guesses_left = 3
let quit = false

let mainBox = document.getElementById("color"+randomitem)


let allBoxes = document.querySelectorAll(".colorBoxes")



allBoxes.forEach(colorBoxes => {
    colorBoxes.addEventListener('click', function aColorPicked() {
        if (quit == false){
            if (colorBoxes == mainBox){
                console.log("You Win")
                document.getElementById('message').innerText = "Congratulations!! You Won!!"
                quit = true
            }
            guesses_left--
            document.getElementById('noOfGuesses').textContent = "GUESSES LEFT: "+guesses_left.toString()
            if (guesses_left==0){
                console.log("You Lose")
                document.getElementById('message').innerHTML = "You Lose"
                quit = true
                // allBoxes.forEach(colorBoxes => {document.removeEventListener('click', aColorPicked())})
            }
        }
    });

})
