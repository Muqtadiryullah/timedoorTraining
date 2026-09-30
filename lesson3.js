let x = -12;
let y = 8;

if(x > 0 && y > 0){
    console.log("The player is on the top right");
}else if(x < 0 && y < 0){
    console.log("The player is at the bottom left");
}else if(x > 0 && y < 0){
    console.log("The player is on the bottom right");
}else if(x < 0 && y > 0){
    console.log("Player is on the top left");
}