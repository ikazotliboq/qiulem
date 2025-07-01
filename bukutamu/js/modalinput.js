    // modal input
    
    function setInitialContent() {
    const userWebsite = localStorage.getItem("linkWebsite"); 
    
    //$('#link').text(userWebsite);
    const defaultUrl = userWebsite + "?to=";
    const defaultTemplate = `
    Kepada Yth.
    Bapa/Ibu/Saudara/i
    *${namaTamu}*
    _di tempat_
    
    Assalamu'alaikum. Wr. Wb.
    
    Dengan Rahmat dan Ridho Allah SWT. Kami bermaksud memberikan kabar gembira, serta memohon do'a restu Bapak/Ibu/Saudara/i pada acara pernikahan kami, klik tautan berikut untuk menuju undangan pernikahan kami.
    
    Info lebih lengkap klik link di bawah ini 👇👇👇

    ${defaultUrl}
    
    Merupakan suatu kehormatan dan kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do’a restu pada acara Pernikahan kami. 
    Atas perhatiannya kami sampaikan terimakasih. 
    
    Mohon maaf perihal undangan hanya dibagikan melalui pesan ini dikarenakan keterbatasan jarak dan waktu.
    
    Wassalamu'alaikum. Wr. Wb.
    
    Kami yang berbahagia,
    *${updatedUserNama}*
    `;
    
    document.getElementById("templatePesan").value = defaultTemplate;
    document.getElementById("urlAcara").value = defaultUrl;
    }
    
    
    
    //ketika user mengisi nama tamu update
    
    function updateTemplate() {
    const userWebsite = localStorage.getItem("linkWebsite");
    const userNama = localStorage.getItem("userNama");

    const updatedUserNama = userNama ? userNama.replace(/\bdan\b|\bDan\b/g, '❤️') : userNama;
    const namaTamu = document.getElementById("namaTamu").value;
    const urlAcara = "https://" + userWebsite + "?to=" + encodeURIComponent(namaTamu);
    const templateOption = document.getElementById("pilihTemplate").value;
    let pilihtemplatepesan = "";
    
    // Berdasarkan pilihan template, atur nilai pilihtemplatepesan
    switch (templateOption) {
    case "1":
    pilihtemplatepesan = `
    Kepada Yth.
    Bapa/Ibu/Saudara/i
    *${namaTamu}*
    _di tempat_
    
    Assalamu'alaikum. Wr. Wb.
    
    Dengan Rahmat dan Ridho Allah SWT. Kami bermaksud memberikan kabar gembira, serta memohon do'a restu Bapak/Ibu/Saudara/i pada acara pernikahan kami, klik tautan berikut untuk menuju undangan pernikahan kami.

    Info lebih lengkap klik link di bawah ini 👇👇👇

    ${urlAcara}
    
    Merupakan suatu kehormatan dan kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do’a restu pada acara Pernikahan kami. 
    Atas perhatiannya kami sampaikan terimakasih. 
   
   Mohon maaf perihal undangan hanya dibagikan melalui pesan ini dikarenakan keterbatasan jarak dan waktu.
    
    Wassalamu'alaikum. Wr. Wb.
    
    Kami yang berbahagia,
    *${updatedUserNama}*
    `;
    break;
    case "2":
    pilihtemplatepesan = `
    Seiring dengan berjalannya waktu dan pergantian hari,
    Seiring langkah kaki ini berjalan secara perlahan hingga berlari,
    Seiring hembusan napas ini silih berganti,
    Dengan ini ingin aku kabarkan,
    Bahwa aku sudah menemukan jodoh yang selama ini aku dambakan,
    
    Untuk itu, besar harapan saya jika Bapak/Ibu/Saudara/i, teman, dan juga sahabat, untuk hadir di acara pernikahan kami.
    
    Berikut ini kami sertakan link tautan undangan untuk mengetahui informasi lengkap acara kami.
    
    ${urlAcara}
    
    Akan menjadi suatu kehormatan dan juga kebahagiaan jika Saudara/i berkenan untuk hadir di acara istimewa kami.
    
    Mohon maaf jika dalam menyampaikan kabar gembira ini hanya bisa dilakukan secara online. Semoga kita bisa bertemu secara langsung di acara bahagia kami.
    
    Terima kasih.
    
    Kami Yang Berbahgia,
    *${updatedUserNama}*
    `;
    break;
    case "3":
    pilihtemplatepesan = `
    Assalamualaikum Warahmatullahi Wabarakatuh
    
    Dengan memohon rahmat dan ridho Allah SWT. 
    kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami. 
    
    Untuk Info Detail Acara, Lokasi, dan Waktu Lebih Lengkap bisa akses link undangan online berikut : 
    
    ${urlAcara}
    
    Merupakan Suatu Kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Rekan-rekan berkenan hadir dan memberikan doa restu di acara pernikahan kami.  
    
    Karena keterbatasan jarak dan waktu tidak dapat mengirimkan undangan ini secara langsung, maka melalui undangan online ini dapat menjadi pengganti undangan resmi sehingga tujuan kami tersampaikan.
    
    Wassallamualaikum Warahmatullahi Wabarakatuh
    
    Kami Yang Berbahgia,
    *${updatedUserNama}*
    `;
    break;
    case "4":
    pilihtemplatepesan = `
Assalamualaikum Warahmatullahi Wabarakatuh

Dengan memohon rahmat dan ridho Allah SWT,
kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk berkenan hadir dalam acara Walimatul Khitan putra kami. ${updatedUserNama}

Informasi lengkap mengenai waktu, tempat, dan detail acara dapat diakses melalui undangan online berikut:

🔗 ${urlAcara}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan turut mendoakan kebaikan bagi putra kami.

Karena keterbatasan jarak dan waktu, izinkan kami menyampaikan undangan ini secara digital sebagai pengganti undangan fisik.

Wassalamualaikum Warahmatullahi Wabarakatuh

Hormat kami,
Keluarga Besar,  ${updatedUserNama} ❤️
    `;
    break;
    // Tambahkan lebih banyak kasus jika diperlukan
    default:
    pilihtemplatepesan = "Template pesan default...";
    break;
    
    }
    
    document.getElementById("templatePesan").value = pilihtemplatepesan;
    document.getElementById("urlAcara").value = urlAcara;

    }
    
    const modal = document.getElementById("fullscreenModal");
    modal.addEventListener("shown.bs.modal", updateTemplate);
    
    
    
