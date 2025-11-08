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

// --- SLIDER MANUAL (untuk halaman post seperti beat.html) ---
// 🔹 Geser manual (swipe) di slider
const sliderWrapper = document.querySelector('.slider-wrapper');
let isDown = false;
let startX;
let scrollLeft;

if (sliderWrapper) {
  sliderWrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    sliderWrapper.classList.add('active');
    startX = e.pageX - sliderWrapper.offsetLeft;
    scrollLeft = sliderWrapper.scrollLeft;
  });

  sliderWrapper.addEventListener('mouseleave', () => {
    isDown = false;
    sliderWrapper.classList.remove('active');
  });

  sliderWrapper.addEventListener('mouseup', () => {
    isDown = false;
    sliderWrapper.classList.remove('active');
  });

  sliderWrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderWrapper.offsetLeft;
    const walk = (x - startX) * 1.5; // kecepatan geser
    sliderWrapper.scrollLeft = scrollLeft - walk;
  });

  // 🔸 Support untuk HP (touch)
  let startTouchX = 0;
  sliderWrapper.addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].clientX;
  });

  sliderWrapper.addEventListener('touchmove', (e) => {
    const moveX = e.touches[0].clientX;
    const diff = startTouchX - moveX;

    if (Math.abs(diff) > 30) { // biar gak terlalu sensitif
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      startTouchX = moveX; // reset posisi biar bisa terus geser
    }
  });
}
