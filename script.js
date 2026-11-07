// =====================================
// VYY WEBSITE JAVASCRIPT
// =====================================


// MOBILE NAVIGATION

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuButton.textContent = isOpen ? "✕" : "☰";

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });


    // CLOSE MENU WHEN LINK IS CLICKED

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });


    // RESET MENU ON DESKTOP

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navLinks.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute("aria-expanded", "false");

        }

    });

}


// =====================================
// AUTOMATIC FOOTER YEAR
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// =====================================
// CONTACT FORM VALIDATION
// =====================================

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        const name = contactForm.querySelector('[name="name"]').value.trim();

        const email = contactForm.querySelector('[name="email"]').value.trim();

        const message = contactForm.querySelector('[name="message"]').value.trim();


        if (!name || !email || !message) {

            event.preventDefault();

            formStatus.textContent = "Please complete all fields.";

            formStatus.style.color = "#ff5555";

            return;

        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            event.preventDefault();

            formStatus.textContent = "Please enter a valid email address.";

            formStatus.style.color = "#ff5555";

            return;

        }

    });

}


// =====================================
// SCROLL ANIMATIONS
// =====================================

const animatedElements = document.querySelectorAll(
    ".section-heading, .about-card, .service-card, .contact-card"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(function (element) {

        element.classList.add("animate-on-scroll");

        observer.observe(element);

    });

}


// =====================================
// WEBSITE STATUS
// =====================================

console.log("VYY website is running successfully!");
