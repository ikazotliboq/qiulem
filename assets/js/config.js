  
  
//api katalog

 async function getUsers() {
 
 let url = 'https://qobilto.my.id/katalog.json';

 try {
 
 let res = await fetch(url);
 return await res.json();

 } catch (error) {
 
 console.log(error);
 
    }
}
 
 async function renderUsers() {
 let users = await getUsers();
 let html = '';
 
 users.map(katalogs => {
 let htmlSegment = `
 
 <div class="col-md-6 animate__animated animate__fadeInUp">
 <div class="cards-bg mt-4">
 <div class="cards-bg1 shadow-lg rounded-5">
 <div class="cards-product">
 <img class="cards-image shadow-lg" src="${katalogs.thumb}" alt="Card image cap">
 
 <h5 class="texts-product">${katalogs.title}</h5>
 <a href="${katalogs.demo}" target="_blank" class="demoa">
 <div class="demo1 text-white">
 <div class="demo-image1">
 <img src="assets/images/demo.png"></img>
 </div>
 
 <div class="demo-container1">
 <h3>Preview</h3>
 <p>Lihat tema undangan</p>
 </div>
 </div>
 </a>
 
 <a href="order.html?order=${encodeURIComponent(katalogs.order)}" target="_blank" class="btn-prod-black"><i class="bi bi-handbag-fill me-2"></i>Pesan Sekarang</a>

 
 </div>
 </div>
 </div>
 
 </div>
 
 `;
 html += htmlSegment;
 });
 
document.getElementById('listkatalog').innerHTML = html;

 }
 
 
 renderUsers();
 
 
 //api testimoni
 
 async function getUserstesti() {
 
 let urltesti = 'https://qobilto.my.id/testmoni.json';
 
 try {
 
 let res = await fetch(urltesti);
 return await res.json();
 
 } catch (error) {
 
 console.log(error);
 
 }
 }
 
 async function renderUserstesti() {
 let userstesti = await getUserstesti();
 let htmltesti = '';
 
 userstesti.map(testipost => {
 let htmlSegmenttesti = `
      <div class="swiper-slide">
      <div class="card1-testi">
      <div class="ceritaku-text">
      <div class="shadows shadows--bottom"></div>
      <div class="ceritaku-content">
      <h5 class="text-testi">${testipost.ucapan}</h5>
      </div>
      </div>
      
      <div class="profile1">
      <div class="profile-image1">
      <img src="${testipost.avatar}" alt="Gambar Pengantin">
      </div>
      
      <div class="profile-container1">
      <h3>${testipost.nama}</h3>
      <p style="color: #ADABAB;">${testipost.subnama}</p>
      </div>
      </div>
      </div>
      </div>
 
 
 `;
 htmltesti += htmlSegmenttesti;
 });
 
 document.getElementById('listtestimoni').innerHTML = htmltesti;
 
 
 }
 
 renderUserstesti();
