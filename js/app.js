// AOS

AOS.init({
    once: true
});

window.addEventListener('load', AOS.refresh);

// Mobile Menu

const burgerButton = document.querySelector('[data-burger-button]');
const navMenu = document.querySelector('[data-nav-menu]');

if (burgerButton && navMenu) {

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('active');
        navMenu.classList.toggle('active');
    })

}


// ToggleButtons

const toggleButtons = document.querySelectorAll('[data-toggle-button]');

if (toggleButtons.length) {
    toggleButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                btn.nextElementSibling.classList.toggle('active');
            })
        }
    })
}

// Faq

const faqGroups = document.querySelectorAll('[data-faq]');

faqGroups.forEach(group => {
    const faqButtons = group.querySelectorAll('[data-faq-toggle]');

    faqButtons.forEach(button => {
        const currentItem = button.parentElement;
        const currentPanel = currentItem.querySelector('[data-faq-panel]');

        if (button.classList.contains('active')) {
            currentPanel.style.maxHeight = currentPanel.scrollHeight + 'px';
        }

        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');

            faqButtons.forEach(groupButton => {
                const groupPanel = groupButton.parentElement.querySelector('[data-faq-panel]');

                groupButton.classList.remove('active');
                groupPanel.classList.remove('active');
                groupPanel.style.maxHeight = null;
            });

            if (!isActive) {
                button.classList.add('active');
                currentPanel.classList.add('active');
                currentPanel.style.maxHeight = currentPanel.scrollHeight + 'px';

                setTimeout(() => {
                    const panelTop = currentPanel.getBoundingClientRect().top + window.scrollY;
                    const scrollPosition = panelTop - (window.innerHeight / 2) + 180;

                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                }, 310);
            }
        });
    });
});

// Modal

const modals = document.querySelectorAll('[data-modal]')
const openModalButtons = document.querySelectorAll('[data-modal-open]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');


openModalButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (ev) => {
            ev.preventDefault();
            modals.forEach(modal => {
                if (modal) {
                    if (modal.getAttribute('data-modal') === btn.getAttribute('data-modal-open')) {
                        modal.classList.add('active');
                    }
                }
            })

            if (btn.getAttribute('data-modal-open') === 'review-modal') {

                const modal = document.querySelector('[data-modal="review-modal"]');

                const reviewBlock = btn.closest('.reviews-block');

                if (reviewBlock && modal) {
                    const authorName = reviewBlock.querySelector('.reviews-block__author')?.textContent.trim();
                    const authorRole = reviewBlock.querySelector('.reviews-block__role')?.textContent.trim();
                    const reviewText = reviewBlock.querySelector('.reviews-block__text')?.textContent.trim();
                    const authorAddress = reviewBlock.querySelector('.reviews-block__address')?.textContent.trim();

                    modal.querySelector('.review-block__company h3').textContent = authorName;
                    modal.querySelector('.review-block__company p').textContent = authorRole;
                    modal.querySelector('.review-block__info').textContent = reviewText;
                    modal.querySelector('.review-block__city').textContent = authorAddress;
                }

            }

        })
    }
})

closeModalButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (ev) => {
            ev.preventDefault();
            modals.forEach(modal => {
                if (modal) {
                    if (modal.getAttribute('data-modal') === btn.getAttribute('data-modal-close')) {
                        modal.classList.remove('active');
                    }
                }
            })
        })
    }
})

document.addEventListener('click', (ev) => {
    modals.forEach(modal => {
        if (modal) {
            if (ev.target === modal) {
                modal.classList.remove('active');
            }
        }
    })
})

// Input mask

const telInputs = document.querySelectorAll('[data-input-tel]');

telInputs.forEach(input => {
    if (input) {
        input.addEventListener("input", () => {
            let e = input.value.replace(/\D/g, "");
            e = "7" !== e.charAt(0) ? "7" + e : "" + e;
            let t = "";
            e.length > 0 && (t += "+" + e.substring(0, 1)), e.length > 1 && (t += " (" + e.substring(1, 4)), e.length > 4 && (t += ") " + e.substring(4, 7)), e.length > 7 && (t += "-" + e.substring(7, 9)), e.length > 9 && (t += "-" + e.substring(9, 11)), input.value = t
        });
    }
})

