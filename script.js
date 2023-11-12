const $ = (selector) => {
    return document.querySelector(selector);
}

const hour = $('.hour');
const dot = $('.dot');
const minute = $('.minute');
const week = $('.week');
const dateDisplay = $('.date'); // Reference to the date element

let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        dot.classList.remove('invisible');
    } else {
        dot.classList.add('invisible');
    }

    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hours to 12-hour format

    hour.textContent = String(hours).padStart(2, '0');
    minute.textContent = String(now.getMinutes()).padStart(2, '0');

    // Display the date (e.g., "DD/MM/YYYY")
    const date = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
    dateDisplay.textContent = date;

    const dayIndex = now.getDay();
    Array.from(week.children).forEach((ele, index) => {
        ele.classList.toggle('active', index === (dayIndex + 1) % 7); // Adjusted for the new order
    });
}

setInterval(update, 500);
