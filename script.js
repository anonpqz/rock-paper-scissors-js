function getComputerChoice() {
    let choicenum = Math.floor(Math.random() * 3) + 1;
    console.log(choicenum);
    switch(choicenum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";


    } 
}