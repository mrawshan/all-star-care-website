'use strict';

//---- For open and closs navigation ----//
const colNav = document.querySelector('.col-navigation');
const openNav = document.querySelector('.open-navigation');
const clossNav = document.querySelector('.closs-navigation');
const navLink = document.querySelector('.navigation');
const navItem = document.querySelectorAll('.link');

//Add hide on the navigation on the screen size max-width: 768px
const screenSize = window.matchMedia('(max-width: 767px)');
screenSize.matches ? navLink.classList.add('hide') : navLink.classList.remove('hide')

// Open navigation
const openNavigation = function () {
	if (screenSize.matches) {
		colNav.style.width = '100vw';
		openNav.classList.add('hide');
		clossNav.classList.remove('hide');
		navLink.classList.remove('hide');
	}
};

// Closs navigation
const clossNavigation = function () {
	if (screenSize.matches) {
		colNav.style.width = '0vw';
		clossNav.classList.add('hide');
		openNav.classList.remove('hide');
		navLink.classList.add('hide');
	}
};

// Animation on
const animationOn = function () {
	navItem.forEach((item, i) => {
		i++;
		const index = i;
		item.classList.add(`link${index}`);
	});
};

// Animation off
const animationOff = function () {
	navItem.forEach((item, i) => {
		i++;
		const index = i;
		item.classList.remove(`link${index}`);
	});
};

// Event handlers
openNav.addEventListener('click', () => {
	openNavigation();
	animationOn();
});

clossNav.addEventListener('click', () => {
	clossNavigation();
	animationOff();
});