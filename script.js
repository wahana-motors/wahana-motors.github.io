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

// === SLIDER FOTO (perbaikan biar 1 dot = 1 gambar) ===
const slider = document.querySelector('.image-slider');
if (slider) {
  const wrapper = slider.querySelector('.slider-wrapper');
  const dots = slider.querySelectorAll('.dot');
  const slides = slider.querySelectorAll('.slider-wrapper img');
  let index = 0;
  let startX = 0;
  let isDragging = false;
  let currentTranslate = 0;

  function updateSlider() {
    const offset = -index * 100; // 1 dot = 1 gambar
    wrapper.style.transform = `translateX(${offset}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  // Geser manual lewat swipe/touch
  wrapper.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  wrapper.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const moveX = e.touches[0].clientX - startX;
    const percentage = moveX / slider.clientWidth * 100;
    wrapper.style.transform = `translateX(${currentTranslate + percentage}%)`;
  });

  wrapper.addEventListener('touchend', e => {
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 50 && index > 0) index--; // Geser kiri
    if (diff < -50 && index < slides.length - 1) index++; // Geser kanan

    updateSlider();
    currentTranslate = -index * 100;
  });

  // Inisialisasi awal
  updateSlider();
}
