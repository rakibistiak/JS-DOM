let x = document.querySelector(".section-title");
x.style.color = "red"
let blogTitles = document.querySelectorAll("article h3")[0];
blogTitles.style.background = "red";
blogTitles.style.fontSize = "30px";

// for(const blogTitle of blogTitles){
//     console.log(blogTitle.innerHTML);
// }
// function myFunction(){
//     const fourth = document.getElementsByClassName("third-title")[0];
//     fourth.style.color="green";
//     fourth.style.fontSize="30px"
// }
const button1 = document.querySelectorAll("button")[0];
const button2 = document.querySelectorAll("button")[1];
const changeColor = document.querySelectorAll(".blogs");
for( const blog of changeColor){
    button1.addEventListener("click", function () {
        blog.classList.add("second-title");
    })
    button2.addEventListener("click", function () {
        blog.classList.remove("second-title");
    })
    
}


// Create and add a Element by JS

// 1. Create a Element
const li = document.createElement('li');
li.innerText="Blog - 5";

// Where to add

const blogList = document.querySelector(".blog-list");

// Append new Child
blogList.appendChild(li);

// Add Article
const article = document.createElement("article");
article.classList.add("blog")
/* const h3 = document.createElement("h3");
h3.innerText = "My Awesome blog 5";
const p = document.createElement("p");
p.innerText = "Article Paragraph";
article.appendChild(h3);
article.appendChild(p); */
article.innerHTML= `
<h3> My Awesome Blog - 5 </h3>
<p> Paragraph by JS</p>
`;
const blogSection = document.getElementById("blogs");
blogSection.appendChild(article);

// Atricle Design
const blog = document.querySelectorAll(".blog");
for ( const blg of blog){
blg.style.border= "2px solid orange";
blg.style.borderRadius = "10px";
blg.style.margin="10px";
blg.style.padding="10px";
}