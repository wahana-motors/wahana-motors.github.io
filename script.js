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

// === SLIDER FOTO MANUAL TANPA AUTO (FIX FINAL) ===
document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slider-wrapper img");
  const dots = document.querySelectorAll(".slider-dots .dot");

  if (!sliderWrapper || slides.length === 0) return; // kalau nggak ada slider, skip

  let currentIndex = 0;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;

  // Gunakan lebar gambar pertama agar stabil
  function getSlideWidth() {
    return slides[0].clientWidth;
  }

  function setSliderPosition() {
    sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
  }

  function updateActiveDot() {
    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
  }

  // === Mulai sentuh ===
  sliderWrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    sliderWrapper.style.transition = "none";
  });

  // === Saat digeser ===
  sliderWrapper.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    currentTranslate = prevTranslate + diff;
    setSliderPosition();
    e.preventDefault();
  });

  // === Saat selesai geser ===
  sliderWrapper.addEventListener("touchend", () => {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    const slideWidth = getSlideWidth();

    if (movedBy < -50 && currentIndex < slides.length - 1) {
      currentIndex += 1;
    } else if (movedBy > 50 && currentIndex > 0) {
      currentIndex -= 1;
    }

    currentTranslate = -currentIndex * slideWidth;
    prevTranslate = currentTranslate;
    sliderWrapper.style.transition = "transform 0.4s ease";
    setSliderPosition();
    updateActiveDot();
  });

  // === Saat resize layar ===
  window.addEventListener("resize", () => {
    currentTranslate = -currentIndex * getSlideWidth();
    prevTranslate = currentTranslate;
    setSliderPosition();
  });

  // Inisialisasi pertama
  updateActiveDot();
  setSliderPosition();
});
