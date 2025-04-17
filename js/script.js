let bgColor = "#ffffff";
let fgColor = "#000000";

let qrcodeContainer = document.getElementById("qrcode");
let controls = document.getElementById("controls");
let generateBtn = document.getElementById("generateBtn");

function generateQRCode(text) {
    qrcodeContainer.innerHTML = "";
    qrcodeContainer.style.display = "block";
    controls.style.display = "flex";

    new QRCode(qrcodeContainer, {
        text: text,
        width: 400,
        height: 400,
        colorDark: fgColor,
        colorLight: bgColor,
        correctLevel: QRCode.CorrectLevel.H
    });
}

generateBtn.addEventListener("click", function() {
    let text = document.getElementById("qrText").value;
    if (text.trim() !== "") {
        generateQRCode(text);
    } else {
        alert("Iltimos, matn yoki link kiriting!");
    }
});

document.getElementById("bgColor").addEventListener("input", function() {
    bgColor = this.value;
    generateQRCode(document.getElementById("qrText").value);
});

document.getElementById("fgColor").addEventListener("input", function() {
    fgColor = this.value;
    generateQRCode(document.getElementById("qrText").value);
});