const burger_menu = document.querySelector('.js-open-header-menu');

const header_menu = document.querySelector('.js-header-menu');


const header__burger_icon_stroke = document.querySelector(".header__burger_icon-stroke")


burger_menu.addEventListener('click', () => {
    header_menu.classList.toggle('active');

    if (header_menu.classList.contains('active')) {
        header__burger_icon_stroke.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else {
        header__burger_icon_stroke.innerHTML = '';
    }
});


header_menu.addEventListener('click', () => {

    header_menu.classList.remove('active');

});





const tooltip = document.querySelectorAll('.tooltip-hover');



tooltip.forEach(item => {

    item.addEventListener('mouseover', () => {

        item.querySelector('.header__buttons_i-tooltip').style.opacity = 1;

        item.querySelector('.header__buttons_i-tooltip').style.visibility = 'visible';

    });

    item.addEventListener('mouseout', () => {

        item.querySelector('.header__buttons_i-tooltip').style.opacity = 0;

        item.querySelector('.header__buttons_i-tooltip').style.visibility = 'hidden';

    });

});



    const cards = document.querySelectorAll(".card-item");

    cards.forEach((card) => {
        const container = card.querySelector(".images-container");
        const prevBtn = card.querySelector(".prev");
        const nextBtn = card.querySelector(".next");

        const scrollAmount = container.clientWidth;

        nextBtn.addEventListener("click", () => {
            container.scrollLeft += scrollAmount;
        });

        prevBtn.addEventListener("click", () => {
            container.scrollLeft -= scrollAmount;
        });
    });


const header = document.querySelector('.js-header');

const alis_ofis ="../data/alis/ofisler/image/ofisler.json"

let imageSources = [
    "../data/alis/ofisler/image/ofisler.json",
    "../data/alis/kohnetikililer/image/kohnetikili.json",
    "../data/alis/qarajlar/image/qarajlar.json",
    "../data/alis/torpaqsaheleri/image/torpaq.json",
    "../data/alis/yenitikililer/YeniTikili.json",
    "../data/kiraye/kohnetikililer/KohneTikili.json",
    "../data/kiraye/ofisler/ofisler.json",
    "../data/kiraye/qarajlar/image/qarajlar.json",
    "../data/kiraye/torpaqsaheleri/image/saheler.json",
    "../data/kiraye/yenitikililer/image/yenitikili.json"
];

    const cardElement = document.getElementById("card-wrapper");
    const cardElement1 = document.getElementById("card-wrapper2");
      
    const cardElement2 = document.getElementById("card-wrapper3");  
      const cardElement3 = document.getElementById("card-wrapper4");  
        const cardElement4 = document.getElementById("card-wrapper5");  
         const cardElement5 = document.getElementById("card-wrapper6");  
          const cardElement6 = document.getElementById("card-wrapper7"); 
        

    fetch("/data/alis/ofisler/image/ofisler.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((d) => {
                const cardItem = document.createElement("div");
                cardItem.className = "card-item";

                const imageContainer = document.createElement("div");
                imageContainer.className = "images-container";

                const buttonsContainer = document.createElement("div");
                buttonsContainer.className = "buttons-container";
                buttonsContainer.innerHTML = `
                    <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
                `;

                const imgText = document.createElement("div");
                imgText.className = "img_text";
                imgText.innerHTML = `
                    <h3>${d.qiymet}</h3>
                    <p>3 bds 2 ba 2,000 sqft - Satılır ev<br>123 Maple St, Albuquerque, NM 87110</p>
                `;

                d.image.forEach((img) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = "/data/alis/ofisler/image/" + img;
                    imageContainer.appendChild(imgElement);
                });

                cardItem.appendChild(imageContainer);
                cardItem.appendChild(buttonsContainer);
                cardItem.appendChild(imgText);
                cardElement.appendChild(cardItem);
            });
        })
        .catch((error) => console.error("Error fetching JSON:", error));

        fetch("/data/alis/kohnetikililer/image/kohnetikili.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((d) => {
                const cardItem = document.createElement("div");
                cardItem.className = "card-item";

                const imageContainer = document.createElement("div");
                imageContainer.className = "images-container";

                const buttonsContainer = document.createElement("div");
                buttonsContainer.className = "buttons-container";
                buttonsContainer.innerHTML = `
                    <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
                `;

                const imgText = document.createElement("div");
                imgText.className = "img_text";
                imgText.innerHTML = `
                    <h3>${d.qiymet}</h3>
                    <p>3 bds 2 ba 2,000 sqft - Satılır ev<br>123 Maple St, Albuquerque, NM 87110</p>
                `;

                d.image.forEach((img) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = "/data/alis/kohnetikililer/image/" + img;
                    imageContainer.appendChild(imgElement);
                });

                cardItem.appendChild(imageContainer);
                cardItem.appendChild(buttonsContainer);
                cardItem.appendChild(imgText);
                cardElement1.appendChild(cardItem);
            });
        })
        .catch((error) => console.error("Error fetching JSON:", error));



            fetch("/data/alis/qarajlar/image/qarajlar.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((d) => {
                const cardItem = document.createElement("div");
                cardItem.className = "card-item";

                const imageContainer = document.createElement("div");
                imageContainer.className = "images-container";

                const buttonsContainer = document.createElement("div");
                buttonsContainer.className = "buttons-container";
                buttonsContainer.innerHTML = `
                    <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
                `;

                const imgText = document.createElement("div");
                imgText.className = "img_text";
                imgText.innerHTML = `
                    <h3>${d.qiymet}</h3>
                    <p>3 bds 2 ba 2,000 sqft - Satılır ev<br>123 Maple St, Albuquerque, NM 87110</p>
                `;

                d.image.forEach((img) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = "/data/alis/qarajlar/image/" + img;
                    imageContainer.appendChild(imgElement);
                });

                cardItem.appendChild(imageContainer);
                cardItem.appendChild(buttonsContainer);
                cardItem.appendChild(imgText);
                cardElement2.appendChild(cardItem);
            });
        })
        .catch((error) => console.error("Error fetching JSON:", error));



        fetch("/data/alis/torpaqsaheleri/image/torpaq.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((d) => {
                const cardItem = document.createElement("div");
                cardItem.className = "card-item";

                const imageContainer = document.createElement("div");
                imageContainer.className = "images-container";

                const buttonsContainer = document.createElement("div");
                buttonsContainer.className = "buttons-container";
                buttonsContainer.innerHTML = `
                    <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
                `;

                const imgText = document.createElement("div");
                imgText.className = "img_text";
                imgText.innerHTML = `
                    <h3>${d.qiymet}</h3>
                    <p>3 bds 2 ba 2,000 sqft - Satılır ev<br>123 Maple St, Albuquerque, NM 87110</p>
                `;

                d.image.forEach((img) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = "/data/alis/torpaqsaheleri/image/" + img;
                    imageContainer.appendChild(imgElement);
                });

                cardItem.appendChild(imageContainer);
                cardItem.appendChild(buttonsContainer);
                cardItem.appendChild(imgText);
                cardElement3.appendChild(cardItem);
            });
        })
        .catch((error) => console.error("Error fetching JSON:", error));




 

        

         fetch("/data/alis/yenitikililer/YeniTikili.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((d) => {
                const cardItem = document.createElement("div");
                cardItem.className = "card-item";

                const imageContainer = document.createElement("div");
                imageContainer.className = "images-container";

                const buttonsContainer = document.createElement("div");
                buttonsContainer.className = "buttons-container";
                buttonsContainer.innerHTML = `
                    <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
                `;

                const imgText = document.createElement("div");
                imgText.className = "img_text";
                imgText.innerHTML = `
                    <h3>${d.qiymet}</h3>
                    <p>3 bds 2 ba 2,000 sqft - Satılır ev<br>123 Maple St, Albuquerque, NM 87110</p>
                `;

                d.image.forEach((img) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = "/data/alis/yenitikililer/image/" + img;
                    imageContainer.appendChild(imgElement);
                });

                cardItem.appendChild(imageContainer);
                cardItem.appendChild(buttonsContainer);
                cardItem.appendChild(imgText);
                cardElement4.appendChild(cardItem);
            });
        })
        .catch((error) => console.error("Error fetching JSON:", error));




        fetch("/data/kiraye/ofisler/ofisler.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((d) => {
                const cardItem = document.createElement("div");
                cardItem.className = "card-item";

                const imageContainer = document.createElement("div");
                imageContainer.className = "images-container";

                const buttonsContainer = document.createElement("div");
                buttonsContainer.className = "buttons-container";
                buttonsContainer.innerHTML = `
                    <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
                `;

                const imgText = document.createElement("div");
                imgText.className = "img_text";
                imgText.innerHTML = `
                    <h3>${d.qiymet}</h3>
                    <p>3 bds 2 ba 2,000 sqft - Satılır ev<br>123 Maple St, Albuquerque, NM 87110</p>
                `;

                d.image.forEach((img) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = "/data/kiraye/ofisler/image/" + img;
                    imageContainer.appendChild(imgElement);
                });

                cardItem.appendChild(imageContainer);
                cardItem.appendChild(buttonsContainer);
                cardItem.appendChild(imgText);
                cardElement5.appendChild(cardItem);
            });
        })
        .catch((error) => console.error("Error fetching JSON:", error));



        fetch("/data/kiraye/kohnetikililer/KohneTikili.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((d) => {
                const cardItem = document.createElement("div");
                cardItem.className = "card-item";

                const imageContainer = document.createElement("div");
                imageContainer.className = "images-container";

                const buttonsContainer = document.createElement("div");
                buttonsContainer.className = "buttons-container";
                buttonsContainer.innerHTML = `
                    <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
                `;

                const imgText = document.createElement("div");
                imgText.className = "img_text";
                imgText.innerHTML = `
                    <h3>${d.qiymet}</h3>
                    <p>3 bds 2 ba 2,000 sqft - Satılır ev<br>123 Maple St, Albuquerque, NM 87110</p>
                `;

                d.image.forEach((img) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = "/data/kiraye/kohnetikililer/image/" + img;
                    imageContainer.appendChild(imgElement);
                });

                cardItem.appendChild(imageContainer);
                cardItem.appendChild(buttonsContainer);
                cardItem.appendChild(imgText);
                cardElement6.appendChild(cardItem);
            });
        })
        .catch((error) => console.error("Error fetching JSON:", error));
