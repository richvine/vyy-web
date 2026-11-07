// VYY WEBSITE JAVASCRIPT

// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    menuButton.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";

});

// CLOSE MOBILE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");
        menuButton.textContent = "☰";

    });

});


// AUTOMATIC FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

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

    // Allow valid form submission to Netlify.
    // Netlify will process the message after deployment.

});


// SCROLL ANIMATIONS

const animatedElements = document.querySelectorAll(
    ".section-heading, .about-card, .service-card, .contact-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(function (element) {

        element.classList.add("animate-on-scroll");

        observer.observe(element);

    });

}

console.log("VYY website is running successfully!");