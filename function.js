// script.js

const pack = document.getElementById('pack');
const content = document.getElementById('content');
const rewardText = document.getElementById('reward');

// Possible rewards
const rewards = [
    "Legendary Bloops!",
    "Rare Bloops!",
    "Common Bloops!",
    "Ultra Rare Bloops!",
    "Exclusive Bloops!"
];

// Open pack function
pack.addEventListener('click', () => {
    pack.classList.add('open'); // Add animation
    setTimeout(() => {
        content.classList.add('show'); // Show content after animation
        const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
        rewardText.textContent = randomReward;
    }, 1000); // Delay content display
});

// Reload the page for a new pack
function reloadPage() {
    window.location.reload();
}
