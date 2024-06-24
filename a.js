const apiURL =  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText"); // input text
const generateQRbtn = document.getElementById("generateQR");

function generateQR(){
    if (qrText.value.length > 0){
        qrImage.src = apiURL + qrText.value;
        imgBox.classList.add("show-img");
        qrText.value = '';
    }else{
        qrText.classList.add("error")
        setTimeout(() => {
            imgBox.classList.remove("error");
        }, 1000);
    }
   
}

generateQRbtn.addEventListener("click", generateQR);
