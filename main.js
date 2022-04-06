// Faq Section Effect
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

// GSAP Animation For Bottom Cards
var bottomCard = gsap.timeline({
    scrollTrigger: {
        trigger: '.events-area',
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
        markers: false,
    },
});

bottomCard.from('.single-event', {
    duration: 0.5,
    autoAlpha: 0,
    y: '10%',
    stagger: 0.15,
});

// Toggle Mobile Nav
const mobileNav = document.querySelector('.navbar');
const toggleChange = document.querySelector('.navbar-toggler');

toggleChange.addEventListener('click', () => {
    toggleChange.classList.toggle('change');
    mobileNav.classList.toggle('mobile-nav');
});

// Event Swiper Slider Options
const swiperBanner = new Swiper('.banner-swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 25,
});

// Event Swiper Slider Options
const swiperEvent = new Swiper('.events-swiper', {
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 700,
    spaceBetween: 25,
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    },
});

// Picks Swiper Slider Options
const swiper3 = new Swiper('.picks-swiper', {
    slidesPerView: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 700,
    spaceBetween: 30,
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    },
});

// Product Swiper Slider Options
const swiper2 = new Swiper('.product-swiper', {
    slidesPerView: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 700,
    spaceBetween: 30,
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    },
});

// Banner Swiper Slider Options
// const swiper1 = new Swiper('.banner-swiper', {
//     slidesPerView: 1,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     speed: 700,
//     spaceBetween: 20,
// });

// Smooth Scroll Effect
const links = document.querySelectorAll('.showcase a');

for (const link of links) {
    link.addEventListener('click', clickHandler);
}

link.addEventListener('click', clickHandler);

function clickHandler(e) {
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: 'smooth',
    });
}
