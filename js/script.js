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
const enquiryForm = document.getElementById("enquiryForm");
const responseMessage = document.getElementById("responseMessage");

enquiryForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from refreshing the page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const inquiryType = document.getElementById("inquiryType").value;
  const message = document.getElementById("message").value.trim();

  // basic validation
  if (name === "" || email === "" || inquiryType === "" || message === "") {
    responseMessage.textContent = "Please fill in all fields before submitting.";
    responseMessage.style.color = "red";
    return;
  }

  // email validation for Gmail, iCloud, etc.
  const validDomains = ["gmail.com", "icloud.com", "yahoo.com", "outlook.com"];
  const emailDomain = email.split("@")[1];
  if (!validDomains.includes(emailDomain)) {
    responseMessage.textContent = " Please use a valid email address (e.g. Gmail, iCloud, Outlook).";
    responseMessage.style.color = "red";
    return;
  }

  // response logic based on inquiry type
  let reply = "";

  if (inquiryType === "product") {
    reply = `Thank you, ${name}! Our premium coffee beans cost R120 per bag. We'll email you details soon.`;
  } else if (inquiryType === "volunteer") {
    reply = `Thanks, ${name}! We’re excited about your interest in volunteering. Volunteer days are every Saturday from 9 AM to 2 PM.`;
  } else if (inquiryType === "sponsor") {
    reply = `Thank you, ${name}! We appreciate your interest in sponsoring our café. Our manager will reach out to you soon.`;
  }

  // show the message on the page
  responseMessage.textContent = reply;
  responseMessage.style.color = "green";

  // optional: clear form after submission
  enquiryForm.reset();
});

         
