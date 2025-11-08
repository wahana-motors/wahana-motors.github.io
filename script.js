// ==============================
// DAFTAR MOTOR
// ==============================
const motors = [
  {
    name: "BeAT",
    price: "Rp. 18.980.000",
    img: "https://i.ibb.co.com/BHNB9ygJ/08-thumbnail-features-700x700-29102025-031948.png",
    category: "matic",
    new: true,
    link: "matic/beat.html"
  },
  {
    name: "BeAT Street",
    price: "Rp. 19.851.000",
    img: "https://i.ibb.co.com/BHNB9ygJ/08-thumbnail-features-700x700-29102025-031948.png",
    category: "matic",
    new: true,
    link: "matic/beat-street.html"
  },
  {
    name: "Genio",
    price: "Rp. 20.075.000",
    img: "https://i.ibb.co.com/BHNB9ygJ/08-thumbnail-features-700x700-29102025-031948.png",
    category: "sport",
    new: true,
    link: "matic/genio.html"
  },
  {
    name: "Scoopy",
    price: "Rp. 22.876.000",
    img: "https://i.ibb.co.com/BHNB9ygJ/08-thumbnail-features-700x700-29102025-031948.png",
    category: "matic",
    new: false,
    link: "matic/scoopy.html"
  }
];

function renderMotors(category) {
  const list = document.getElementById("motorList");
  if (!list) return; // biar gak error di halaman posting

  list.innerHTML = "";
  motors
    .filter(m => m.category === category)
    .forEach(motor => {
      const card = document.createElement("div");
      card.className = "motor-card";
      card.innerHTML = `
        ${motor.new ? '<div class="new-label">New!</div>' : ""}
        <img src="${motor.img}" alt="${motor.name}">
        <div class="info">
          <h3>${motor.name}</h3>
          <p>Harga mulai</p>
          <p class="price">${motor.price}</p>
          <a class="btn" href="${motor.link}">Selengkapnya →</a>
        </div>
      `;
      list.appendChild(card);
    });
}

renderMotors("matic");

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderMotors(tab.dataset.category);
  });
});

// ==========================
// Fungsi include header/footer
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`Gagal memuat ${file}`);
        return res.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => console.error(err));
  });
});

// === SLIDER FOTO MANUAL (STABIL SEMUA PERANGKAT) ===
const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slider-wrapper img");
const dots = document.querySelectorAll(".slider-dots .dot");

let currentIndex = 0;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

function updateSliderPosition() {
  sliderWrapper.style.transition = "transform 0.4s ease";
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
}

// tangkap sentuhan mulai
sliderWrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  sliderWrapper.style.transition = "none";
});

// geser selama sentuhan
sliderWrapper.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diff = currentX - startX;
  const move = -currentIndex * window.innerWidth + diff;
  sliderWrapper.style.transform = `translateX(${move}px)`;
});

// lepaskan sentuhan
sliderWrapper.addEventListener("touchend", (e) => {
  if (!isDragging) return;
  isDragging = false;

  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff > 50 && currentIndex > 0) currentIndex--;
  if (diff < -50 && currentIndex < slides.length - 1) currentIndex++;

  updateSliderPosition();
});

// inisialisasi
updateSliderPosition();
