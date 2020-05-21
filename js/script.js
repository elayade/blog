const main = document.querySelector("main");

function handelClick(e) {
  const img = e.dataset.img;
  console.log(img);
  localStorage.setItem("img", img);

  window.location.href = "../main.html";
}

main.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("item")) {
    handelClick(e.target.parentElement);
  }
});

async function getImg() {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();
  ui(data);
}
function ui(data) {
  data.forEach((img) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.setAttribute("data-img", `${img.download_url}`);
    item.innerHTML = `
    <img src="${img.download_url}" alt="img" />
    `;
    main.appendChild(item);
  });
}
getImg();
