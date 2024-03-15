

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Unobserve the element after animation
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { once: true }); // Observe the element only once

const hidden_elements = document.querySelectorAll('.hidden');
hidden_elements.forEach((element) => observer.observe(element));