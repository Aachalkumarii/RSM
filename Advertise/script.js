// ================= NAVBAR =================
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// ================= LANGUAGE SYSTEM =================
let isHindi = localStorage.getItem("lang") === "hindi";

// Apply saved language on load
window.onload = function () {
    if (isHindi) {
        document.getElementById("langSwitch").checked = true;
        applyHindi();
    } else {
        applyEnglish();
    }
};

function toggleLanguage() {
    isHindi = document.getElementById("langSwitch").checked;

    if (isHindi) {
        applyHindi();
        localStorage.setItem("lang", "hindi");
    } else {
        applyEnglish();
        localStorage.setItem("lang", "english");
    }
}

// ================= HINDI =================
function applyHindi() {
    document.getElementById("nav-home").innerText = "होम";
    document.getElementById("nav-services").innerText = "सेवाएं";
    document.getElementById("nav-contact").innerText = "संपर्क";

    document.getElementById("title").innerText = "ऋषु वीडियो मूवी और फोटोग्राफी";
    document.getElementById("tagline").innerText = "4K वीडियोग्राफी | शादी शूट | सिनेमैटिक वीडियो";
    document.getElementById("book-btn").innerText = "बुक करें";

    document.getElementById("services-title").innerText = "हमारी सेवाएं";

    document.getElementById("s1").innerText = "📹 प्री-वेडिंग शूट";
    document.getElementById("s2").innerText = "🎥 4K वीडियोग्राफी";
    document.getElementById("s3").innerText = "📷 फोटोग्राफी";
    document.getElementById("s4").innerText = "सिनेमैटिक रील शूट";
    document.getElementById("s5").innerText = "🎬 सिनेमैटिक वीडियो";
    document.getElementById("s6").innerText = "🖼️ फोटो एडिटिंग";
    document.getElementById("s7").innerText = "🎉 इवेंट कवरेज";

    document.getElementById("faq-title").innerText = "अक्सर पूछे जाने वाले प्रश्न";

    document.getElementById("q1").innerText = "शादी का पैकेज कितना है?";
    document.getElementById("a1").innerText = "हमारे पैकेज ₹10,000 से शुरू होते हैं।";

    document.getElementById("q2").innerText = "क्या आप प्री-वेडिंग शूट करते हैं?";
    document.getElementById("a2").innerText = "हाँ, हम सिनेमैटिक प्री-वेडिंग शूट करते हैं।";

    document.getElementById("q3").innerText = "डिलीवरी में कितना समय लगता है?";
    document.getElementById("a3").innerText = "आमतौर पर 7–15 दिन लगते हैं।";

    document.getElementById("q4").innerText = "क्या आप बाहर शहर जाते हैं?";
    document.getElementById("a4").innerText = "हाँ, यात्रा शुल्क लागू हो सकता है।";

    document.getElementById("contact-title").innerText = "संपर्क करें";
    document.getElementById("owner").innerText = "प्रो.: गौतम राज 'गोविंद'";
    document.getElementById("phone").innerText = "📞 7970951439 | 9877262835";
    document.getElementById("address").innerText = "📍 दुलार, सिंहेश्वर, मधेपुरा";

    document.getElementById("footer-text").innerText = "© 2026 ऋषु फोटोग्राफी";
}

// ================= ENGLISH =================
function applyEnglish() {
    document.getElementById("nav-home").innerText = "Home";
    document.getElementById("nav-services").innerText = "Services";
    document.getElementById("nav-contact").innerText = "Contact";

    document.getElementById("title").innerText = "Rishu Video Movie & Photography";
    document.getElementById("tagline").innerText = "4K Videography | Wedding Shoot | Cinematic Videos";
    document.getElementById("book-btn").innerText = "Book Now";

    document.getElementById("services-title").innerText = "Our Services";

    document.getElementById("s1").innerText = "📹 Pre-Wedding Shoot";
    document.getElementById("s2").innerText = "🎥 4K Videography";
    document.getElementById("s3").innerText = "📷 Photography";
    document.getElementById("s4").innerText = "Cinematic Reel Shoot";
    document.getElementById("s5").innerText = "🎬 Cinematic Video";
    document.getElementById("s6").innerText = "🖼️ Photo Editing";
    document.getElementById("s7").innerText = "🎉 Event Coverage";

    document.getElementById("faq-title").innerText = "Frequently Asked Questions";

    document.getElementById("q1").innerText = "What is your wedding package price?";
    document.getElementById("a1").innerText = "Our packages start from ₹10,000 depending on requirements.";

    document.getElementById("q2").innerText = "Do you provide pre-wedding shoot?";
    document.getElementById("a2").innerText = "Yes, we provide cinematic pre-wedding shoots.";

    document.getElementById("q3").innerText = "How long does delivery take?";
    document.getElementById("a3").innerText = "Usually 7–15 days after the event.";

    document.getElementById("q4").innerText = "Do you travel outside city?";
    document.getElementById("a4").innerText = "Yes, travel charges may apply.";

    document.getElementById("contact-title").innerText = "Contact Us";
    document.getElementById("owner").innerText = "Pro. : Gautam Raj 'Govind'";
    document.getElementById("phone").innerText = "📞 7970951439 | 9877262835";
    document.getElementById("address").innerText = "📍 Dulaar, Singheshwar, Madhepura";

    document.getElementById("footer-text").innerText = "© 2026 Rishu Photography";
}

// ================= ALERT BUTTON =================
function showAlert() {
    if (isHindi) {
        alert("आप व्हाट्सएप या कॉल के माध्यम से संपर्क कर सकते हैं: 9877262835");
    } else {
        alert("You can contact via WhatsApp or call on 9877262835");
    }
}

// ================= IMAGE SLIDER =================
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

// ================= SWIPE =================
let startX = 0;
let endX = 0;

const slider = document.querySelector(".hero");

slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (startX - endX > 50) nextSlide();
    else if (endX - startX > 50) prevSlide();
}

// ================= FADE-IN =================
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

faders.forEach(el => observer.observe(el));

// ================= FAQ =================
const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});