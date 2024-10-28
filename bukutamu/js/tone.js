// JSON Array
const dataOne = [
  {
    "title": "Masuk ke menu sebar, dan klik tombol tambah tamu.",
    "image": "https://raw.githubusercontent.com/qobilcdn/resource/main/metatag-images/qobil_IMG_20241027_185215.jpg"
  },
  {
    "title": "Isi nama tamu atau nama teman terdekat kamu.",
    "image": "https://raw.githubusercontent.com/qobilcdn/resource/main/metatag-images/qobil_IMG_20241027_185343.jpg"
  },
  {
    "title": "Klik tombol simpan tamu, nama tamu berhasil dibuat.",
    "image": "https://raw.githubusercontent.com/qobilcdn/resource/main/metatag-images/qobil_IMG_20241027_185311.jpg"
  }
];

// Fungsi untuk menampilkan data ke dalam div tutorial
function faqtutorialOne() {
  const tutorialDiv = document.getElementById('faqOne');
  
  // Membersihkan isi sebelumnya jika ada
  tutorialDiv.innerHTML = '';

  // Menambahkan item dari JSON langsung ke innerHTML
  let content = '';
  dataOne.forEach(item => {
    content += `
      <div class="col-12 col-md-6 mb-4">
        <h4 class="title">${item.title}</h4>
        <img src="${item.image}" alt="${item.title}" class="img-fluid">
      </div>
    `;
  });

  // Menyisipkan HTML ke dalam elemen #tutorial
  tutorialDiv.innerHTML = content;
}

// Panggil fungsi untuk menampilkan data
faqtutorialOne();

// JSON Array
// JSON Array
const dataTwo = [
  {
    "title": "Masuk ke menu sebar, pastikan nama tamu kamu sudah ditambahkan.",
    "image": "https://raw.githubusercontent.com/qobilcdn/resource/main/metatag-images/qobil_IMG_20241027_185749.jpg"
  },
  {
    "title": "Klik Tombol Icon Pesawat dan Bagikan untuk mengirimkan undangan web digital ke tamu undangan yang sudah ditambahkan.",
    "image": "https://raw.githubusercontent.com/qobilcdn/resource/main/metatag-images/qobil_IMG_20241027_185203.jpg"
  },
  {
    "title": "Terakhir akan muncul dialog pop-up Pilih salah satu sosial media  yang akan digunakan untuk mengirimkan undangan. seperti whatsapp atau media sosial lain nya.",
    "image": ""
  }
];

// Fungsi untuk menampilkan data ke dalam div tutorial
function faqtutorialTwo() {
  const tutorialDiv = document.getElementById('faqTwo');
  
  // Membersihkan isi sebelumnya jika ada
  tutorialDiv.innerHTML = '';

  // Menambahkan item dari JSON langsung ke innerHTML
  let content = '';
  dataTwo.forEach(item => {
    content += `
      <div class="col-12 col-md-6 mb-4">
        <h4 class="title">${item.title}</h4>
        <img src="${item.image}" alt="${item.title}" class="img-fluid">
      </div>
    `;
  });

  // Menyisipkan HTML ke dalam elemen #tutorial
  tutorialDiv.innerHTML = content;
}

// Panggil fungsi untuk menampilkan data
faqtutorialTwo();

// JSON Array
const dataThree = [
  {
    "title": "Masuk ke menu sebar, klik tombol tambah tamu",
    "image": "https://raw.githubusercontent.com/qobilcdn/resource/main/metatag-images/qobil_IMG_20241027_185215.jpg"
  },
  {
    "title": "Pilih template pesan yang akan digunakan ke tamu",
    "image": "https://raw.githubusercontent.com/qobilcdn/resource/main/metatag-images/qobil_IMG_20241027_185424.jpg"
  }
];

// Fungsi untuk menampilkan data ke dalam div tutorial
function faqtutorialThree() {
  const tutorialDiv = document.getElementById('faqThree');
  
  // Membersihkan isi sebelumnya jika ada
  tutorialDiv.innerHTML = '';

  // Menambahkan item dari JSON langsung ke innerHTML
  let content = '';
  dataThree.forEach(item => {
    content += `
      <div class="col-12 col-md-6 mb-4">
        <h4 class="title">${item.title}</h4>
        <img src="${item.image}" alt="${item.title}" class="img-fluid">
      </div>
    `;
  });

  // Menyisipkan HTML ke dalam elemen #tutorial
  tutorialDiv.innerHTML = content;
}

// Panggil fungsi untuk menampilkan data
faqtutorialThree();