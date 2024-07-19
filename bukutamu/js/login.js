$(document).ready(function() {
      // Redirect ke dashboard jika sudah login
      if (localStorage.getItem("isLoggedIn") === "true") {
        window.location.href = "index.html"; // Ubah ke URL dashboard Anda
      }

      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwQyNMF_OGuM5a0jrmIPT-J9fiREVPK_UhIUM86ZIIPCfU07xB4xAnw-mG9xWm3lYm_gQ/exec'; // Ganti dengan URL Web App Anda
      
      const btnKirim = document.querySelector(".btn-kirim");
      const btnLoading = document.querySelector(".btn-loading");

      document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Hindari pengiriman form otomatis
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.remove("d-none");
        btnKirim.classList.add("d-none");

        fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // gunakan JSON
          },
          body: JSON.stringify({ email, password }) // Mengirim data POST
        })
        .then(response => response.json())
        .then(data => {
          if (data.message === "success") {
            document.getElementById("message").textContent = "Login successful!";
            document.getElementById("message").classList.add("text-success");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", email);
            window.location.href = "index.html"; // Alihkan ke dashboard
          } else {
            document.getElementById("message").textContent = "Email atau kata sandi yang kamu masukan mungkin ada yang salah, coba lagi.";
            document.getElementById("message").classList.add("text-danger");
          }
          
          // sembunyikan tombol loading, tampilkan tombol kirim
          btnLoading.classList.add("d-none");
          btnKirim.classList.remove("d-none");
        })
        .catch(error => {
          console.error("Error:", error);
          document.getElementById("message").textContent = "Ada kesalahan system coba lagi";
          document.getElementById("message").classList.add("text-danger");
          
          // sembunyikan tombol loading, tampilkan tombol kirim
          btnLoading.classList.add("d-none");
          btnKirim.classList.remove("d-none");
        });
      });
    });
    
    $(".show-password").click(function() {
    $(this).hide();
    $(this).siblings(".hide-password").show();
    var input = $($(this).closest(".input-icon").find("input"));
    input.attr("type", "text");
    });
    
    $(".hide-password").click(function() {
    $(this).hide();
    $(this).siblings(".show-password").show();
    var input = $($(this).closest(".input-icon").find("input"));
    input.attr("type", "password");
    });