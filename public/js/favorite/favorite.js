const favorite = async () => {
    try {
      let data = await fetch("http://localhost:3000/favorite");
      let res = await data.json();
      let favorite = res.map((elem) => {
        return `<div><img src=${elem.image} alt=${elem.alt} /><span><img src=${elem.image2} alt=${elem.alt2}></span>
        </div>`;
      });
      document
        .querySelector(".favorite-movie")
        .insertAdjacentHTML("beforeend", favorite.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default favorite;  
  