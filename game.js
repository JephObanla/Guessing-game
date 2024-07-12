let random = Math.floor(Math.random() * 100);
console.log(random)

function checkNum() {
    let num = document.getElementById("num").value
    let result = document.getElementById("par")
    console.log(num)
    if(num == random){
        result.textContent = "You guessed the number correctly"
        console.log("You guessed the number correctly")
    } else if (random > num){
        result.textContent = "The number you entered is less than the correct number"
        console.log("The number you entered is less than the correct number")
    } else{
        result.textContent = "The number you entered is greater than the correct number"
        console.log("The number you entered is greater than the correct number")
    }
}
