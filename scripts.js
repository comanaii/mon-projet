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
