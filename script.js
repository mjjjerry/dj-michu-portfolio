// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Auto-close menu after clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();


const phone = "254717436104"; 
const message = encodeURIComponent("Hi DJ Michu, I want to book you for an event.");
document.getElementById("whatsappLink").href = `https://wa.me/${phone}?text=${message}`;
