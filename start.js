const url="https://rickandmortyapi.com/api/character/?name=";
const galeria=document.getElementById("galeria");
const buscador=document.getElementById("buscador")
buscador.addEventListener("input",(event)=>{
    const nombre= event.target.value;
    galeria.innerHTML="";
    buscarPorNombre(nombre,url);
});
async function buscarPorNombre(nombre, url){
    const response= await fetch(url+nombre);
    console.log(url+nombre)
    const json= await response.json();
    crearCards(json);
}

function crearCards(json){
    let h2;
    let img;
    let div;
    for(const e of json.results){
        div=document.createElement("div");
        h2=document.createElement("h2");
        h2.innerText=e.name;
        img=document.createElement("img");
        img.src=e.image;
        div.append(h2);
        div.append(img);
        galeria.append(div);
    }
}



