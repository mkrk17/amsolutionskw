function userScroll() {
  const navbar = document.querySelector(".navbar");
  const toTopBtn = document.querySelector("#to-top");

  if (!navbar || !toTopBtn) {
    console.error("Navbar or toTopBtn not found in the DOM.");
    return;
  }

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky", "navbar-shrink");
      toTopBtn.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticky", "navbar-shrink");
      toTopBtn.classList.remove("show");
    }
  }

  // Call the function to handle initial scroll state
  handleScroll();

  // Add event listener for scroll events
  window.addEventListener("scroll", handleScroll);
}

// Ensure userScroll is accessible globally
window.userScroll = userScroll;

// Call the function to start listening for scroll events
document.addEventListener("DOMContentLoaded", userScroll);

// ... (rest of the code remains unchanged)

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function incrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

// Event Listeners

// Use Intersection Observer for counters
const counterObserver = new IntersectionObserver(incrementStats, {
  threshold: 0.8,
});
document
  .querySelectorAll(".counter")
  .forEach((counter) => counterObserver.observe(counter));

document.addEventListener("DOMContentLoaded", userScroll);
// document.addEventListener("DOMContentLoaded", incrementStats);
document.querySelector("#to-top").addEventListener("click", scrollToTop);
