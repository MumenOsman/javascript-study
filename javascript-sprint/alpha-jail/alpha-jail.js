// Alpha Jail JavaScript placeholder

// Add your script logic here

function init() {
    // create html elements
    const outsideDiv = document.createElement("div");
    outsideDiv.classList.add("outside", "zone");
    document.body.appendChild(outsideDiv);
    const insideDiv = document.createElement("div");
    insideDiv.classList.add("inside", "zone");
    document.body.appendChild(insideDiv);

    // set up cursor location variables at the center of the screen
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // update cursor location variables to match mouse position
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // move the letters to follow the cursor
        const followers = document.querySelectorAll(".follow");
        const rect = insideDiv.getBoundingClientRect();
        const isInsideJail = mouseX > rect.left && mouseX < rect.right && mouseY > rect.top && mouseY < rect.bottom;
        
        followers.forEach(cell => {
            if (isInsideJail) {
                cell.style.left = mouseX + "px";
                cell.style.top = mouseY + "px";
                cell.style.backgroundColor = "var(--orange)";
                cell.classList.add("trapped");
            } else if (cell.classList.contains("trapped")) {
                cell.classList.remove("follow");
            } else {
                cell.style.left = mouseX + "px";
                cell.style.top = mouseY + "px";
            }
        });
    });

    // create falling letters when a key is pressed
    document.addEventListener("keydown", (e) => {
        // only create letters
        if (e.key === "Escape") {
            const cells = document.querySelectorAll(".character");
            cells.forEach(cell => {
                cell.remove();
            });
        } else if (e.key >= "a" && e.key <= "z" && e.key.length === 1) {
            // detach any current followers
            const followers = document.querySelectorAll(".follow");
            followers.forEach(follower => {
                follower.classList.remove("follow");
            });

            // create the letter
            const cell = document.createElement("div");
            cell.classList.add("character", "follow");
            cell.textContent = e.key;
            // set the letter's position
            cell.style.left = mouseX + "px";
            cell.style.top = mouseY + "px";
            // color the letter white
            cell.style.backgroundColor = "White";
            cell.style.color = "black";
            
            const rect = insideDiv.getBoundingClientRect();
            const isInsideJail = mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom;
            if (isInsideJail) {
                cell.style.backgroundColor = "var(--orange)";
                cell.classList.add("trapped");
            }
            
            document.body.appendChild(cell);
        }   
    });
}

init()