// =====================================
// OPEN WEBSITE + MUSIC
// =====================================

const openButton =
    document.getElementById("openButton");

const opening =
    document.getElementById("opening");

const mainContent =
    document.getElementById("mainContent");

const music =
    document.getElementById("music");


openButton.addEventListener(
    "click",
    function () {

        opening.classList.add("hidden");

        mainContent.classList.remove("hidden");


        // Memulai musik setelah tombol ditekan
        music.play().catch(function () {

            console.log(
                "Musik membutuhkan interaksi user."
            );

        });


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// =====================================
// SCROLL
// =====================================

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================
// HITUNG WAKTU SEJAK 25 AGUSTUS
// =====================================

// Tahun ini menggunakan 2026.
// Kalau tahun jadian berbeda,
// ubah bagian 2026.

const startDate =
    new Date("2026-08-25T00:00:00");


function updateCounter() {

    const now =
        new Date();

    let difference =
        now - startDate;


    if (difference < 0) {

        difference = 0;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference /
                1000) % 60
        );


    document.getElementById("days")
        .textContent = days;


    document.getElementById("hours")
        .textContent = hours;


    document.getElementById("minutes")
        .textContent = minutes;


    document.getElementById("seconds")
        .textContent = seconds;

}


setInterval(
    updateCounter,
    1000
);

updateCounter();


// =====================================
// MINI GAME
// =====================================

const gameArea =
    document.getElementById("gameArea");

const gameHeart =
    document.getElementById("gameHeart");

const scoreText =
    document.getElementById("score");

const secret =
    document.getElementById("secret");


let score = 0;


// =====================================
// POSISI RANDOM HATI
// =====================================

function moveHeart() {

    const areaWidth =
        gameArea.clientWidth;

    const areaHeight =
        gameArea.clientHeight;


    const heartSize = 50;


    const randomX =
        Math.random() *
        (areaWidth - heartSize);


    const randomY =
        Math.random() *
        (areaHeight - heartSize);


    gameHeart.style.left =
        randomX + "px";


    gameHeart.style.top =
        randomY + "px";

}


// =====================================
// KLIK HATI
// =====================================

gameHeart.addEventListener(
    "click",
    function () {

        score++;

        scoreText.textContent =
            score;


        if (score >= 5) {

            gameHeart.style.display =
                "none";


            secret.classList.remove(
                "hidden"
            );


            setTimeout(
                function () {

                    secret.scrollIntoView({
                        behavior: "smooth"
                    });

                },
                300
            );


            createConfetti();

        }

        else {

            moveHeart();

        }

    }
);


// Posisi pertama
moveHeart();


// =====================================
// CONFETTI
// =====================================

function createConfetti() {

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.innerHTML =
            "💙";


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 +
            "vw";


        confetti.style.top =
            "-30px";


        confetti.style.fontSize =
            Math.random() * 15 +
            10 +
            "px";


        confetti.style.zIndex =
            "9999";


        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(
            confetti
        );


        const animation =
            confetti.animate(
                [

                    {
                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1
                    },

                    {

                        transform:
                            `translateY(110vh) rotate(${Math.random() * 720}deg)`,

                        opacity: 0

                    }

                ],
                {

                    duration:
                        Math.random() *
                        2000 +
                        2000,

                    easing:
                        "ease-out"

                }
            );


        animation.onfinish =
            function () {

                confetti.remove();

            };

    }

}