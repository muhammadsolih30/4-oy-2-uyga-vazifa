// 1. Smooth scroll — menyudagi linklar bosilganda
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// 2. Kontakt formani yuborishni ko‘rsatish (real server yo‘q holatda)
document
  .querySelector(".contact-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("So‘rovingiz yuborildi! Tez orada siz bilan bog‘lanamiz.");
    this.reset();
  });
