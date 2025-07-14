document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const slider = document.querySelector('.categories-slider');
    const acceptCookies = document.getElementById('accept-cookies');

    nextButton.addEventListener('click', () => {
        slider.classList.add('slide-active');
        nextButton.classList.add('hidden');
        prevButton.classList.remove('hidden');
    });

    prevButton.addEventListener('click', () => {
        slider.classList.remove('slide-active');
        prevButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
    });
    acceptCookies.addEventListener('click', () => {
    const cookiesBanner = document.getElementById('cookies');
    if (cookiesBanner) {
        cookiesBanner.remove();
    }
});
});