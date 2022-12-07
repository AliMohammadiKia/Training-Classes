// function sayHi(age, username = "user") {
//   console.log(`hello ${username}, your age: ${age}`);
// }

// sayHi(21);

// spread
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(...numbers);

// const result = numbers.reduce((a, b) => a + b);
// console.log(result);

// const characters = "mohammad";
// console.log(...characters);

// console.log(Math.max(2, 33, 452, 523, 32));
// const numbers = [2, 33, 452, 523, 32];
// console.log(Math.max(...numbers));

// const num1 = [1, 2, 3];
// const num2 = [...num1, 4, 5, 6];
// console.log(...num2);

// const newNum = [...num1, ...num2];
// console.log(...newNum);

// const person = {
//   firstname: "ali",
//   lastname: "mohammadi kia",
// };
// console.log(...person);

// const newPerson = { ...person, job: "student", age: 21, isOnline: true };
// console.log(newPerson);

// rest parameter ES6
// function sum() {
// let result = 0;
// for (let i = 0; i < arguments.length; i++) {
//   result += arguments[i];
// }
// return result;

// array-like object
// console.log(arguments.length);
// }

// const result = sum(2, 5);
// console.log(result);

// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b);
// }

// const result = sum(2, 5);
// console.log(result);

// rest params not work on arrow function

// const names = ["ali", "mamad", "reza", "fateme", "hosein"];

// const ali = names[0];
// const mamad = names[1];
// console.log(ali, mamad);

// const [ali, mamad, ...otherNames] = names; // rest
// console.log(ali, mamad, otherNames);

// rest params
// function raceResults(gold, silver, bronze, ...others) {
//   console.log(`gold medal goes to : ${others[0]}`);
//   console.log(`silver medal goes to : ${silver}`);
//   console.log(`bronze medal goes to : ${bronze}`);
//   console.log(`bronze medal goes to : ${bronze} ${others[0]}`);
// }

// raceResults("mamad", "golMamad", "gholi", "naghi", "taghi", "mammoli");

// function raceResults(gold, silver = "hasem", ...others) {
//   console.log(`gold medal goes to: ${gold}`);
//   console.log(`silver medal goes to: ${silver}`);
//   console.log(`Thanks to: ${others}`);
// }

// object nested
// const categories1 = {
//   1: {
//     color: "#f3c32c",
//     name: "Housing",
//     score_out_of_10: 1,
//   },
//   2: {
//     color: "#f3d630",
//     name: "Cost of Living",
//     score_out_of_10: 2.618,
//   },
//   3: {
//     color: "#f4eb33",
//     name: "Startups",
//     score_out_of_10: 10,
//   },
// };

// const colors = Object.values(categories1);

// console.log(`all of colors is : ${colors.length}`);

// const result = colors.filter((color) => color.score_out_of_10 > 9);
// const result2 = result.map((item) => item.name);

// console.log(result2);

// DOM document object model
// console.log(document);
// console.dir(document);

// console.dir(document.body.children);

// const heading = document.getElementById("heading");
// console.log(heading);

// const heading = document.getElementsByTagName("h1")[0];
// console.log(heading);

// const heading = document.getElementsByClassName("welcome");
// console.log(heading);

// quiz1
// Write your code in here
// . Select the image element by it's id and save it to a variable called image
// . Select the h1 by it's id and save it to a variable called heading

// const image = document.getElementById("unicorn");
// console.log(image);

// const heading = document.getElementById("mainheading");
// console.log(heading.innerText);

// const image = document.getElementsByTagName("img")[0];
// console.log(image);

// const heading = document.querySelector("#mainheading");
// console.log(heading);

// const testClasses = document.querySelectorAll(".test");
// console.log(testClasses);

// quiz 2
/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    2. the first div element node
    --> should log the ".site-header" node
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
*/

// const pElements = document.querySelectorAll("p");
// console.log(pElements);
// const divFirst = document.querySelector("div");
// console.log(divFirst);
// console.log(document.querySelector("#jumbotron-text"));
// console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for vulnerable!"
*/
const btnAlert = document.querySelector("#alertBtn");
btnAlert.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for vulnerable!");
});

