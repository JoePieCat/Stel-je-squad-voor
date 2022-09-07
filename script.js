let extended = false;

function extend(part) {

    if (extended == false) {
        if (part == 1 || part == 6) { document.getElementById("part"+part).style.width = "90vw"; }
        else { document.getElementById("part"+part).style.width = "80vw"; }
        extended = true;
        
        setTimeout(() => {
            document.getElementById("short"+part).style.display = "none";
            document.getElementById("long"+part).style.display = "block";
        }, 200);

        if (part == 3 || part == 4 || part == 5 || part == 6) { document.getElementById("part1").style.width = "0"; document.getElementById("part1H").style.fontSize = "0"; }
        if (part == 4 || part == 5 || part == 6) { document.getElementById("part2").style.width = "0"; document.getElementById("part2H").style.fontSize = "0"; }
        if (part == 5 || part == 6) { document.getElementById("part3").style.width = "0"; document.getElementById("part3H").style.fontSize = "0"; }
        if (part == 6) { document.getElementById("part4").style.width = "0"; document.getElementById("part4H").style.fontSize = "0"; }

        if (part == 1) { document.getElementById("part2").style.width = "10vw"; }
        else if (part == 2) { document.getElementById("part1").style.width = "10vw"; document.getElementById("part3").style.width = "10vw"; }
        else if (part == 3) { document.getElementById("part2").style.width = "10vw"; document.getElementById("part4").style.width = "10vw"; }
        else if (part == 4) { document.getElementById("part3").style.width = "10vw"; document.getElementById("part5").style.width = "10vw"; }
        else if (part == 5) { document.getElementById("part4").style.width = "10vw"; document.getElementById("part6").style.width = "10vw"; }
        else if (part == 6) { document.getElementById("part5").style.width = "10vw"; }
    } 
    
    else if (extended == true) {
        let goThroughAll = 1;
        while (goThroughAll < 7) { 
            document.getElementById("part"+goThroughAll).style.width = "16.67vw"; 
            document.getElementById("part"+goThroughAll+"H").style.fontSize = "2vw"; 
            document.getElementById("short"+goThroughAll).style.display = "block";
            document.getElementById("long"+goThroughAll).style.display = "none";
            goThroughAll++; 
        }
        extended = false;
    }
}
