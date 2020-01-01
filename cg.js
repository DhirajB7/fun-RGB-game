var colors=[]
var colorHoldingElements = document.querySelectorAll(".square")
var correctColorElement = document.getElementById("headerColor")
var messageElement = document.getElementById("message")
count=[3,6,9]

document.getElementById("easy").addEventListener("click",function () {
    allInOne(count[0])
})

document.getElementById("medium").addEventListener("click",function () {
    allInOne(count[1])

})

document.getElementById("hard").addEventListener("click",function () {
    allInOne(count[2])
})



function startArray(arraySize){
for(var i = 0;i<arraySize;i++){
    colors.push(defineColor().toString())
}
}

function defineColor() {
    var oneRandomColor =  "rgb("+(Math.floor(Math.random()*256)).toString()+", "+(Math.floor(Math.random()*256)).toString()+", "+(Math.floor(Math.random()*256)).toString()+")"
    return oneRandomColor
}


function fillColorInTile(){
    console.log(colors.length)
    for(var i = 0 ; i < colors.length;i++){
        colorHoldingElements[i].style.backgroundColor = colors[i]
        colorHoldingElements[i].addEventListener("click",squareClick)
    }
}

var correctColor

function squareClick(){
        var colorOfThisSquare = this.style.backgroundColor
        if(colorOfThisSquare===correctColor){
            messageElement.innerText="CORRECT !"
            colorChangeForCorrectAnswer()
        }else{
           this.style.backgroundColor="#232323"
           messageElement.innerText="Try Again !"
        }
}

function colorChangeForCorrectAnswer() {
    for(var i = 0 ; i < colors.length;i++){
        colorHoldingElements[i].style.backgroundColor = correctColor
  }
}

function colorPicker(){
    var index = Math.floor(Math.random()*colors.length)
    return colors[index]
}

function colorChangeReset() {
    for(var i = 0 ; i < count[count.length-1];i++){
        colorHoldingElements[i].style.backgroundColor = "#232323"
  }
}

function allInOne(tileCount){
    colorChangeReset()
    colors=[]
    startArray(tileCount)
    fillColorInTile()
    correctColor = colorPicker()
    correctColorElement.innerHTML="find".toUpperCase()+" : "+correctColor.toUpperCase()
}
