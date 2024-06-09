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

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to all buttons with class 'tab-link'
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(button => {
        button.addEventListener('click', function(event) {
            handleTabClick(event, this);
        });
    });
});

function handleTabClick(event, element) {
    // Check if the button has a data-warning attribute
    if (element.getAttribute('data-warning')) {
        const userConfirmed = confirm("Attention : Ce contenu est interdit aux moins de 16 ans. Voulez-vous continuer ?");
        if (!userConfirmed) {
            return; // Exit the function if the user clicks "Cancel"
        }
    }

    openTab(event, element.getAttribute('data-tab'));
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    var activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = "block";
        activeTab.classList.add("active");
    }
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const storyText = button.previousElementSibling;
            const isVisible = storyText.style.display === 'block';

            if (isVisible) {
                storyText.style.display = 'none';
                button.textContent = 'Lire la suite';
            } else {
                storyText.style.display = 'block';
                button.textContent = 'Réduire';
            }
        });
    });
});



