function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
     
     // Perbaikan penggunaan removeItem
}

$(document).ready(function() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html"; // Alihkan ke login jika tidak login
    } else {
        var userEmail = localStorage.getItem("userEmail");

        // Tampilkan loading spinner dan sembunyikan tabel
        $('#loading').show();
        $('#userTable').hide();

        
        $.ajax({
            url: `https://script.google.com/macros/s/AKfycbw5xnnuK7WTuoQOVbRJfW4pg3wutlNydPvUA8AE8z-RpVUcJv1OKPIcl_Ky9VRhzudl/exec?id=${userEmail}`,
            type: 'GET',
            success: function(response) {
                if (response.output) {
                    var userData = response.output[0];
                    localStorage.setItem("userFoto", userData.foto); // Simpan URL foto ke localStorage

localStorage.setItem("guestLink", userData.linkrsvp); // Simpan URL tamu ke localStorage

localStorage.setItem("linkWebsite", userData.linkwebsite); // Simpan URL website ke localStorage

localStorage.setItem("linkBukutamu", userData.linkbukutamu); // Simpan URL website ke localStorage
                    
                    $('#namapas').text(userData.namapasangan);
                    
                    // Ganti profil image di navbar
                    $('#profileImage').attr('src', userData.foto).addClass("profile-image");

$('#nama').text(userData.namapasangan);
                    
                    var urlWeb = 'https://' + userData.linkwebsite;
                    
                    
                    $('#linkKamu').attr('href', urlWeb).addClass("linkButtonweb");
              

                    // Dapatkan tanggal masa aktif dalam format Indonesia
                    var masaAktif = new Date(userData.masaaktif * 1000);
                    var masaAktifString = masaAktif.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
                    
                    // Tampilkan tanggal masa aktif di Card 2
                    $('#masaAktif').text(masaAktifString);

                    // Tambahkan countdown ke Card 3
                    var countdownElement = document.getElementById('countdown');

                    // Fungsi untuk menghitung mundur
                    function updateCountdown() {
                        var now = new Date().getTime();
                        var timeLeft = masaAktif.getTime() - now;

                        if (timeLeft > 0) {
                            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                            countdownElement.textContent = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
                        } else {
                            countdownElement.textContent = "Waktu telah habis";
                            $('#masaAktifHabisModal').modal('show'); // Tampilkan modal dialog
                            clearInterval(countdownInterval); // Hentikan interval
                        }
                    }

                    // Set interval untuk update setiap detik
                    var countdownInterval = setInterval(updateCountdown, 1000);




                    var linkTamu = userData.linkrsvp;
               
                   fetch(`${linkTamu}?action=read`)
                   .then(response => response.json())
                   .then(data => {
                   let records = data.records;
                   
                   if (Array.isArray(records)) {
                   // Hitung jumlah kehadiran
                   let hadir = records.filter(record => record.kehadiran === 'Hadir').length;
                   let berhalangan = records.filter(record => record.kehadiran === 'Berhalangan').length;
                   let tidakMenjawab = records.filter(record => record.kehadiran === 'Konfirmasi kehadiran').length;
                   
                   // Isi teks card dengan jumlah yang dihitung
                   document.getElementById('hadir-count').innerText = `${hadir} Orang`;
                   document.getElementById('berhalangan-count').innerText = `${berhalangan} Orang`;
                   document.getElementById('tidak-menjawab-count').innerText = `${tidakMenjawab} Orang`;
                   } else {
                   console.error("Data kehadiran tidak dalam format array.");
                   }
                   })
                   .catch(error => {
                   console.error('Error fetching data:', error);
                   });
                   
                  
                    //total ucapan
                     
                    fetch(`${linkTamu}?action=read`)
                    .then(response => response.json())
                    .then(data => {
                    const totalUcapan = data.records.length;
                    document.getElementById('total-ucapan').innerText = `${totalUcapan} Tamu`;
                  
                    })
                    .catch(error => {
                    console.error('Error fetching data:', error);
                    totalUcapanElement.textContent = "Error fetching data";
                    });
                    
                   
                   
                  // card progress visitor
                  
                  var linkVisitor = userData.linkvisitor;
                  
                   fetch(`${linkVisitor}?action=getVisitors`)
                   .then(function(response) {
                   if (!response.ok) {
                   throw new Error('Network response was not ok');
                   }
                   return response.json();
                   })
                   .then(function(data) {
                   if (data && data.length > 0) {
                   const maxVisitors = 500; // Misalnya, kita asumsikan 100 sebagai nilai maksimal untuk progress bar
                   const visitorCount = data.length;
                   const progressPercentage = (visitorCount / maxVisitors) * 500;
                   
                   // Update progress bar
                   const progressBar = document.getElementById('progress-bar');
                   progressBar.style.width = `${progressPercentage}%`;
                  
                   progressBar.setAttribute('aria-valuenow', progressPercentage);
                   
                   // Update guest count in title
                   const guestCountElement = document.getElementById('visitorProgress');
                   guestCountElement.textContent = visitorCount;
                   } else {
                   console.error('Data tidak ditemukan');
                   }
                   })
                   .catch(function(error) {
                   console.error('Gagal mengambil data:', error);
                   });
                   
                   
                   // card progress bukutamu dibuat
                   
                   var linkBukutamu = userData.linkbukutamu;
                   
                   
                   fetch(`${linkBukutamu}`)
                   .then(function(response) {
                   if (!response.ok) {
                   throw new Error('Network response was not ok');
                   }
                   return response.json();
                   })
                   .then(function(data) {
                   if (data && data.length > 0) {
                   const maxVisitors = 500; // Misalnya, kita asumsikan 100 sebagai nilai maksimal untuk progress bar
                   const visitorCount = data.length;
                   const progressPercentage = (visitorCount / maxVisitors) * 500;
                   
                   // Update progress bar
                   const progressBar = document.getElementById('progress-bar-bukutamu');
                   progressBar.style.width = `${progressPercentage}%`;
                   
                   progressBar.setAttribute('aria-valuenow', progressPercentage);
                   
                   // Update guest count in title
                   const guestCountElement = document.getElementById('total-tamu-dibuat');
                   guestCountElement.textContent = visitorCount;
                   } else {
                   console.error('Data tidak ditemukan');
                   }
                   })
                   .catch(function(error) {
                   console.error('Gagal mengambil data:', error);
                   });
                   
                   
                   

                }
            },
            error: function(xhr, status, error) {
                console.error("Error retrieving user data:", error);
            }
        });
    }
});