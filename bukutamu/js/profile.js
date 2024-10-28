$(document).ready(function() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html"; // Alihkan ke login jika tidak login
    } else {
        var userEmail = localStorage.getItem("userEmail");

        // Tampilkan loading spinner dan sembunyikan tabel
        $('#loading').show();
        $('#userTable').hide();

        // Ambil data pengguna menggunakan AJAX

        $.ajax({
            url: `https://script.google.com/macros/s/AKfycbw5xnnuK7WTuoQOVbRJfW4pg3wutlNydPvUA8AE8z-RpVUcJv1OKPIcl_Ky9VRhzudl/exec?id=${userEmail}`,
            type: 'GET',
            success: function(response) {
                if (response.output) {
                    var userData = response.output[0];
                    
                    
                    // Ganti profil image di navbar
                    $('#profileform').attr('src', userData.foto).addClass("profile-card");
                    
                    
$('#nama').text(userData.namapasangan);

                    $('#profileCard').attr('src', userData.foto).addClass("profile-card");
                    $('#nama').text(userData.namapasangan);
                    
                    $('#namapas').text(userData.namapasangan);
                    $('#namainput').val(userData.namapasangan);
                    $('#emailinput').val(userData.email);
                    $('#linkwebsite').val(userData.linkwebsite);
                  $('#linksweb').text(userData.linkwebsite);
                  $('#namatemas').text(userData.namatema);
                  

var linkPaket = userData.linkpaket;
                    
                   // Mengambil data dari API
                   fetch(`${linkPaket}`)
                   .then(response => response.json())
                   .then(data => {
                   // Mengisi detail paket
                   document.getElementById('namapaket').textContent = data.namapaket;
                   document.getElementById('hargapaket').textContent = data.hargapaket;
                   document.getElementById('masaaktif').textContent = '' + data.masaaktif;
                   
                   const itempaket = document.getElementById('itempaket');
                   
                   // Buat string HTML untuk daftar item
                   let itemHtml = '';
                   data.itempaket.forEach(item => {
                   itemHtml += `
                   
                   <div class="image-with-text mt-5 subtitle">
                   <img src="images/check.png" alt="Icon"> <!-- Placeholder image -->
                   <span>${item.item}</span>
                   </div>
                  
                  `;
                   });
                   
                   // Sisipkan HTML ke dalam div
                   itempaket.insertAdjacentHTML('beforeend', itemHtml);
                   })
                   .catch(error => console.error('Error fetching data:', error));
 




                    var linkTamu = userData.linktamu;

    
            
                    //fetch(`${linkTamu}?action=read`, { method: 'GET' 
                    //})
                        //.then(response => response.json())
                        //.then(data => {
                            //if (data.records) {
                                //let totalGuests = data.records.length; // Hitung total tamu
                                //$('#guestCount').text(totalGuests + ' Orang'); // Tampilkan total tamu di Card 1
                            //}
                        //})
                        //.catch(error => {
                            //console.error("Error retrieving guest data:", error);
                    //});
             
                  
                   

                }
            },
            error: function(xhr, status, error) {
                console.error("Error retrieving user data:", error);
            }
        });
    }
});