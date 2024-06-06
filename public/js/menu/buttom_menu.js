const buttom_menu = async () => {
  try {
    let data = await fetch("http://localhost:3000/buttom_menu");
    let res = await data.json();
    let buttom_menu = res.map((elem) => {
      return `<div><a href=${elem.link}  >${elem.name}</a></div>`;
    });
    document
      .querySelector(".buttom_menu nav")
      .insertAdjacentHTML("beforeend", buttom_menu);
  } catch (error) {
    console.log(error.message);
  }
};
export default buttom_menu;
