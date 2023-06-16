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

function countdown() {
      var endDate = new Date("2023-07-31"); // Tanggal akhir countdown

      var timerInterval = setInterval(function() {
        var currentDate = new Date();
        var timeDiff = endDate - currentDate;

        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (timeDiff < 0) {
          clearInterval(timerInterval);
          document.getElementById("countdown").textContent = "Countdown Selesai!";
        }
      }, 1000);
    }

    document.addEventListener("DOMContentLoaded", function() {
      countdown();
    });




const buka = async () => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('tombol-musik').style.display = 'block';
    AOS.init();
    audio.play();
};

const play = (btn) => {
    let isPlay = btn.getAttribute('data-status').toString() == 'true';

    if (!isPlay) {
        btn.setAttribute('data-status', 'true');
        audio.play();
        btn.innerHTML = '<i class="bi bi-music-note" style="font-size: 18px; color: WHITE"></i>';
    } else {
        btn.setAttribute('data-status', 'false');
        audio.pause();
        btn.innerHTML = '<i class="bi bi-pause-fill" style="font-size: 18px; color: WHITE"></i>';
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
        <h2 class="fsub1 text-hideng">${name}</h2>
        `;

        document.getElementById('namatamu').appendChild(div);
    }

    modal.show();
});


   
   
   //cerita
   
   const myCarouselElement = document.querySelector('#carouselExampleCaptions')
   
   const carousel = new bootstrap.Carousel(myCarouselElement, {
   interval: 2000,
   touch: true
   })
 