function getUserChoice (userInput = userInput.toLowerCase()){
    if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb'){
        return userInput
    }
    else{
        console.log('You must pick rock, paper, or scissors.')
    }
}

function getComputerChoice (){
    if(Math.floor(Math.random() * 3) == 0){
        return 'rock'
    }
    else if (Math.floor(Math.random() * 3) == 1){
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function determineWinner (getUserChoice, getComputerChoice){
    if(getUserChoice == getComputerChoice){
        return "It's a tie!"
     }
     else if(getUserChoice == 'rock' && getComputerChoice == 'paper'){
        return "The Computer won"
     }
     else if(getUserChoice == 'rock' && getComputerChoice == 'scissors'){
        return "You won!"
     }
     else if(getUserChoice == 'paper' && getComputerChoice == 'scissors'){
        return "The Computer won"
     }
     else if(getUserChoice == 'paper' && getComputerChoice == 'rock'){
        return "You won"
     }
     else if(getUserChoice == 'scissors' && getComputerChoice == 'rock'){
        return "The Computer won"
     }
     else if(getUserChoice == 'scissors' && getComputerChoice == 'paper'){
        return "You won"
     }
     else if(getUserChoice == 'bomb'){
        return "Cheaters always win"
     }
}

function playGame(userChoice = getUserChoice('bomb'), computerChoice = getComputerChoice()){
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()
