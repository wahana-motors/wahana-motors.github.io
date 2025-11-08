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

function initImageSlider() {
  const sliders = document.querySelectorAll(".image-slider");
  if (!sliders.length) return;

  sliders.forEach(slider => {
    const wrapper = slider.querySelector(".slider-wrapper");
    const slides = Array.from(wrapper.querySelectorAll("img"));
    const dotsContainer = slider.querySelector(".slider-dots");
    dotsContainer.innerHTML = slides.map(() => `<span class="dot"></span>`).join("");
    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));
    let index = 0;

    // styling dasar
    wrapper.style.display = "flex";
    wrapper.style.transition = "transform 0.3s ease";
    slides.forEach(img => {
      img.style.width = "100%";
      img.style.flexShrink = "0";
    });

    // update tampilan slide & dot aktif
    function showSlide(i) {
      index = Math.max(0, Math.min(i, slides.length - 1));
      wrapper.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle("active", di === index));
    }

    // fungsi swipe (touch)
    let startX = 0, isDragging = false;
    slider.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
      isDragging = true;
      wrapper.style.transition = "none";
    }, { passive: true });

    slider.addEventListener("touchmove", e => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      wrapper.style.transform = `translateX(${diff - index * slider.clientWidth}px)`;
    }, { passive: true });

    slider.addEventListener("touchend", e => {
      if (!isDragging) return;
      isDragging = false;
      wrapper.style.transition = "transform 0.3s ease";
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      if (diff > 50 && index > 0) index--;
      else if (diff < -50 && index < slides.length - 1) index++;
      showSlide(index);
    });

    showSlide(0);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initImageSlider, 100);
});
