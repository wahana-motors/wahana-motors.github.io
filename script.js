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

// ==============================
// SLIDER FOTO OTOMATIS (untuk halaman post seperti beat.html)
// ==============================
function initImageSlider() {
  const slider = document.querySelector(".image-slider");
  if (!slider) return;

  const wrapper = slider.querySelector(".slider-wrapper");
  const slides = wrapper.querySelectorAll("img");
  const dots = slider.querySelectorAll(".dot");

  let index = 0;
  let startX = 0;
  let isDragging = false;

  function showSlide(i) {
    wrapper.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((dot, d) => dot.classList.toggle("active", d === i));
  }

  // Klik titik (dot)
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });

  // Geser manual (touch swipe)
  wrapper.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  wrapper.addEventListener("touchmove", e => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    wrapper.style.transform = `translateX(calc(-${index * 100}% + ${diff}px))`;
  });

  wrapper.addEventListener("touchend", e => {
    if (!isDragging) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50 && index > 0) index--;           // geser kanan
    else if (diff < -50 && index < slides.length - 1) index++; // geser kiri
    showSlide(index);
    isDragging = false;
  });

  // Awal tampil
  showSlide(index);
}
