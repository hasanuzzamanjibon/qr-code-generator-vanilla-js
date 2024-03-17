console.log("Connected");

// selector
const qrcodeInput = document.querySelector("#qrcode-input");
const generateBtn = document.querySelector("#qrcode-btn");
const qrcodeImg = document.querySelector("#qrcode-img");
const downloadBtn = document.querySelector("#download-btn");

// initial Variable
let imageSource;

// function for download image
const fetchImage = async (imageSrc) => {
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement("a");
  link.href = imageURL;
  link.download = "QR_Code_generated";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// toast when error
let myToast = Toastify({
  text: "Please, enter Something",
  duration: 1300,
});

// function

// generate btn acction
generateBtn.addEventListener("click", () => {
  const textValue = qrcodeInput.value;
  if (textValue === "") {
    return myToast.showToast();
  } else {
    qrcodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${textValue}`;
    imageSource = qrcodeImg.src;
  }
});

// downloadbtn action
downloadBtn.addEventListener("click", () => {
  fetchImage(imageSource);
});