// Tab buttons

const tabButtons = document.querySelectorAll('[data-tab-button]');
const tabPanels = document.querySelectorAll('[data-tab-panel]')

if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const tabCategory = btn.getAttribute('data-tab-category');
                tabButtons.forEach(button => {
                    if (tabCategory === button.getAttribute('data-tab-category')) {
                        button.classList.remove('active');
                    }
                    btn.classList.add('active');
                })
                tabPanels.forEach(panel => {
                    if (tabCategory === panel.getAttribute('data-tab-category')) {
                        panel.classList.remove('active');
                        if (btn.getAttribute('data-tab-button') === panel.getAttribute('data-tab-panel')) {
                            panel.classList.add('active');
                        }
                    }
                })
            })
        }
    })
}

// Slider

let swiper1 = null;
let swiper2 = null;

function initStepsSlider() {

    const isMobile1 = window.innerWidth < 768;
    const swiperSlider1 = document.querySelector('.directions-content');

    if (isMobile1 && swiperSlider1 && swiper1 === null) {
        swiper1 = new Swiper('.directions-content', {
            spaceBetween: 8,
            slidesPerGroup: 1,
            speed: 1500,
            slidesPerView: 'auto',
        });
    } else if (!isMobile1 && swiperSlider1 && swiper1 !== null) {
        swiper1.destroy(true, true);
        swiper1 = null;
    }


    const isMobile2 = window.innerWidth < 480;
    const swiperSlider2 = document.querySelector('.steps-slider');

    if (isMobile2 && swiperSlider2 && swiper2 === null) {
        swiper2 = new Swiper(swiperSlider2, {
            spaceBetween: 16,
            slidesPerGroup: 1,
            speed: 1500,
            slidesPerView: 1,
            pagination: {
                clickable: true,
                el: '.steps-pagination',
            },
        });
    } else if (!isMobile2 && swiperSlider2 && swiper2 !== null) {
        swiper2.destroy(true, true);
        swiper2 = null;
    }

}

window.addEventListener('load', initStepsSlider);
window.addEventListener('resize', initStepsSlider);

const swiper3 = new Swiper('.clients-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    navigation: {
        nextEl: '.clients-button__next',
        prevEl: '.clients-button__prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 3.5,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 14,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 16,
        }
    },
});

const swiper4 = new Swiper('.reviews-slider', {
    spaceBetween: 16,
    slidesPerGroup: 1,
    speed: 1500,
    pagination: {
        clickable: true,
        el: '.reviews-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 'auto',
        },
        992: {
            slidesPerView: 3,
        }
    }
});

const swiper5 = new Swiper('.news-slider', {
    spaceBetween: 16,
    slidesPerGroup: 1,
    speed: 1500,
    breakpoints: {
        320: {
            slidesPerView: 'auto',
        },
        992: {
            slidesPerView: 4,
        }
    },
});

const swiper6 = new Swiper('.stages-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    breakpoints: {
        320: {
            spaceBetween: 10,
            slidesPerView: 'auto',
        },
        1170: {
            spaceBetween: 16,
            slidesPerView: 4,
        }
    },
});

const swiper7 = new Swiper('.process-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    slidesPerView: 'auto',
    spaceBetween: 16,
});

const swiper8 = new Swiper('.equipment-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: '.equipment-button__next',
        prevEl: '.equipment-button__prev',
    },
    pagination: {
        clickable: true,
        el: '.equipment-pagination',
    },
});

const swiper9 = new Swiper('.partners-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    navigation: {
        nextEl: '.partners-controls__next',
        prevEl: '.partners-controls__prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 32,
        }
    },
});

const swiper10 = new Swiper('.results-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    slidesPerView: 'auto',
    spaceBetween: 32,
    breakpoints: {
        320: {
            spaceBetween: 16,
        },
        992: {
            spaceBetween: 32,
        }
    },
});

const swiper11 = new Swiper('.cases-navigation-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.cases-controls__next',
        prevEl: '.cases-controls__prev',
    },
});

// Fancybox

Fancybox.bind('[data-fancybox]');
