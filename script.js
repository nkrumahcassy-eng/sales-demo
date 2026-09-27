// ==========================================
// GLADYS' CLOSET - WEBSITE INTERACTIONS
// ==========================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ==========================================
// WHATSAPP BUTTON
// ==========================================

// Replace this number with the business's actual WhatsApp number
const whatsappNumber = "233XXXXXXXXX";

const whatsappMessage =
    "Hello Gladys' Closet! I found your website and I'd like to know more about your collection.";

document.querySelectorAll('a[href="#"]').forEach(button => {

    if (button.textContent.toLowerCase().includes("whatsapp")) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappURL, "_blank");
        });
    }
});