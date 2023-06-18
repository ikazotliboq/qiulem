  
  
//api katalog

 async function getUsers() {
 
 let url = 'https://qobilto.tech/katalog-nonfoto.json';

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
 <div class="cards-bg1">
 <div class="cards-product shadow-lg">
 <img class="cards-image shadow-lg" src="${katalogs.thumb
}" alt="Card image cap">
 
 <h5 class="texts-product">${katalogs.title}</h5>
 <a href="${katalogs.demo}" target="_blank" class="demoa">
 <div class="demo1 text-white">
 <div class="demo-image1">
 <img src="assets/images/demo.png"></img>
 </div>
 
 <div class="demo-container1">
 <h3>Contoh</h3>
 <p>Lihat tema undangan</p>
 </div>
 </div>
 </a>
 
 <a href="order-nonfoto.html?order=${encodeURIComponent(katalogs.endpoint)}" target="_blank" class="btn-prod-black"><i class="bi bi-handbag-fill me-2"></i>Order Sekarang</a>

 
 </div>
 </div>
 </div>
 
 </div>
 
 `;
 html += htmlSegment;
 });
 
document.getElementById('listkatalog-nonfoto').innerHTML = html;

 }
 
 
 renderUsers();
 
 