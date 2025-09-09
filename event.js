console.log("Hello world");
const button = document.querySelector("button");
console.log(button.textContent);

button.addEventListener("Click", function (event) {
  console.log(event);
});

const button1 = document.getElementById("second-button");

function handleClick() {
  //alert("Hello");
  //console.log("User Clicked on the Button");
}

button1.addEventListener("click", handleClick);

const secondbutton = document.getElementById("second-button");

secondbutton.addEventListener("mouseover", function () {
  console.log("This is a hoverable button");
});

const thirdButton = document.getElementById("third-button");

thirdButton.addEventListener("click", logEvent);

function logEvent(event) {
  console.log(event);
}
