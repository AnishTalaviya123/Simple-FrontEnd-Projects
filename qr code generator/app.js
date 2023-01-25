let ImgBox = document.getElementById("ImgBox");
let QrImage = document.getElementById("QrImage");
let text = document.getElementById("text");

function QrCode() {
    QrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
}