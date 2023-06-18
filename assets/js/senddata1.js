function sendWA() {
    
    //data premepuan
    let namaprempuan = document.getElementById('namaprempuan');
    let namapanggilanprempuan = document.getElementById('namapanggilanprempuan');
    let namabapakprempuan = document.getElementById('namabapakprempuan');
    let namaibuprempuan = document.getElementById('namaibuprempuan');
    let namaigprempuan = document.getElementById('namaigprempuan');
    
    //data pria
    let namapria = document.getElementById('namapria');
    let namapanggilanpria = document.getElementById('namapanggilanpria');
    let namabapakpria = document.getElementById('namabapakpria');
    let namaibupria = document.getElementById('namaibupria');
    let namaigpria = document.getElementById('namaigpria');
    
    //data acara1 akad
    let tanggalakad = document.getElementById('tanggalakad');
    let waktuakad = document.getElementById('waktuakad');
    
    //data acara2 respesi
    let tanggalresepsi = document.getElementById('tanggalresepsi');
    let wakturesepsi = document.getElementById('wakturesepsi');
    
    //data alamat
    let alamat = document.getElementById('alamat');
    let alamatmaps = document.getElementById('alamatmaps');

     //datatema
    let namatm = document.getElementById('namatm').innerHTML;
    let hargatm = document.getElementById('harga').innerHTML;
    let pktundangan = document.getElementById('pkt').innerHTML;

    //data dompet
    let dompetsatu = document.getElementById('dompetsatu');
    let dompetdua = document.getElementById('dompetdua');

    //data foto dan musik
    let linkfoto = document.getElementById('linkfoto');
    let linkmusik = document.getElementById('linkmusik');

    if (namaprempuan.trim() === '') {
    alert('Mohon isi pesan Anda.');
    return; // Menghentikan eksekusi fungsi jika pesan tidak diisi
    }
    
    
    //data text
    let mobileNumber = 6283891724984;
    let text = 'Hay Qobiltu, Saya Ingin Memesan Tema Undangan';

    let subnamatema = 'Nama Tema.';
    let namatema = namatm;
    
    let subhargatema = 'Harga Undangan.';
    let hargatema = hargatm;
    
    let subnamapaket = 'Paket.';
    let paketundangan = pktundangan;
    
    let textprempuan = 'Data Mempelai Prempuan.';
    let textpria = 'Data Mempelai Pria.';
    let textakad = 'Data Akad.';
    let textresepsi = 'Data Resepsi.';
    let textalamat = 'Data Alamat.';
    let textdompet = 'Data Dompet Digital';
    let textfotomusik = 'Data Foto Dan Request Musik';

    
    //Data Send ke wa
    
    let url = `https://wa.me/${mobileNumber}?text=` + text + '%0A%0A' + 
       subnamatema + '%0A' + 
       namatema + '%0A%0A' + 
       subhargatema + '%0A' + 
       hargatema + '%0A%0A' + 
       subnamapaket + '%0A' + 
       paketundangan + '%0A%0A' + 
       textprempuan + '%0A' + 
    
    //data prempuan
    
    '*Nama lengkap* : ' + namaprempuan.value + "%0a" + 
    "*Nama panggilan* : " + namapanggilanprempuan.value + "%0a" + 
    "*Nama bapak* : " + namabapakprempuan.value + "%0a" + 
    "*Nama ibu* : " + namaibuprempuan.value + "%0a" + 
    "*Nama Instagram prempuan* : " + namaigprempuan.value + "%0a%0a" + textpria + '%0A' +
    
    //data pria
   
    "*Nama lengkap* : " + namapria.value + "%0a" + 
    "*Nama panggilan* : " + namapanggilanpria.value + "%0a" + 
    "*Nama bapak* : " + namabapakpria.value + "%0a" + 
    "*Nama ibu* : " + namaibupria.value + "%0a" + 
    "*Nama Instagram pria* : " + namaigpria.value + "%0a%0a" + textakad + '%0A' +
    
    //data akad
    
    "*Tanggal akad* : " + tanggalakad.value + "%0a" + 
    "*Waktu akad* : " + waktuakad.value + "%0a%0a" + textresepsi + '%0A' +

    //data resepsi
    "*Tanggal resepsi* : " + tanggalresepsi.value + "%0a" + 
    "*Waktu resepsi* : " + wakturesepsi.value + "%0a%0a" + textalamat + '%0a' +
     
     //data alamat
    "*Alamat* : " + alamat.value + "%0a" + 
    "*Url alamat maps* : " + alamatmaps.value  + "%0a%0a" + textdompet + '%0a' +

     //data dompet
     "*Dompet satu* : " + dompetsatu.value + "%0a" + 
     "*Dompet dua* : " + dompetdua.value + "%0a%0a" + textfotomusik + '%0a' +
     
     //data foto dan musik
     "*Link cover foto* : " + linkfoto.value + "%0a" + 
     "*Link Musik* : " + linkmusik.value;
    
    
    
    
    
    
    window.open(url, '_blank').focus();
    }