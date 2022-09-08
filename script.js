let extended = false;

function extend(part) {
    const lists = document.querySelectorAll(".list")

    if (extended == false) {
        if (part == 1 || part == 6) { document.getElementById("part"+part).style.width = "90vw"; }
        else { document.getElementById("part"+part).style.width = "80vw"; }
        extended = true;
        
        setTimeout(() => {
            document.getElementById("short"+part).style.display = "none";
            document.getElementById("long"+part).style.display = "block";
        }, 350);

        lists.forEach(list => { list.style.margin = "0 20px 0 0"; })

        if (part == 1 || part == 2 || part == 3 || part == 4) { document.getElementById("part6").style.width = "0"; document.getElementById("part6H").style.display = "none"; document.getElementById("short6").style.display = "none"; }
        if (part == 1 || part == 2 || part == 3) { document.getElementById("part5").style.width = "0"; document.getElementById("part5H").style.display = "none"; document.getElementById("short5").style.display = "none"; }
        if (part == 1 || part == 2) { document.getElementById("part4").style.width = "0"; document.getElementById("part4H").style.display = "none"; document.getElementById("short4").style.display = "none"; }
        if (part == 1) { document.getElementById("part3").style.width = "0"; document.getElementById("part3H").style.display = "none"; document.getElementById("short3").style.display = "none"; }

        if (part == 6 || part == 5 || part == 4 || part == 3) { document.getElementById("part1").style.width = "0"; document.getElementById("part1H").style.display = "none"; document.getElementById("short1").style.display = "none"; }
        if (part == 6 || part == 5 || part == 4) { document.getElementById("part2").style.width = "0"; document.getElementById("part2H").style.display = "none"; document.getElementById("short2").style.display = "none"; }
        if (part == 6 || part == 5) { document.getElementById("part3").style.width = "0"; document.getElementById("part3H").style.display = "none"; document.getElementById("short3").style.display = "none"; }
        if (part == 6) { document.getElementById("part4").style.width = "0"; document.getElementById("part4H").style.display = "none"; document.getElementById("short4").style.display = "none"; }

        if (part == 1) { document.getElementById("part2").style.width = "10vw"; }
        else if (part == 2) { document.getElementById("part1").style.width = "10vw"; document.getElementById("part3").style.width = "10vw"; }
        else if (part == 3) { document.getElementById("part2").style.width = "10vw"; document.getElementById("part4").style.width = "10vw"; }
        else if (part == 4) { document.getElementById("part3").style.width = "10vw"; document.getElementById("part5").style.width = "10vw"; }
        else if (part == 5) { document.getElementById("part4").style.width = "10vw"; document.getElementById("part6").style.width = "10vw"; }
        else if (part == 6) { document.getElementById("part5").style.width = "10vw"; }
    } 
    
    else if (extended == true) {
        lists.forEach(list => { list.style.margin = "0 50px 0 0"; })

        let goThroughAll = 1;
        while (goThroughAll < 7) { 
            document.getElementById("part"+goThroughAll).style.width = "16.67vw"; 
            goThroughAll++; 
        }
        extended = false;

        goThroughAll = 1;
        setTimeout(() => {
            while (goThroughAll < 7) { 
                document.getElementById("part"+goThroughAll+"H").style.display = "block";
                document.getElementById("long"+goThroughAll).style.display = "none";
                document.getElementById("short"+goThroughAll).style.display = "block";
                goThroughAll++; 
            }
        }, 350);
    }
}

function makeBanner() {
    document.getElementById("titleTop").style.height = "10vh";
}
