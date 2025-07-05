//Sell_Car.html

document.getElementById('sellCarForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic client-side validation
    const phone = document.getElementById('phone').value;
    const photos = document.getElementById('photos').files;

    if (!/^[0-9]{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    if (photos.length > 5) {
        alert('Please upload a maximum of 5 photos.');
        return;
    }

    for (let photo of photos) {
        if (photo.size > 10 * 1024 * 1024) {
            alert('Each photo must be less than 10MB.');
            return;
        }
    }

    alert('Form submitted successfully! We will contact you within 24 hours to schedule an inspection.');
});

// Smooth scroll to form
document.querySelector('.hero-section a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#sell-form').scrollIntoView({ behavior: 'smooth' });
});