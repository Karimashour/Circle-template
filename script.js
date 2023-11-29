document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("active");
  });
  
  document.querySelectorAll(".animate-link").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-menu").classList.toggle("active");
    });
  });