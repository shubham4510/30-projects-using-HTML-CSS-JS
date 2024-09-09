const qrLink = document.querySelector("#qr-link");
const qrBtn = document.querySelector(".qr-btn");
let qrImg = document.querySelector(".qr-img");

qrBtn.addEventListener('click',(e) => {
    let link = qrLink.value;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${link}`;
})