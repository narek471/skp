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

if(faqGroups.length) {
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
                        const scrollPosition = panelTop - (window.innerHeight / 2) + 160;

                        window.scrollTo({
                            top: scrollPosition,
                            behavior: 'smooth'
                        });
                    }, 310);
                }
            });
        });
    });
}

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

// Dynamic Reviews Modal

const reviewsBlocks = document.querySelectorAll('[data-reviews-block]');

const reviewsModalAvatar = document.querySelector('[data-reviews-avatar-modal] img');
const reviewsModalName = document.querySelector('[data-reviews-name-modal]');
const reviewsModalRole = document.querySelector('[data-reviews-role-modal]');
const reviewsModalText = document.querySelector('[data-reviews-text-modal]');

if(reviewsBlocks.length) {
    reviewsBlocks.forEach(block => {
        const reviewsButton = block.querySelector('[data-modal-open="review-modal"]');

        if (!reviewsButton) return;

        reviewsButton.addEventListener('click', () => {
            const reviewsAvatar = block.querySelector('[data-reviews-avatar] img');
            const reviewsName = block.querySelector('[data-reviews-name]');
            const reviewsRole = block.querySelector('[data-reviews-role]');
            const reviewsText = block.querySelector('[data-reviews-text]');


            if (reviewsAvatar && reviewsModalAvatar) {
                reviewsModalAvatar.src = reviewsAvatar.src;
                reviewsModalAvatar.alt = reviewsAvatar.alt;
            }

            if (reviewsName && reviewsModalName) {
                reviewsModalName.textContent = reviewsName.textContent.trim();
            }

            if (reviewsRole && reviewsModalRole) {
                reviewsModalRole.textContent = reviewsRole.textContent.trim();
            }

            if (reviewsText && reviewsModalText) {
                reviewsModalText.textContent = reviewsText.textContent.trim();
            }
        });
    });
}

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

const swiper1 = new Swiper('.passes-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.passes-slider__next',
        prevEl: '.passes-slider__prev',
    },
    pagination: {
        el: '.passes-pagination',
        clickable: true,
    },
});

const swiper2 = new Swiper('.universities-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    spaceBetween: 20,

    navigation: {
        nextEl: '.universities-controls__next',
        prevEl: '.universities-controls__prev',
    },
    pagination: {
        el: '.universities-controls__pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

const swiper3 = new Swiper('.gallery-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    breakpoints: {
        320: {
            spaceBetween: 15,
        },
        1024: {
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: '.gallery-slider__next',
        prevEl: '.gallery-slider__prev',
    },
    pagination: {
        el: '.gallery-pagination',
        clickable: true,
    },
});

const swiper4 = new Swiper('.reviews-slider', {
    slidesPerGroup: 1,
    speed: 1500,
    spaceBetween: 20,

    navigation: {
        nextEl: '.reviews-controls__next',
        prevEl: '.reviews-controls__prev',
    },
    pagination: {
        el: '.reviews-controls__pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// Fancybox

Fancybox.bind('[data-fancybox]');
