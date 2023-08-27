const username = document.querySelector("#name");
const namep = document.querySelector(".name-input");
const form1 = document.querySelector("#myform");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "") {
    username.remove();
    namep.classList.add("error");
    namep.textContent = "Please we'd need your name.";

    setTimeout(() => namep.remove(), 3000);
  } else {
    namep.classList.add("successful");
    namep.textContent = `Hi ${username.value} your are welcome!`;
  }
});



const htmlbody = document.querySelector("body");

const colorfunc = function () {
  const colors = [ 'snow', "gainsboro", "#F9F9F9", "#27cfae", 'burlywood', 'cadetblue', 'chocolate', 'coral', 'crimson', 'darkgoldenrod', 'darkslateblue', 'deeppink', 'firebrick', 'cornsilk', 'floralwhite', 'dodgerblue', 'hotpink', 'khaki', 'lightgreen', 'teal', 'slateblue', 'peru', 'seagreen'];

  const randomindex = Math.floor(Math.random() * colors.length);

  const randomcolor = colors[randomindex];

  htmlbody.style.backgroundColor = randomcolor;

  console.log(`The user just change the background color to ${randomcolor}`);
};

htmlbody.onclick = colorfunc;





