// увцфц
const answers_no = [
    "Нет",
    "Ты уверена?",
    "Ты точно уверена??",
    "Прям совсем-совсем уверена???",
    "Может подумаешь ещё?",
    "Не веришь во второй шанс?",
    "Почему ты такая холодная?",
    "Может поговорим об этом?",
    "Я больше не буду спрашивать!",
    "Мне уже становится грустно!",
    "Это уже немного жестоко...",
    "Почему ты так со мной?",
    "Пожалуйста, дай мне шанс!",
    "Я прошу тебя, остановись!",
    "Ладно... давай начнём сначала."
];

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');

let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');

    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }

    clicks++;

    // увеличиваем кнопку "Да"
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];

    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    let total = answers_no.length;

    if (i < total - 1) {
        no_button.innerHTML = answers_no[i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[i]);
        i = 1;
        no_button.innerHTML = answers_no[0];

        yes_button.innerHTML = "Да";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    window.location.href = "index1.html";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
