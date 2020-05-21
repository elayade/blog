const img = document.getElementById("small");
const background = document.getElementById("background");
const content = document.querySelector(".asideA");
const moreBtn = document.querySelector(".btn");
const p = document.querySelector(".lead");
const container = document.querySelector(".content-container");
const imgUrl = localStorage.getItem("img");

img.src = `${imgUrl}`;
background.style.background = `url("${imgUrl}") no-repeat center center/cover`;

const handleClick = () => {
  content.querySelector("h1").style.opacity = 0;
  container.style.opacity = 0;
  setTimeout(() => {
    content.querySelector("h1").style.marginTop = "30px";
    content.querySelector("h1").style.marginBottom = "30px";
    content.querySelector("h1").style.fontSize = "2rem";
    container.style.display = "block";
    container.innerHTML = `
  <div class="content">
  <div class="person">
    <img src="img/author-pic.jpg" alt="Emma" />
    <span>Emma Stone</span>
  </div>
  <div class="text">
    <p class="lead">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
      porro? 
     
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident eos placeat hic, quasi expedita quis iste voluptate
      nisi officia temporibus. Provident eos placeat hic, quasi
      expedita quis iste voluptate nisi officia temporibus. <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
      porro? 
    
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident eos placeat hic, quasi expedita quis iste voluptate
      nisi officia temporibus. Provident eos placeat hic, quasi
      expedita quis iste voluptate nisi officia temporibus. <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
      porro? <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident eos placeat hic, quasi expedita quis iste voluptate
      nisi officia temporibus. Provident eos placeat hic, quasi
      expedita quis iste voluptate nisi officia temporibus. <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
      porro? <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident eos placeat hic, quasi expedita quis iste voluptate
      nisi officia temporibus. Provident eos placeat hic, quasi
      expedita quis iste voluptate nisi officia temporibus. <br />
      <br />
    </p>
  </div>
 </div>
  `;
    container.style.opacity = 1;
    content.querySelector("h1").style.opacity = 1;
  }, 500);
};

moreBtn.addEventListener("click", handleClick);
window.addEventListener("load", () => {
  background.classList.add("active");
  content.classList.add("active");
});
