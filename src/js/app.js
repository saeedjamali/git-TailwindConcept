const disClosure = {
  id: 0,
  isShow: true,
  title: "Do you offer technical Support?",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, similique?",
};

const titles = document.querySelectorAll(".title");
const content = document.querySelectorAll(".content");
console.log(titles);

titles.forEach((title) => {
  title.addEventListener("click", (e) => {
    // console.log(title.childNodes[3].childNodes[1].classList);
    title.childNodes[3].childNodes[1].classList.toggle("rotate-180");
    let id = title.dataset.id;
    content.forEach((c) => {
      if (c.dataset.id == id) {
        c.classList.toggle("hidden");
      } else {
        // title.childNodes[3].childNodes[1].classList.toggle("rotate-180");
        c.parentNode
          .getElementsByTagName("div")[0]
          .childNodes[3].childNodes[1].classList.remove("rotate-180");
        c.classList.add("hidden");
      }
    });
  });
});
