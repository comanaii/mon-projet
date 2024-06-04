document.addEventListener("DOMContentLoaded", function() {
    // Bubble animations
    const bubbleContainer = document.querySelector('.bubble-container');

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble', randomShape());
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = Math.random() * 3 + 7 + 's';
        bubbleContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 10000);
    }

    function randomShape() {
        const shapes = ['circle', 'triangle', 'star'];
        return shapes[Math.floor(Math.random() * shapes.length)];
    }

    setInterval(createBubble, 500);
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("letter1").style.display = "block";
    document.querySelector(".tab-link").classList.add("active");
});
