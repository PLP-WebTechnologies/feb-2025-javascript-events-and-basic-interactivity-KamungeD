// --- Event Handling ---
document.getElementById('colorBtn').addEventListener('click', function() {
  this.textContent = 'Clicked!';
  this.style.background = '#4caf50';
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => hoverBox.classList.add('active'));
hoverBox.addEventListener('mouseleave', () => hoverBox.classList.remove('active'));
hoverBox.addEventListener('focus', () => hoverBox.classList.add('active'));
hoverBox.addEventListener('blur', () => hoverBox.classList.remove('active'));

document.getElementById('keyInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') alert('You pressed Enter!');
});

document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert('Secret double-click action!');
});

// --- Interactive Elements: Tabs ---
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
    document.getElementById('tab-' + this.dataset.tab).style.display = 'block';
  });
});

// --- Interactive Elements: Gallery ---
const images = [
  'https://placekitten.com/200/200',
  'https://placekitten.com/201/200',
  'https://placekitten.com/200/201'
];
let imgIndex = 0;
const galleryImg = document.getElementById('galleryImg');
document.getElementById('prevImg').onclick = () => {
  imgIndex = (imgIndex - 1 + images.length) % images.length;
  galleryImg.src = images[imgIndex];
};
document.getElementById('nextImg').onclick = () => {
  imgIndex = (imgIndex + 1) % images.length;
  galleryImg.src = images[imgIndex];
};

// --- Form Validation ---
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const form = document.getElementById('signupForm');

function validateEmail() {
  if (!email.value) {
    emailError.textContent = 'Email is required.';
    return false;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
    emailError.textContent = 'Invalid email format.';
    return false;
  }
  emailError.textContent = '';
  return true;
}

function validatePassword() {
  if (!password.value) {
    passwordError.textContent = 'Password is required.';
    return false;
  }
  if (password.value.length < 8) {
    passwordError.textContent = 'Min 8 characters.';
    return false;
  }
  passwordError.textContent = '';
  return true;
}

email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);

form.addEventListener('submit', function(e) {
  let valid = validateEmail() & validatePassword();
  if (!valid) e.preventDefault();
});