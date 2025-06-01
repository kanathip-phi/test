//https://api.jikan.moe/v4/anime?q=dragon&limit=20
const form = document.getElementById("searchForm");
const container = document.getElementById("container");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = form.elements.query.value;
  getAnime(search);
});


const renderImg = (data) => {
  for (let item of data) {
    // console.log(item);

    const list = document.createElement("div")

    const img = document.createElement("img");
    img.src = item.images.jpg.large_image_url;
    list.appendChild(img);
  

    const title = document.createElement('div')
    title.classList.add("title")
    title.innerText = item.title
    list.appendChild(title)

    
    const url = document.createElement('a')
    url.href = item.url
    url.innerText = "link"
    list.appendChild(url)
   

    container.appendChild(list)

  }
};

const getAnime = async (search) => {
  try {
    const config = { params: { q: search} };
    const res = await axios.get("https://api.jikan.moe/v4/anime", config);
    console.log(res);
    
    renderImg(res.data.data);
  } catch (e) {
    console.log(e);
    return "ERROR";
  }
};