/*
Task 3
=======
Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const btnChangeColor = document.querySelector("#bgrChangeBtn");
btnChangeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = "skyblue";
});

const input = document.querySelector("input");
input.addEventListener("focus", (event) => {
  event.target.style.border = "2px solid orange";
});
input.addEventListener("blur", (event) => {
  event.target.style.border = "2px solid lightgray";
});

// const heading = document.querySelector(".display-3");

// console.log("inner html");
// console.log(heading.innerHTML);
// console.log("inner text");
// console.log(heading.innerText);
// console.log("text content");
// console.log(heading.textContent);

// classList
// console.log(heading.classList);

// getAttribute()
// console.log(heading.getAttribute("class"));
// console.log(heading.getAttribute("id"));
// console.log(heading.getAttribute("data-toggle"));

// setAttribute()
// heading.setAttribute("class", "testing");
// heading.setAttribute("data-toggle", "false");

// classList.add()
// heading.classList.add("testing");

// value => input
// const input = document.querySelector(".addArticle");
// console.log(input.value);

// console.log(heading.parentElement);
// console.log(heading.children[0]);
// console.log(heading.nextSibling);
// console.log(heading.nextElementSibling);
// console.log(heading.previousSibling);
// console.log(heading.previousElementSibling);

// style
// heading.style.color = "red";
// heading.style.fontSize = "16px";
// heading.style.backgroundColor = "orange";
// heading.style.maxHeight = "220px";

// createElement
// const pElement = document.createElement("p");
// pElement.innerText = "I am a paragraph!";
// pElement.classList.add("para");

// function generateElement(tagName) {
//   return document.createElement(tagName);
// }

// const h2 = generateElement("h2");
// h2.innerText = "I am a heading 2";

// document.body.append(pElement, h2);

// const h2Remove = document.querySelector("h2");

// h2Remove.remove();
// document.body.removeChild(document.body.children[3]);

// quiz3

// change the word Delicious to Disgusting
// const span = document.querySelector("h1 span");
// span.innerText = "<small>Disgusting</small>";
// span.innerHTML = "<small style='color: red;'>Disgusting</small>";

// quiz 4

// change the url to: 'https://ctl.s6img.com/society6/img/6KLGBRmtYG8sc6vShMmCzkIBuVc/w_1500/posters/top/~artwork,fw_2718,fh_3619,fx_-14,fy_162,iw_2745,ih_3294/s6-original-art-uploads/society6/uploads/misc/25b61819b78d4267ae26919e142ac513/~~/youre-eggzactly-my-type-funny-egg-pun-posters.jpg'
//change the alt text to: "chicken"

// const egg = document.querySelector("#egg");
// egg.setAttribute(
//   "src",
//   "https://ctl.s6img.com/society6/img/6KLGBRmtYG8sc6vShMmCzkIBuVc/w_1500/posters/top/~artwork,fw_2718,fh_3619,fx_-14,fy_162,iw_2745,ih_3294/s6-original-art-uploads/society6/uploads/misc/25b61819b78d4267ae26919e142ac513/~~/youre-eggzactly-my-type-funny-egg-pun-posters.jpg"
// );
// egg.alt = "chicken";

// quiz 5

//select the div with the id of container
//set it's text alignment to center
//give the image a width of 150px and a border radius of 50%

//Hint: js use camelCased property names in JS! (backgroundColor not background-color, etc)

// const container = document.querySelector("#container");
// const image = document.querySelector("img");

// container.style.textAlign = "center";
// image.style.borderRadius = "50%";
// image.style.width = "150px";

// quiz 6

//please write some JS codes to make the rainbow colored
//use this array of colors:
// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!
//your task is to select all spans, iterate over them, assign them each one of the colors from the colors array.
//the first span should be red, second one orange and so on.
//YOU CODE GOES HERE:

// const sapns = document.querySelectorAll("h1 span");
// for (let i = 0; i < colors.length; i++) {
//   sapns[i].style.color = colors[i];
// }

// const heading = document.querySelector("#heading");
// heading.classList.add("text-primary");

// quiz 7
//in quiz7.html you will find 6 li elements, two of which have the 'highlight' class applied to them.

// 1-please use JS and classList property to invert which elements have the highlight class.
//basically iterate over all the li elements and toggle the class of highlight on each one.

// = your end result will be all blue ish ones will be purple, and all purples will be blue :)
//2- please as second exercise add class of highlight to the elements which they exclude this class
//you code goes here:

// classList.add();
// classList.remove();
// element.classList.toggle("test");

// const list = document.getElementsByTagName("li"); // return html collection => foreach not working
// const list = document.querySelectorAll("li"); // return node list

// list.forEach((item) => {
//   item.classList.toggle("highlight");
// });

// const ul = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.innerText = "World";

// ul.appendChild(newLi);
// ul.prepend(newLi);
// ul.insertAdjacentElement("beforebegin", newLi);
// ul.insertAdjacentElement("afterbegin", newLi);
// ul.insertAdjacentElement("beforeend", newLi);
// ul.insertAdjacentElement("afterend", newLi);

// const lis = document.querySelectorAll("li");
// lis.forEach((item) => item.remove());

// function handleClick() {
//   alert("hello user!");
// }

// const btn = document.querySelector("button");
// btn.addEventListener("click", handleClick);

// const input = document.querySelector("input");
// input.addEventListener("keyup", () => {
//   console.log(`I am a keyup event listener`);
// });

// input.addEventListener("keyup", (event) => {
//   if (event.isComposing || event.keyCode === 229) {
//     return;
//   }
//   // do something
// });
