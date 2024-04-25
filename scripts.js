const wire = document.querySelector('.wire');
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');



function handleMouseDown(event) {
    event.preventDefault();
    const initialX = event.clientX || event.touches[0].clientX;
    const initialY = event.clientY || event.touches[0].clientY;

    const minX = 100;
    const maxX = 300; 


    Draggable.create(wire, {
        type: "x,y",
        bounds: { minX, maxX },
        onPress: function () {
            // When a user touches the wire, stop any animation and remove the 'ppa_hidden' class from slide1
            gsap.killTweensOf(slide1.children);
            slide1.classList.remove('ppa_hidden');
        },
        onDragStart: function () {
            wire.classList.add('dragged');
            wire.style.left = `${-400}px`; 
            wire.style.top = `${305}px`; 
        },
        onDragEnd: function () {
            console.log('drag')
            wire.classList.remove('dragged');
            wire.style.left = `${-400}px`; 
            wire.style.top = `${305}px`; 
            wire.classList.add('ppa_hidden');
            const midX = (minX + maxX) / 2;
            const closestSlide = (wire.offsetLeft + wire.offsetWidth / 2) < midX ? slide1 : slide2;

            const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.inOut" } });

            if (closestSlide === slide1) {
                tl.to(slide1.children, { opacity: 0, stagger: 0.1, onComplete: () => {
                    slide1.classList.add('ppa_hidden');
                    tl.fromTo(slide2.children, { opacity: 0 }, { opacity: 1, stagger: 0.1 });
                    slide2.classList.remove('ppa_hidden');
                    tl.to(".l_effect, .m_effect, .r_effect, .wave", { scale: .8, duration: 1, repeat: -1, yoyo: true });
                    bg.classList.remove('ppa_hidden');
                }});
            } else {
                
            }

            
        }
    });
}

// Add event listeners for both mouse and touch events
wire.addEventListener('mousedown', handleMouseDown);
wire.addEventListener('touchstart', handleMouseDown);
