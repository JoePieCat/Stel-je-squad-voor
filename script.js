let extended = false;

function extend(part) {

    if (extended == false) {
        document.getElementById("part"+part).style.width = "80vw";
        extended = true;

        if (part == 3 || part == 4 || part == 5 || part == 6) { document.getElementById("part1").style.width = "0"; document.getElementById("part1H").style.fontSize = "0"; }
        if (part == 4 || part == 5 || part == 6) { document.getElementById("part2").style.width = "0"; document.getElementById("part2H").style.fontSize = "0"; }
        if (part == 5 || part == 6) { document.getElementById("part3").style.width = "0"; document.getElementById("part3H").style.fontSize = "0"; }
        if (part == 6) { document.getElementById("part4").style.width = "0"; document.getElementById("part4H").style.fontSize = "0"; }

        if (part == 2) { document.getElementById("part1").style.width = "10vw"; document.getElementById("part3").style.width = "10vw"; }
        if (part == 3) { document.getElementById("part2").style.width = "10vw"; document.getElementById("part4").style.width = "10vw"; }
        if (part == 4) { document.getElementById("part3").style.width = "10vw"; document.getElementById("part5").style.width = "10vw"; }
        if (part == 5) { document.getElementById("part4").style.width = "10vw"; document.getElementById("part6").style.width = "10vw"; }
    } 
    
    else if (extended == true) {
        let goThroughAll = 1;
        while (goThroughAll < 7) { 
            document.getElementById("part"+goThroughAll).style.width = "16.67vw"; 
            document.getElementById("part"+goThroughAll+"H").style.fontSize = "2vw"; 
            goThroughAll++; 
        }

        extended = false;
    }

}