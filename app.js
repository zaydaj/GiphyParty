console.log("Let's get this party started!");

// async function getRandomDog() {
//     const res = await axios.get('https://dog.ceo/api/breeds/image/random');
//     console.log(res.data);
//     const img = document.querySelector("#dog");
//     img.src = res.data.message;
// }

const gif = document.querySelector("#gif-area");
const input = document.querySelector("#search");

async function getGif(gif) { 
try {
    const url = `http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    const res = await axios.get(url);
    console.log(res.data);
    gif.src = res.data.images;
} catch (e) {
    alert('GIF not found')
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