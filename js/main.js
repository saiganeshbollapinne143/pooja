// ===== Config: replace with your WhatsApp number (country code, no +) =====
const WHATSAPP_NUMBER = "919876543210";

const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

// Sticky nav style
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Product order buttons -> WhatsApp
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.dataset.product;
    const text = encodeURIComponent(`Namaste! I would like to order "${product}". Please share price & delivery details.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  });
});

// Enquiry form -> WhatsApp
document.getElementById("enquiryForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  const text = encodeURIComponent(
`Namaste! New enquiry from the website:
Name: ${f.name.value}
Phone: ${f.phone.value}
Interest: ${f.interest.value}
Message: ${f.message.value || "-"}`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
