document.addEventListener('DOMContentLoaded', function () {
  // FAQ Toggle
  document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      const isVisible = content.style.display === 'block';
      content.style.display = isVisible ? 'none' : 'block';
      item.querySelector('span').textContent = isVisible ? '+' : '-';
    });
  });

  // Floating Contact Button
  const floatingContact = document.querySelector('.floating-contact');
  if (floatingContact) {
    floatingContact.addEventListener('click', () => {
      alert('Contact For Help');
    });
  }

  // Testimonials Slider
  const testimonials = document.querySelectorAll('.testimonial-item');
  if (testimonials.length > 0) {
    let index = 0;

    function showNextTestimonial() {
      testimonials[index].style.display = 'none';
      index = (index + 1) % testimonials.length;
      testimonials[index].style.display = 'block';
    }

    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === 0 ? 'block' : 'none';
    });

    setInterval(showNextTestimonial, 5000); // Switch every 5 seconds
  }

  // Disable Right-Click
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('Right-click is disabled on this website.');
  });

  // Offer Popup
  const offerPopup = document.getElementById('offer-popup');
  if (offerPopup) {
    setTimeout(function () {
      offerPopup.style.display = 'block';
    }, 2000);
  }

  // Close Popup Functionality
  window.closePopup = function () {
    if (offerPopup) {
      offerPopup.style.display = 'none';
    }
  };

  // Services List Scroller
  const servicesList = document.querySelector('.services-list');
  if (servicesList) {
    const scrollInterval = 3000; // Time interval in milliseconds
    setInterval(function () {
      const firstItem = servicesList.querySelector('.service-item');
      if (firstItem) {
        const itemWidth =
          firstItem.offsetWidth + parseInt(getComputedStyle(firstItem).marginRight, 10);
        servicesList.scrollBy({ left: itemWidth, behavior: 'smooth' });

        if (servicesList.scrollLeft >= servicesList.scrollWidth - servicesList.offsetWidth) {
          servicesList.scrollLeft = 0; // Reset to start
        }
      }
    }, scrollInterval);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const postsContainer = document.querySelector('.posts');
  const posts = document.querySelectorAll('.post');
  const prevButton = document.querySelector('.arrow.left');
  const nextButton = document.querySelector('.arrow.right');

  let currentIndex = 0;
  const totalPosts = posts.length;

  // Function to update the visible post
  function updateCarousel() {
    postsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Event listener for the next button
  nextButton.addEventListener('click', () => {
    if (currentIndex < totalPosts - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Event listener for the previous button
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Initial setup
  updateCarousel();
});
