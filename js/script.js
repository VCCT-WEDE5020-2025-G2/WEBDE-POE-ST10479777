const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
// Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click()); 
// Leaflet Map
var map = L.map('map').setView([-33.918861, 18.423300], 13); // Cape Town coordinates

// map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// marker for the coffee shop
L.marker([-33.918861, 18.423300]).addTo(map)
    .bindPopup("<b>G&B Coffee</b><br>76 Bree Street, Cape Town")
    .openPopup();

    // Live Search Functionality
document.getElementById('menuSearch').addEventListener('keyup', function () {
  let input = this.value.toLowerCase();
  let items = document.querySelectorAll('.menu-item');

  items.forEach(function (item) {
    let name = item.querySelector('.name').textContent.toLowerCase();
    let description = item.querySelector('.text').textContent.toLowerCase();

    if (name.includes(input) || description.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// Gallery Lightbox with Navigation
const images = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'block';
  });
});

// Show image in lightbox
function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// Next image
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

// Previous image
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// ENQUIRY FORM VALIDATION AND RESPONSE
document.addEventListener("DOMContentLoaded", function () {
  const enquiryForm = document.getElementById("enquiryForm");
  const responseMessage = document.getElementById("responseMessage");

  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("enquiryName").value.trim();
    const email = document.getElementById("enquiryEmail").value.trim();
    const inquiryType = document.getElementById("inquiryType").value;
    const message = document.getElementById("enquiryMessage").value.trim();

    if (name === "" || email === "" || inquiryType === "" || message === "") {
      responseMessage.textContent = "Please fill in all fields before submitting.";
      responseMessage.style.color = "red";
      return;
    }

    const validDomains = ["gmail.com", "icloud.com", "yahoo.com", "outlook.com"];
    const emailDomain = email.split("@")[1];
    if (!validDomains.includes(emailDomain)) {
      responseMessage.textContent = "Please use a valid email address (e.g. Gmail, iCloud, Outlook).";
      responseMessage.style.color = "red";
      return;
    }

    let reply = "";
    if (inquiryType === "product") {
      reply = `Thank you, ${name}! Our Product specialist will reach out to you shortly regarding your inquiry.`;
    } else if (inquiryType === "volunteer") {
      reply = `Thanks, ${name}! We’re excited about your interest in volunteering. Volunteer days are every Saturday from 9 AM to 2 PM.`;
    } else if (inquiryType === "sponsor") {
      reply = `Thank you, ${name}! We appreciate your interest in sponsoring our café. Our manager will reach out to you soon.`;
    }

    responseMessage.textContent = reply;
    responseMessage.style.color = "green";
    enquiryForm.reset();
  });
});


document.addEventListener('DOMContentLoaded', function () {
            // Load saved form data from localStorage if available
            const form = document.getElementById('contact-form');
            const savedData = JSON.parse(localStorage.getItem('contactFormData'));

            if (savedData) {
                document.getElementById('name').value = savedData.name || '';
                document.getElementById('email').value = savedData.email || '';
                document.getElementById('message').value = savedData.message || '';
            }

            form.addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent the default form submission

                // Save form data to localStorage
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value,
                };
                localStorage.setItem('contactFormData', JSON.stringify(formData));

                // Clear form fields and display a confirmation message
                form.reset();
                alert('Your message has been sent!');

                // Clear saved data from localStorage
                localStorage.removeItem('contactFormData');
            });
        });

         
