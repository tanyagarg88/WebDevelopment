const max =prompt("enter the max no");

const random = Math.floor(Math.random()*10)+1;

let guess=prompt("guess the no");
while(true){
    if (guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess=="random"){
        console.log("yes you are right",random);
        break;
    }else if(guess<random){
        guess=prompt("hint:your guess was too small pls try again");
    }else{
        guess=prompt("hint:your no is too large");
    }
}