
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("appointmentModalOverlay");
    const closeBtn = document.getElementById("appointmentCloseBtn");
    const form = document.getElementById("appointmentForm");

    const navButton = document.querySelector(".cs-nav-button");
    if (navButton) {
        navButton.addEventListener("click", function (e) {
            e.preventDefault(); 
            overlay.style.display = "flex"; 
        });
    }

    
    const allLinks = document.querySelectorAll("a, button, .cs-button-solid, .cs-link");
    allLinks.forEach(element => {
        if (element.closest("#appointmentModalOverlay")) return;

        
        if (element.textContent.trim().toLowerCase().includes("book an appointment")) {
            element.addEventListener("click", function (e) {
                e.preventDefault();
                overlay.style.display = "flex";
            });
        }
    });

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your appointment request has been submitted.");
        overlay.style.display = "none";
        form.reset();
    });
});