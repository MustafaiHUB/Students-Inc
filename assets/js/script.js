'use strict';

// Selectors
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.nav');
const openBtn = document.querySelector('.toggler')
const accountSetting = document.querySelector('.account-setting-toggler');
const logingInfo = document.querySelector('.loging-info');
const searchInput = document.getElementById('search');
const searchIcon = document.querySelector('.search-icon');
const enterBtn = document.querySelector('.enter-btn');

// Open & Close navbar
openBtn.addEventListener('click', function () {
    openBtn.setAttribute('aria-expanded', 'true');
    nav.classList.add('open-nav');
})
closeBtn.addEventListener('click', function () {
    nav.classList.remove('open-nav');
    openBtn.setAttribute('aria-expanded', 'false');
})

// Open & Close account settings
accountSetting.addEventListener('click', function () {
    logingInfo.style.transition = '300ms';
    logingInfo.classList.toggle('loging-info-open');
})

// Focus on the search input when clicking the icon
searchIcon.addEventListener('click', function () {
    searchInput.focus();
})

// Alert when clicking the enter button
enterBtn.addEventListener('click', function () {
    alert('Enter button was clicked!');
})