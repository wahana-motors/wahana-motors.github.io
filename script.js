// ==============================
// DAFTAR MOTOR
// ==============================
const motors = [
  {
    name: "BeAT",
    price: "Rp. 19.075.000",
    img: "https://drive.google.com/file/d/1bHIzqW_p8kalilEr_DKVn_tShRiGjlmj/view?usp=drive_link",
    category: "matic",
    new: true,
    link: "beat/"
  },
  {
    name: "BeAT Street",
    price: "Rp. 19.851.000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/produk-thumbnail-white-400x300pxl-1-24072025-010431.png",
    category: "matic",
    new: true,
    link: "beat-street/"
  },
  {
    name: "Genio",
    price: "Rp. 20.375.000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-genio-new-3-29102025-075221.png",
    category: "matic",
    new: true,
    link: "genio/"
  },
  {
    name: "Scoopy",
    price: "Rp. 23.250.000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/new-honda-scoopy-sideview-right-stylish-green-400x300px-upload-2-06112024-012304.png",
    category: "matic",
    new: false,
    link: "scoopy/"
  },
    {
    name: "Vario 125",
    price: "Rp. 24,260,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-vario-125-04062024-094941.png",
    category: "matic",
    new: false,
    link: "vario125/"
  },
    {
    name: "Vario 160",
    price: "Rp. 28,275,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-vario160-400x300-tr-10012024-040039.png",
    category: "matic",
    new: false,
    link: "vario160/"
  },
    {
    name: "Stylo 160",
    price: "Rp. 29,325,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-feature-blue-matte-400x300px-1-15082025-025256.png",
    category: "matic",
    new: true,
    link: "stylo160/"
  },
    {
    name: "PCX 160",
    price: "Rp. 33,550,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300px-red-metallic-06122024-030208.png",
    category: "matic",
    new: false,
    link: "pcx160/"
  },
    {
    name: "ADV160",
    price: "Rp. 36,600,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300px-1-08092025-030705.png",
    category: "matic",
    new: true,
    link: "adv160/"
  },
    {
    name: "Forza",
    price: "Rp. 94,046,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-forza-400x300rev-1-16072025-031300.png",
    category: "matic",
    new: true,
    link: "forza/"
  },

  {
    name: "CBR150X",
    price: "Rp. 35.020.000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/fa-ahm-sport-mid-thumbnail-550x413px-21112024-100503.png",
    category: "sport",
    new: true,
    link: "cbr150x/"
  },
    {
    name: "CB150 VERZA",
    price: "Rp. 24.210.000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/verza-product-thumbnail-400x300px-2-24042025-082912.png",
    category: "sport",
    new: true,
    link: "cb150-verza/"
  },
    {
    name: "SONIC 150R",
    price: "Rp. 28.790.000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/sonic-150r-550x413px-r1-22112024-041432.png",
    category: "sport",
    new: false,
    link: "sonic-150r/"
  },
    {
    name: "CBR 150R Streetfire",
    price: "Rp. 34,680,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/cb1504-550x413px-r1-22112024-041458.png",
    category: "sport",
    new: false,
    link: "cbr150r-streetfire/"
  },
    {
    name: "CRF150L",
    price: "Rp. 27,125,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/revproduct-thumbnail-crf150l-400x300px-28072025-020216.png",
    category: "sport",
    new: true,
    link: "crf150l/"
  },
    {
    name: "CBR250RR",
    price: "Rp. 66,985,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-177,f-auto/uploads/product/thumbnail/thumbnail-cbr-550x413px-r1-2611-26112024-080056.png",
    category: "Sport",
    new: false,
    link: "cbr250rr/"
  },
  {
    name: "ST125 Dax",
    price: "Rp. 83,139,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-177,f-auto/uploads/product/thumbnail/st125-dax-550x413px-21112024-101348.png",
    category: "sport",
    new: false,
    link: "st125-dax/"
  },
  {
    name: "Monkey",
    price: "Rp. 87,794,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-177,f-auto/uploads/product/thumbnail/thumbnail-monkey-400x300-tr-13022025-050041.png",
    category: "",
    new: true,
    link: "monkey/"
  },
  {
    name: "CRF250 RALLY",
    price: "Rp. 96,539,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-177,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png",
    category: "sport",
    new: true,
    link: "crf250-rally/"
  },
    {
    name: "CRF250L",
    price: "Rp. 86,717,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-177,f-auto/uploads/product/thumbnail/crf250l-web-banner-product-thumbnail-400x300px-16062025-091255.png",
    category: "sport",
    new: true,
    link: "crf250l/"
  },
    {
    name: "CBR150R",
    price: "Rp. 39,020,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-cbr150r-550x413px-tr-new-2-21112024-100742.png",
    category: "sport",
    new: false,
    link: "cbr150r/"
  },
  {
    name: "Supra X 125 FI",
    price: "Rp. 21,350,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
    category: "cub",
    new: false,
    link: "supra-x125fi/"
  },
  {
    name: "GTR 150",
    price: "Rp. 26,715,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
    category: "cub",
    new: false,
    link: "gtr150/"
  },
  {
    name: "CT125",
    price: "Rp. 82,539,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/ct125-400x300-3-14062023-040229.png",
    category: "cub",
    new: false,
    link: "ct125/"
  },
  {
    name: "Supercub C125",
    price: "Rp. 79,941,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/400x300-pxl-03052024-061642-1-10052024-062406.png",
    category: "cub",
    new: false,
    link: "supercub-c125/"
  },
  {
    name: "Revo",
    price: "Rp. 17,985,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
    category: "cub",
    new: false,
    link: "revo/"
  },
    {
    name: "ICON e",
    price: "Rp. 28,000,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/ahm-light-sideview-blue-4-08102024-032201-09102024-051105.png",
    category: "ev",
    new: false,
    link: "econe/"
  },
    {
    name: "EM1 e: & EM1 e: PLUS",
    price: "Rp. 40,000,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/em1-silver-samping-400x300-tr-21122023-045018.png",
    category: "ev",
    new: false,
    link: "emplus/"
  },
    {
    name: "CUV e: & CUV e: RoadSync Duo",
    price: "Rp. 54,450,000",
    img: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/a01-p01-2025-cuve-mat-pearl-crater-white-rh-side-std-1-08102024-044120-09102024-053635.png",
    category: "ev",
    new: false,
    link: "cuv-roadsync/"
  },
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

// ==========================
// SLIDER MANUAL (tanpa otomatis)
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-wrapper");
  const images = document.querySelectorAll(".slider-wrapper img");
  const dots = document.querySelectorAll(".slider-dots .dot");

  // Kalau gak ada slider di halaman, hentikan script
  if (!slider || images.length === 0) return;

  let index = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  // Geser manual pakai sentuhan (mobile)
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    if (!isDragging) return;
    const diff = startX - currentX;

    if (diff > 50 && index < images.length - 1) index++;
    else if (diff < -50 && index > 0) index--;

    updateSlider();
    isDragging = false;
  });

  // Geser manual pakai mouse (desktop)
  slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isDragging = true;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
  });

  slider.addEventListener("mouseup", () => {
    if (!isDragging) return;
    const diff = startX - currentX;

    if (diff > 50 && index < images.length - 1) index++;
    else if (diff < -50 && index > 0) index--;

    updateSlider();
    isDragging = false;
  });

  slider.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
    }
  });

  // Inisialisasi tampilan awal
  updateSlider();
});



document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".spesifikasi-tab");
  const contents = document.querySelectorAll(".spesifikasi-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
});
