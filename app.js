
loader.hidden = true;


window.addEventListener('scroll', () =>{
    console.log
     if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)){
         getPics()
     }
 } )


const container = document.getElementById('container');
let count = 1;
const apiKey = "RE9-5YoN6fELs7i_qA6oirHF4W1Of0PTDXIIaw8HMGw";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let picsFromApi = [];

//get pics from unsplash api

async function getPics(){
    try {
        const response  = await fetch(apiUrl);
        picsFromApi = await response.json();
        displayImages()
         
    } catch (error){
        loader.hidden = false;
    }}

//on load
getPics()

//function that creates the elements in the dom so the pictures fetched from the api can be dissplayed.

function displayImages(){
    picsFromApi.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html)
        const image = document.createElement('img');
        image.setAttribute('src', photo.urls.small);
        image.setAttribute('title',photo.alt_description);
        item.appendChild(image);
        container.appendChild(item); 
    }
    )
}

