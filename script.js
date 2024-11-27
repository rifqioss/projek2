const dynamicText = document.querySelector("h1 span");
const words = ["Fronted Devoloper", "Like Art", "The Future", "Scients"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {https://i.pinimg.com/control2/236x/71/38/cf/7138cf1143009988ab75a598e43e1dd1.jpg
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

var nav = document.querySelector("nav")
window.addEventListener("scroll", ()=> {
    if(document.documentElement.scrollTop > 20 ) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky")
    }
});    
