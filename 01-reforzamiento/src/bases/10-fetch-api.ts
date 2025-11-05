import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "oTi6z7lSPq0Kx8nZ75x0xePdZ4g6bnRm";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

myRequest
.then((response) => {response.json()
// .then((data) => {
//     console.log(data)
//     const imagenUrl = data.data.images.original.url
//     console.log(imagenUrl)
//     const imgElement = document.createElement('img')
//     imgElement.src = imagenUrl
//     document.body.appendChild(imgElement)
// })
.then(({data}: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl)
  })
  .catch((err) => {
    console.error(err);
  })
})

const createImageInsideDOM = (url : string) => {
    const imgElement = document.createElement('img')
    imgElement.src = url;
    document.body.append(imgElement)
}