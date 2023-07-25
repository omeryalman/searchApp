const formWrapper=document.querySelector("#form-wrapper");
const form= document.querySelector("#form");
const searchInput=document.querySelector("#searchInput");
const buttonWrapper=document.querySelector("#button-wrapper");
const searchButton =document.querySelector("#searchButton");
const  clearButton=document.querySelector("#clearButton");
const picturesList =document.querySelector("#pictures-list");

searchButton.addEventListener("click",search);
clearButton.addEventListener("click",deleteImage);
function  search (){
const value=searchInput.value.trim();
deleteImage();

 fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
    method:"GET",
    headers:{
        Authorization: "Client-ID u96f32i9GY-dy0a6RGS9BYu6WZtGJLGuVrnezfHksp0"
    }
}).then(response=>response.json())
.then(post=>{
    for(const images of post.results){
addImageUrl(images.urls.small);
    }
} )
.catch(error=>console.log(error));

}


function addImageUrl(url){
const div=document.createElement("div");
div.className="card"
const img=document.createElement("img");
img.width="400"
img.height="400"
img.setAttribute("src",url);
div.append(img);
picturesList.append(div);


}

function deleteImage(){
    picturesList.innerHTML="";
}