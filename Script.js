// Language Selector (example functionality)
document.getElementById('language-selector').addEventListener('change', function () {
    const lang = this.value;
    alert(`Language changed to: ${lang.toUpperCase()}`);
});

// Simple form handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will respond shortly.');
    this.reset();
});
