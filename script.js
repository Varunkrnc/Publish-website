
let menu = document. querySelector('#menu-icon');
let navbar	= document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open')

};

const sr = ScrollReveal ({
	distance: '40px',
	duaration: 2500,
	reset: true
	
});

sr.reveal('.logo',{delay:200,orgin: 'left'});
sr.reveal('.navbar',{delay:400,orgin: 'top'});
sr.reveal('.menu-btn',{delay:520,orgin: 'right'});

sr.reveal('.home-text span',{delay:600,orgin: 'top'});
sr.reveal('.home-text h1',{delay:680,orgin: 'left'});
sr.reveal('.home-text p',{delay:750,orgin: 'right'});
sr.reveal('.main-btn',{delay:860,orgin: 'left'});

sr.reveal('.social',{delay:1000,orgin: 'bottom'});


let menu = document. querySelector('#menu-icon');
let navbar	= document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open')

};

const sr = ScrollReveal ({
	distance: '40px',
	duration: 2500,
	reset: true
});
sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400,orgin: 'top'});
sr.reveal('.menu-btn',{delay:520,orgin: 'right'});

sr.reveal('.home-text span',{delay:600,orgin: 'top'});
sr.reveal('.home-text h1',{delay:680,orgin: 'left'});
sr.reveal('.home-text p',{delay:750,orgin: 'right'});
sr.reveal('.main-btn',{delay:860,orgin: 'left'});

sr.reveal('.social',{delay:1000,orgin: 'bottom'});


