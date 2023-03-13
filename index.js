let galleryContainer = document.querySelector(".photos");
let input = document.querySelector(".search-input")
let searchButton = document.querySelector("#search")


async function getData(imageSearch) {
  let searchQuery = imageSearch ? imageSearch : "spring";
  const url = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  galleryContainer.innerHTML = '';
  data.results.forEach((element) => {
    generateImage(element);
  });
}
getData();

function generateImage(photo) {
  const img = `<img class="gallery-img" src="${photo.urls.regular}" alt="image">`;
  galleryContainer.insertAdjacentHTML("beforeend", img);
}

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getData(input.value);
  }
});

searchButton.addEventListener('click', function (e) {
    getData(input.value);
});


