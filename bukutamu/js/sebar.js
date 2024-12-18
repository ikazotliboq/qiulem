   let endpointURLs;
   
   // Ambil userEmail dari localStorage
   const userEmails = localStorage.getItem('userEmail');
   
   // Ambil linkpaket dari server menggunakan fetch
   fetch(`https://script.google.com/macros/s/AKfycbw5xnnuK7WTuoQOVbRJfW4pg3wutlNydPvUA8AE8z-RpVUcJv1OKPIcl_Ky9VRhzudl/exec?id=${userEmails}`)
   .then(response => response.json())
   .then(data => {
   if (data.output) {
   const userData = data.output[0];
   endpointURLs = userData.linkbukutamu; // Set endpointURL dari linkpaket
   loadGuests(); // Load tamu setelah mendapatkan endpointURL
   }
   })
   .catch(error => console.error("Error retrieving user data:", error));
  
   function showToast(message) {
   const toast = new bootstrap.Toast(document.getElementById('notificationToast'));
   document.getElementById('toastMessage').textContent = message;
   toast.show();
   }
   
   
   
   
   // Fungsi untuk menyalin pesan ke clipboard
   function copyPesan(message) {
   navigator.clipboard.writeText(message)
   .then(() => {
   alert("Pesan disalin ke clipboard");
   })
   .catch(err => {
   console.error("Gagal menyalin teks: ", err);
   });
   }
   
   // Fungsi untuk berbagi pesan
   function sharePesan(pesan) {
   if (navigator.share) {
   navigator.share({
   title: 'Bagikan Pesan ke tamu',
   text: pesan
   }).then(() => {
   console.log('Berbagi berhasil.');
   }).catch(err => {
   console.error('Gagal berbagi:', err);
   });
   } else {
   console.error('API Web Share tidak didukung di browser ini.');
   }
   }
        
        
        function loadGuests() {
        
        fetch(endpointURLs)
        .then(response => response.json())
        .then(data => {
        const guestCardList = document.getElementById('guestCardList');
        guestCardList.innerHTML = ''; 
        
        // Kosongkan daftar sebelum menampilkan data baru
        if (data.length === 0) {
        
        document.getElementById('loadingone').style.display = 'none';
        document.getElementById('daftartamu').style.display = 'none';
        document.getElementById('noDataMessage').style.display = 'block';
        document.getElementById('searchBarContainer').style.display = 'none'; // Sembunyikan search bar
        
        } else {
        
        data.reverse().forEach((guest, index) =>                  {  
        const card = document.createElement("div");
        card.className = "col-md-12";
        
        const cardInner = document.createElement("div");
        cardInner.className = "card rounded-4 mb-5";
        
        const cardBody = document.createElement("div");
        cardBody.className = "card-body p-7";
        
        const contentDiv = document.createElement("div");
        contentDiv.className = "d-flex align-items-center";
        
        const textDiv = document.createElement("div");
        
        const title = document.createElement("h5");
        title.className = "card-title title mb-3";
        title.textContent = guest.name;
        
        
        
        const text = document.createElement("p");
        text.className = "card-text subtitle text-truncated hideng-50";
        text.style.display = "-webkit-box";
        text.style.webkitLineClamp = "3";
        text.style.webkitBoxOrient = "vertical";
        text.style.overflow = "hidden";
        text.textContent = guest.message;
        
        textDiv.appendChild(title);
        textDiv.appendChild(text);
        
        
        
        const buttonDiv = document.createElement("div");
        buttonDiv.className = "ms-auto mt-3 float-end";
        
        // button edit
        
        const editButton = document.createElement("button");
        editButton.className = "btn btn-warning d-none"; // Diberikan sebagai placeholder
        editButton.textContent = "Edit";
        editButton.onclick = () => console.log(`Edit tamu ke-${index}`);
        
        // button delete
        
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn";
        deleteButton.innerHTML = '<img src="images/delete.png" height="40" width="40">'
        deleteButton.onclick= () => deleteGuest(guest.name);
        
        // button salin
        
        const copyButton = document.createElement("button");
        copyButton.className = "btn";
        copyButton.innerHTML = '<img src="images/copy.png" height="40" width="40">'
        copyButton.onclick = () => copyPesan(guest.message);
        
        // Membuat tombol Bagikan
        const shareButton = document.createElement("button");
        shareButton.className = "btn";
        shareButton.innerHTML = '<img src="images/share.png" height="40" width="40">'
        shareButton.onclick = () => sharePesan(guest.message);
        
        // appen
        
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);
        buttonDiv.appendChild(copyButton);
        
        buttonDiv.appendChild(shareButton);
        
        contentDiv.appendChild(textDiv);
        cardBody.appendChild(contentDiv);
        cardBody.appendChild(buttonDiv);
        
        cardInner.appendChild(cardBody);
        card.appendChild(cardInner);
        
        guestCardList.appendChild(card);
        });
        
        document.getElementById('loadingone').style.display = 'none';
        document.getElementById('noDataMessage').style.display = 'none';
        document.getElementById('daftartamu').style.display = 'flex';
        document.getElementById('searchBarContainer').style.display = 'block'; // Tampilkan search bar
        
        }
        
        })
        .catch(error => {
        console.error('Error:', error);
        
        });
        }
        
        
        
        
        function addGuest(event) {
        event.preventDefault(); // Mencegah form mengirimkan data
        
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Menyimpan Tamu...'; // Ubah tombol jadi loading
        submitBtn.style.backgroundColor = '#00ADEF'; 
        submitBtn.style.color = '#fff'; 
        
        const guestNameInput = document.getElementById('namaTamu');
        const guestMessageInput = document.getElementById('templatePesan');
        
        const guestName = guestNameInput.value;
        const guestMessage = guestMessageInput.value;
        
        if (guestName && guestMessage) {
        const payload = {
        action: 'create',
        name: guestName,
        message: guestMessage,
        };
        
        fetch(endpointURLs, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(payload),
        })
        .then(response => response.text())
        .then(data => {
        console.log('Response:', data);
        
        // Kembalikan tombol submit ke awal
        submitBtn.textContent = 'Simpan Tamu';
        
        // Reset input fields
        guestNameInput.value = ''; 
        //guestMessageInput.value = '';
        
        // Perbarui daftar tamu
        loadGuests();
        
        // Tampilkan notifikasi
        showToast('Tamu berhasil ditambahkan');
        
        })
        .catch(error => {
        console.error('Error:', error);
        submitBtn.textContent = 'Simpan Tamu';
        });
        }
        }
        
        
        
        
        
        function editGuest(index) {
        const guestCardList = document.getElementById('guestCardList');
        const card = guestCardList.children[index];
        const name = card.querySelector('.card-title').textContent;
        const message = card.querySelector('.card-text').textContent;
        
        const guestNameInput = document.getElementById('namaTamu');
        const guestMessageInput = document.getElementById('templatePesan');
        
        guestNameInput.value = name;
        guestMessageInput.value = message;
        
        document.getElementById('submitBtn').textContent = 'Update'; // Ubah teks tombol
        
        guestForm.onsubmit = (event) => {
        event.preventDefault();
        
        const payload = {
        action: 'update',
        rowIndex: index,
        name: guestNameInput.value,
        message: guestMessageInput.value,
        };
        
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Memperbarui...'; // Loading saat mengupdate
        
        fetch(endpointURLs, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(payload),
        })
        .then(response => response.text())
        .then(data => {
        console.log('Response:', data);
        
        // Kembalikan form dan tombol submit
        guestForm.onsubmit = addGuest;
        submitBtn.textContent = 'Tambah Tamu';
        
        guestNameInput.value = ''; 
        guestMessageInput.value = '';
        
        // Perbarui daftar tamu
        loadGuests();
        
        // Tampilkan notifikasi
        showToast('Data tamu berhasil diperbarui');
        })
        .catch(error => {
        console.error('Error:', error);
        submitBtn.textContent = 'Tambah Tamu';
        });
        };
        }
        
        
        
        
        function deleteGuest(name) {
        
        if (!confirm(`Apakah Anda ingin menghapus tamu dengan nama "${name}"?`)) {
        return; // Jika pengguna tidak mengkonfirmasi, keluar dari fungsi
        }
        
        const payload = {
        action: 'delete',
        name: name,
        };
        
        fetch(endpointURLs, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(payload),
        })
        .then(response => response.text())
        .then(data => {
        console.log('Response:', data);
        
        loadGuests(); // Perbarui daftar tamu
        showToast('Data tamu berhasil dihapus');
        })
        .catch(error => {
        console.error('Error:', error);
        });
        }
        
        function searchGuests() {
        const input = document.getElementById('searchBar').value.toLowerCase();
        const guestCards = document.querySelectorAll('#guestCardList .col-md-12');
        
        // Lakukan pencarian pada setiap card tamu
        guestCards.forEach(card => {
        const guestName = card.querySelector('.card-title').innerText.toLowerCase();
        const guestMessage = card.querySelector('.card-text').innerText.toLowerCase();
        
        if (guestName.includes(input) || guestMessage.includes(input)) {
        card.style.display = '';
        } else {
        card.style.display = 'none';
        }
        });
        }
        
        // Load daftar tamu saat halaman dimuat
        loadGuests();

    
    
    
    
    
    
    