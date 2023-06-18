

window.onload = function() {
  var urlParams = new URLSearchParams(window.location.search);
  var pesan = urlParams.get('order');
  
   
   // Membuat URL API dengan endpoint yang diperoleh
   var apiUrl = 'https://qobilto.tech/order/' + pesan + '.json';
   
   // Mengambil data JSON melalui API menggunakan fetch
   fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
   // Masukkan data JSON ke dalam elemen-elemen HTML
   document.getElementById("namatm").innerHTML = data.title;
   document.getElementById("thumb").src = data.thumb;
   //document.getElementById("harga1").innerHTML = data.harga1;
   //document.getElementById("harga2").innerHTML = data.harga2;
   })
   
   .catch(error => {
   
   });




  }





