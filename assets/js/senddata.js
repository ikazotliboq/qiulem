function sendWA() {
    
    //data premepuan
    let namaprempuan = document.getElementById('namaprempuan').value;
    let namapanggilanprempuan = document.getElementById('namapanggilanprempuan').value;
    let namabapakprempuan = document.getElementById('namabapakprempuan').value;
    let namaibuprempuan = document.getElementById('namaibuprempuan').value;
    let namaigprempuan = document.getElementById('namaigprempuan').value;
    
    //data pria
    let namapria = document.getElementById('namapria').value;
    let namapanggilanpria = document.getElementById('namapanggilanpria').value;
    let namabapakpria = document.getElementById('namabapakpria').value;
    let namaibupria = document.getElementById('namaibupria').value;
    let namaigpria = document.getElementById('namaigpria').value;
    
    //data acara1 akad
    let tanggalakad = document.getElementById('tanggalakad').value;
    let waktuakad = document.getElementById('waktuakad').value;
    
    //data acara2 respesi
    let tanggalresepsi = document.getElementById('tanggalresepsi').value;
    let wakturesepsi = document.getElementById('wakturesepsi').value;
    
    //data alamat
    let alamat = document.getElementById('alamat').value;
    let alamatmaps = document.getElementById('alamatmaps').value;

     //datatema
    let namatm = document.getElementById('namatm').innerHTML;
    let hargatm = document.getElementById('harga').innerHTML;
    let pktundangan = document.getElementById('pkt').innerHTML;

    //data dompet
    let dompetsatu = document.getElementById('dompetsatu').value;
    let dompetdua = document.getElementById('dompetdua').value;

    //data foto dan musik
    let linkfoto = document.getElementById('linkfoto').value;
    let linkmusik = document.getElementById('linkmusik').value;


   // dialog

    if (namaprempuan.trim() === '') {
    alert('Mohon isikan nama lengkap mempelai prempuan');
    return;
    }
    
    if (namapanggilanprempuan.trim() === '') {
    alert('Mohon isikan nama panggilan mempelai prempuan.');
    return;
    }
    
    if (namabapakprempuan.trim() === '') {
    alert('Mohon isikan nama lengkap bapak mempelai prempuan.');
    return;
    }
    
    if (namaibuprempuan.trim() === '') {
    alert('Mohon isikan nama ibu lengkap mempelai prempuan.');
    return;
    }
    
    // data dialog pria
    
    if (namapria.trim() === '') {
    alert('Mohon isikan nama lengkap mempelai pria.');
    return;
    }
    
    if (namapanggilanpria.trim() === '') {
    alert('Mohon isikan nama panggilan mempelai pria.');
    return;
    }
    
    if (namabapakpria.trim() === '') {
    alert('Mohon isikan nama lengkap bapak mempelai pria');
    return;
    }
    
    if (namaibupria.trim() === '') {
    alert('Mohon isikan nama lengkap ibu mempelai pria');
    return;
    }
    
    
    // dialog acara 1
    
    
    if (tanggalakad.trim() === '') {
    alert('Mohon isikan tanggal akad pernikahan kamu.');
    return;
    }
    
    if (waktuakad.trim() === '') {
    alert('Mohon isikan waktu akad pernikahan kamu.');
    return;
    }
    

    //dialog acara 2
    
    
    if (tanggalresepsi.trim() === '') {
    alert('Mohon isikan tanggal resepsi pernikahan kamu.');
    return;
    }
    
    if (wakturesepsi.trim() === '') {
    alert('Mohon isikan waktu resepsi pernikahan kamu.');
    return;
    }
    
    
    //alamat dialog
    
    
    if (alamat.trim() === '') {
    alert('Mohon isikan lokasi pernikahan kamu.');
    return;
    }
    
    
    
    
    
    
    
    
    
    
    //data text
    let mobileNumber = 6283891724984;
    let text = 'Hay Qobilto, Saya Ingin Memesan Tema Undangan pernikahan ini';

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
    
    '*Nama lengkap* : ' + namaprempuan + "%0a" + 
    "*Nama panggilan* : " + namapanggilanprempuan + "%0a" + 
    "*Nama bapak* : " + namabapakprempuan + "%0a" + 
    "*Nama ibu* : " + namaibuprempuan + "%0a" + 
    "*Nama Instagram prempuan* : " + namaigprempuan + "%0a%0a" + textpria + '%0A' +
    
    //data pria
   
    "*Nama lengkap* : " + namapria + "%0a" + 
    "*Nama panggilan* : " + namapanggilanpria + "%0a" + 
    "*Nama bapak* : " + namabapakpria + "%0a" + 
    "*Nama ibu* : " + namaibupria + "%0a" + 
    "*Nama Instagram pria* : " + namaigpria + "%0a%0a" + textakad + '%0A' +
    
    //data akad
    
    "*Tanggal akad* : " + tanggalakad + "%0a" + 
    "*Waktu akad* : " + waktuakad + "%0a%0a" + textresepsi + '%0A' +

    //data resepsi
    "*Tanggal resepsi* : " + tanggalresepsi + "%0a" + 
    "*Waktu resepsi* : " + wakturesepsi + "%0a%0a" + textalamat + '%0a' +
     
     //data alamat
    "*Alamat* : " + alamat + "%0a" + 
    "*Url alamat maps* : " + alamatmaps  + "%0a%0a" + textdompet + '%0a' +

     //data dompet
     "*Dompet satu* : " + dompetsatu + "%0a" + 
     "*Dompet dua* : " + dompetdua + "%0a%0a" + textfotomusik + '%0a' +
     
     //data foto dan musik
     "*Link cover foto* : " + linkfoto + "%0a" + 
     "*Link Musik* : " + linkmusik;
    
    
    
    
    
    
    window.open(url, '_blank').focus();
    }