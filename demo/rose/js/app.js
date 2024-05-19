function trackVisitor() {
            var xhr = new XMLHttpRequest();
            var visitorInfo = "Platform: " + navigator.platform + ", User-Agent: " + navigator.userAgent;
            var url = "https://script.google.com/macros/s/AKfycbyT4-BfJkGYMg1_U9JQqBBx6Y1_8kkaBdckvaeKkZhm6ROF_HSmpt-tI6vkQ_RH89uM/exec?action=addVisitor";

            xhr.open("GET", url + "&visitor=" + encodeURIComponent(visitorInfo), true);
            xhr.send();
        }
window.onload = trackVisitor; // Kirim data saat halaman dimuat
   

const audio = (() => {
    let instance;

    let getInstance = function () {
        if (!instance) {
            let url = document.getElementById('tombol-musik').getAttribute('data-url').toString();
            instance = new Audio(url);
        }

        return instance;
    };

    return {
        play: function () {
            getInstance().play();
        },
        pause: function () {
            getInstance().pause();
        }
    };
})();

const salin = (btn) => {
    navigator.clipboard.writeText(btn.getAttribute('data-nomer').toString());
    let tmp = btn.innerHTML;
    btn.innerHTML = 'Tersalin';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = tmp;
        btn.disabled = false;
    }, 1500);
};

const timer = () => {
    let tanggal = document.getElementById('tampilan-waktu').getAttribute('data-waktu').toString();
    let countDownDate = new Date(tanggal).getTime();
    let time = null;

    time = setInterval(() => {
        let distance = countDownDate - (new Date().getTime());

        if (distance < 0) {
            clearInterval(time);
            return false;
        }

        document.getElementById('hari').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById('jam').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('menit').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('detik').innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
};

const buka = async () => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('tombol-musik').style.display = 'block';
    AOS.init();
    timer();
    audio.play();
};

const play = (btn) => {
    let isPlay = btn.getAttribute('data-status').toString() == 'true';

    if (!isPlay) {
        btn.setAttribute('data-status', 'true');
        audio.play();
        btn.innerHTML = '<i class="bi bi-music-note" style="font-size: 18px; color: #7D2028;"></i>';
    } else {
        btn.setAttribute('data-status', 'false');
        audio.pause();
        btn.innerHTML = '<i class="bi bi-pause-fill" style="font-size: 18px; color: #7D2028;"></i>';
    }
};



document.addEventListener('DOMContentLoaded', () => {
    let modal = new bootstrap.Modal('#exampleModal');
    let name = (new URLSearchParams(window.location.search)).get('to') ?? '';

    if (name.length == 0) {
        document.getElementById('namatamu').remove();
    } else {
        name = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        let div = document.createElement('div');
        div.classList.add('m-2');
        div.innerHTML = `
        <h2 class="fsub1 text-berem">${name}</h2>
        `;

        document.getElementById('namatamu').appendChild(div);
    }

    modal.show();
});


   
   
   //time pesan
 
