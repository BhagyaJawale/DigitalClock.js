let hour = Number(prompt("Enter time in hours:"));
    if ((hour < 0) || (hour > 24)) {
        alert("Enter the hour between 0-24hours");
    }
let minutes = Number(prompt("Enter time in minutes:"));
    if ((minutes < 0) || (minutes > 60)) {
        alert("Enter the minute between 0-60minutes");
    }
let seconds = Number(prompt("Enter time in seconds:"));
    if ((seconds < 0) || (seconds > 60)){
        alert("Enter the second between 0-60seconds");
    }
console.log(` Time entered is ${hour}:${minutes}:${seconds}`);
if(seconds >= 60){
    console.log(`${hour}:${minutes+1}:00`);
    }
else if(minutes >= 60){
    console.log(`${hour+1}:00:00`);
    }
else if(hour === 24){
    console.log(`00:${minutes}:${seconds}`);
    }
else{
    console.log(`${hour}:${minutes}:${seconds+1}`);
    }