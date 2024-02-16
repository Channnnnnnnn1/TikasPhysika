const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

const openDesc1 = document.getElementById('openDesc1');
const targetDesc1 = document.getElementById('targetDesc1');
const openDesc2 = document.getElementById('openDesc2');
const targetDesc2 = document.getElementById('targetDesc2');
const openDesc3 = document.getElementById('openDesc3');
const targetDesc3 = document.getElementById('targetDesc3');
const openDesc4 = document.getElementById('openDesc4');
const targetDesc4 = document.getElementById('targetDesc4');
const openDesc5 = document.getElementById('openDesc5');
const targetDesc5 = document.getElementById('targetDesc5');

openDesc1.addEventListener('mouseover', () => {
  targetDesc1.style.display = 'block';
});
openDesc1.addEventListener('mouseout', () => {
  setTimeout(() => {
    targetDesc1.style.display = 'none';
  }, 600); // Delay matches the transition duration
});
openDesc2.addEventListener('mouseover', () => {
  targetDesc2.style.display = 'block';
});
openDesc2.addEventListener('mouseout', () => {
  setTimeout(() => {
    targetDesc2.style.display = 'none';
  }, 600); // Delay matches the transition duration
});
openDesc3.addEventListener('mouseover', () => {
  targetDesc3.style.display = 'block';
});
openDesc3.addEventListener('mouseout', () => {
  setTimeout(() => {
    targetDesc3.style.display = 'none';
  }, 600); // Delay matches the transition duration
});
openDesc4.addEventListener('mouseover', () => {
  targetDesc4.style.display = 'block';
});
openDesc4.addEventListener('mouseout', () => {
  setTimeout(() => {
    targetDesc4.style.display = 'none';
  }, 600); // Delay matches the transition duration
});
openDesc5.addEventListener('mouseover', () => {
  targetDesc5.style.display = 'block';
});
openDesc5.addEventListener('mouseout', () => {
  setTimeout(() => {
    targetDesc5.style.display = 'none';
  }, 600); // Delay matches the transition duration
});


function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.classList.toggle("active"); // Toggle 'active' class to show/hide popup
}
