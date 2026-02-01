const horizontal = document.getElementById("horizontal");
const vertical = document.getElementById('vertical');
const type = document.getElementById('type');
const message = document.getElementById('message');
const duration = document.getElementById("duration");
const timeText = document.getElementById("time");
const button = document.getElementById("showToast");
const container = document.getElementById("toast-container");

duration.addEventListener('input', () => {
    timeText.innerText = duration.value + 's';
})


button.addEventListener('click', () => {
    createToast(
        message.value,
        type.value,
        horizontal.value,
        vertical.value,
        duration.value

    )
})

function createToast( text, type, horizontal, vertical, duration) {

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
    <span>${text}</span>
    <button>&times;</button>
    `;



container.style.top = vertical === "top" ? "20px" : 'auto';
container.style.bottom = vertical === 'bottom' ? '20px' : 'auto';

if (horizontal  === 'left') {
    container.style.left = '20px';
    container.style.right = 'auto';
    container.style.transform = 'none';
} else if (horizontal === 'right') {
    container.style.right = '20px';
    container.style.left = 'auto';
    container.style.transform = 'none';
} else {
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
}

toast.querySelector('button').onclick = () => {
    toast.remove();
};

container.appendChild(toast);

setTimeout(() => {
    toast.remove();
}, duration * 1000);

}