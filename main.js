const handleFirstTab = (e) => {
	if (e.key === 'Tab') {
		document.body.classList.add('user-is-tabbing');

		window.removeEventListener('keydown', handleFirstTab);
		window.addEventListener('mousedown', handleMouseDownOnce);
	}
};

const handleMouseDownOnce = () => {
	document.body.classList.remove('user-is-tabbing');

	window.removeEventListener('mousedown', handleMouseDownOnce);
	window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

const backToTopButton = document.querySelector('.back-to-top');
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
	backToTopButton.style.visibility = isBackToTopRendered ? 'visible' : 'hidden';
	backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
	backToTopButton.style.transform = isBackToTopRendered
		? 'scale(1)'
		: 'scale(0)';
};

window.addEventListener('scroll', () => {
	if (window.scrollY > 700) {
		isBackToTopRendered = true;
		alterStyles(isBackToTopRendered);
	} else {
		isBackToTopRendered = false;
		alterStyles(isBackToTopRendered);
	}
});

const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav__items');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navItems.classList.toggle('active');
});

document.querySelectorAll('.nav__item').forEach((n) =>
	n.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navItems.classList.remove('active');
	})
);



const playvideo = document.getElementById("playvideo");
const video = document.getElementById("video");
const thumbnail = document.getElementById("thumbnail");

thumbnail.addEventListener('click', () => {
	video.style.display = "block";
  thumbnail.style.display="none"
  video.play();
});

video.addEventListener('click', () => {
	video.style.display = "none";
  thumbnail.style.display="block"
});

playvideo.addEventListener('click', () => {
	video.style.display = "block";
  thumbnail.style.display="none"
  video.play();
});