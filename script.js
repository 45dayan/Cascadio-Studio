window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".menu-overlay");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// Close when clicking outside
overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
});

// FORM HANDLING
const form = document.getElementById("appointment-form");
const statusDiv = document.getElementById("booking-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  statusDiv.innerHTML = "Processing your booking...";
  statusDiv.style.color = "black";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      statusDiv.innerHTML = "🎉 Appointment booked successfully!";
      statusDiv.style.color = "green";
      form.reset();
    } else {
      statusDiv.innerHTML = "❌ Something went wrong. Please try again.";
      statusDiv.style.color = "red";
    }

  } catch (error) {
    statusDiv.innerHTML = "⚠️ Connection error. Check internet.";
    statusDiv.style.color = "red";
  }
});