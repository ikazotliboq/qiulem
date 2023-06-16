
    // tampil data rsvp
    
    var url = "https://script.google.com/macros/s/AKfycbzVvnt05JyRc6JJ8a8M3NzPHq2BmPs3_82C4Gv1zwLrBdc7-S4RyupvgFaeIu0_Vfttxg/exec?action=read";
    var outputElement = document.getElementById("rsvp-list");
    var latestData = null;
    
    function fetchData() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
    if (JSON.stringify(data) !== JSON.stringify(latestData)) {
    latestData = data;
    var outputHTML = "";
    
    for (var i = data.records.length - 1; i >= 0; i--) {
    var record = data.records[i];
    
    outputHTML += "<div class='comment'><img src='https://i.ibb.co/m9yCZ6r/g2.jpg' class='profile-picture'><div class='comment-details'><div class='am'>";
    
    if (record.kehadiran === "Hadir") {
    outputHTML +=  "<h4 class='commenter-name fsub1'>" + record.nama + "<i style='color: #1A87A1; margin-left: 5px;'class='bi bi-check-circle-fill'></i></h4>";
    } else {
    outputHTML += "<p class='commenter-name fsub1'>" + record.nama + " <i style='color: red;' class='bi bi-x-circle-fill'></i></p>";
    }
    
    outputHTML += "<p class='psn fsub2'>" + record.pesan + "</p>";
    
    outputHTML += "</div></div></div>";
    
    }
    outputElement.innerHTML = outputHTML;
    }
    })
    .catch(error => {
    console.log("Error:", error);
    });
    }
    
    // Panggil fetchData() setiap 5 detik
    setInterval(fetchData, 500);
    
    
    // tambah data rsvp
    
    const script_url = "https://script.google.com/macros/s/AKfycbzVvnt05JyRc6JJ8a8M3NzPHq2BmPs3_82C4Gv1zwLrBdc7-S4RyupvgFaeIu0_Vfttxg/exec";
    
    const btnKirim = document.querySelector('.btn-kirim');
    
    const btnLoading = document.querySelector('.btn-loading');
    
    function ctrlq(response) {
    
    // Tindakan yang akan dilakukan setelah data dikirim
    console.log("Data berhasil dikirim");
    console.log(response);
    
    // Ambil nilai input nama
    const nama = document.getElementById("namatamuundangan").value;
    
    // Tampilkan Dialog
    
    Swal.fire({
    icon: 'success',
    title: `Terimakasih, ${nama}!`,
    text: 'Ucapan & Doa Kamu Berhasil Kami Terima',
    showConfirmButton: false,
    timer: 3100
    });
    
    
    // Reset formulir
    document.getElementById("myForm").reset();
    
    // Hilang tombol loading
    btnLoading.classList.toggle('d-none');
    
    // Tampil tombol kirim
    btnKirim.classList.toggle('d-none');
    
    
    }
    
    document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const tanggals = document.getElementById("tanggals").value;
    const nama = document.getElementById("namatamuundangan").value;
    const kehadiran = document.getElementById("hadirantamu").value;
    const pesan = document.getElementById("pesanucapan").value;
    
    const url = `${script_url}?callback=ctrlq&tanggal=${tanggals}&nama=${nama}&kehadiran=${kehadiran}&pesan=${pesan}&action=insert`;
    
    btnLoading.classList.toggle('d-none');
    
    btnKirim.classList.toggle('d-none');
    
    $.ajax({
    url: url,
    dataType: "jsonp",
    type: "GET",
    success: function(response) {
    console.log(response);
    
    // Tampilkan Dialog
    
    Swal.fire({
    icon: 'success',
    title: `Terimakasih, ${nama}!`,
    text: 'Ucapan & Doa Kamu Berhasil Kami Terima',
    showConfirmButton: false,
    timer: 3100
    });
    
    
    
    },
    error: function(error) {
    console.log(error);
    }
    });
    });
    
    
    
    //tanggal
    
    function startTime() {
    const d = new Date();
    let time = d.getTime();
    document.getElementById("tanggals").innerHTML = time;
    setTimeout(startTime, 1000);
    
    }