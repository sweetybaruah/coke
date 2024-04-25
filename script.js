
if (window.innerWidth <= 600) {
    gsap.to(".empty_blt", { delay: 1, y: -450, opacity: 1, duration: 1, onComplete: showFullBtl });
} else {
    gsap.to(".empty_blt", { delay: 1, y: -250, opacity: 1, duration: 1, onComplete: showFullBtl });
}



function showFullBtl() {
    gsap.to(".full_blt", {delay: 1, display: 'block', opacity: 1, duration: 1, onComplete: showCap});
}

function showCap() {
    gsap.to('.cap', {delay: 4, display: 'block', onComplete: flyAway});
}

function flyAway() {
    gsap.to('.cap', {delay: 1, y: -1050, opacity: 0, duration: 1,onComplete: showbg});
}
function showbg() {
    gsap.to('.fizz', {delay: 1, display: 'block',ease: "power1.inOut", duration: 2, y: -500});
}