// listener for the window 


function onPrevClick() {
    const currentSelectedLetter = document.querySelector(".selected");
    currentSelectedLetter.classList.remove("selected");
    let prevLetter = currentSelectedLetter.previousElementSibling;
    if (currentSelectedLetter.id === 'a') {
        prevLetter = document.querySelector("#z");
    }
    prevLetter.classList.add("selected");
}
function onNextClick() {
    const currentSelectedLetter = document.querySelector(".selected");
    currentSelectedLetter.classList.remove("selected");
    let nextLetter = currentSelectedLetter.nextElementSibling;
    if (currentSelectedLetter.id === 'z') {
        nextLetter = document.querySelector("#a");
    }
    nextLetter.classList.add("selected");
}
function onDecreaseClick() {
    const currentSelectedLetter = document.querySelector(".selected");
    if (!currentSelectedLetter) return;
    const computedSize = parseInt(window.getComputedStyle(currentSelectedLetter).fontSize) || 16;
    if (computedSize <= 10) {
        return;
    }
    currentSelectedLetter.style.fontSize = (computedSize - 2) + "px";
}
function onIncreaseClick() {
    const currentSelectedLetter = document.querySelector(".selected");
    if (!currentSelectedLetter) return;
    const computedSize = parseInt(window.getComputedStyle(currentSelectedLetter).fontSize) || 16;
    if (computedSize >= 26) {
        return;
    }
    currentSelectedLetter.style.fontSize = (computedSize + 2) + "px";
}


function init() {
    const container = document.createElement("div");

    // create a letter container div within the body tag with 26 div letters
    container.classList.add("letter-container");
    for (let i = 0; i < 26; i++) {
        const letter = document.createElement("div");
        letter.classList.add("letter");
        letter.id = String.fromCharCode(97 + i);
        letter.style.fontSize = "14px"; // Default font-size 14px
        if (letter.id === "a") {
            letter.classList.add("selected");
        }
        letter.textContent = String.fromCharCode(65 + i);

        // Add click listener to select letter directly
        letter.addEventListener("click", () => {
            const currentSelectedLetter = document.querySelector(".selected");
            if (currentSelectedLetter) {
                currentSelectedLetter.classList.remove("selected");
            }
            letter.classList.add("selected");
        });

        container.append(letter);
    }
    document.body.appendChild(container);

    // button container with 4 buttons (prev, next, decrease, increase)
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("button-container");
    const prevBtn = document.createElement("button");
    prevBtn.id = "prev";
    prevBtn.textContent = "<";
    prevBtn.addEventListener("click", onPrevClick);
    const nextBtn = document.createElement("button");
    nextBtn.id = "next";
    nextBtn.textContent = ">";
    nextBtn.addEventListener("click", onNextClick);
    const decreaseBtn = document.createElement("button");
    decreaseBtn.id = "decrease";
    decreaseBtn.textContent = "-";
    decreaseBtn.addEventListener("click", onDecreaseClick);
    const increaseBtn = document.createElement("button");
    increaseBtn.id = "increase";
    increaseBtn.textContent = "+";
    increaseBtn.addEventListener("click", onIncreaseClick);
    btnContainer.append(prevBtn, nextBtn, decreaseBtn, increaseBtn);
    document.body.appendChild(btnContainer);
}

// Auto-run when the DOM is ready/loaded
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}



