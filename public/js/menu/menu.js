const menu = async () => {
  try {
    let data = await fetch("http://localhost:3000/menu")
    let res=await data.json()
    let menu=res.map((elem)=>{
        return  `<div><a href=${elem.link}  >${elem.name}</a></div>`
    })
    document.querySelector(".menu nav").insertAdjacentHTML("beforeend", menu) //
  } catch (error) {
    console.log(error.message);
  }
};
export default menu;
