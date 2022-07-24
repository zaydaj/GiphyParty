console.log("Let's get this party started!");

// async function getRandomDog() {
//     const res = await axios.get('https://dog.ceo/api/breeds/image/random');
//     console.log(res.data);
//     const img = document.querySelector("#dog");
//     img.src = res.data.message;
// }

const gif = document.querySelector("#gif-area");
const input = document.querySelector("#search");
const img = document.querySelector("#image");

async function getGif(gif) { 
try {
    // const img = document.createElement('img');
    const url = `http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    const res = await axios.get(url);
    console.log(res.data.data[Math.floor(Math.random() * res.data.data.length)].images.original.url);
    img.src = res.data.data[Math.floor(Math.random() * res.data.data.length)].images.original.url
    // gif.appendChild(img);
    
} catch (e) {
    alert('GIF not found');
}
}

const form = document.querySelector("#searchform");
form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log('submit')
    // console.log(input.value)
getGif(input.value);
input.value = '';
})

// const empty = form.addEventListener('click', function() {
   
// })