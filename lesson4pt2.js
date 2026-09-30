let totaltime = 0;
let overtime = 0;
let week = [2, 2, 3, 3, 1, 4, 5];

for(let i=0; i<7; i++){
    totaltime += week[i];
    if(week[i] > 2){
        overtime += week[i];
    }
}
console.log("Total time played : " + totaltime);
console.log("Total time exceeded : " + overtime);
