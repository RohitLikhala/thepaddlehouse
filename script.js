// Simple contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message sent successfully!');
      this.reset();
    });
  }
});
