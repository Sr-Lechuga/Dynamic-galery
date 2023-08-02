"use strict";

const archivo = document.getElementById('fileSelector');
archivo.addEventListener("change",(e) => {
    leerArchivo(archivo.files);
});

const  leerArchivo = (archives) => {

    for(let archive of archives){
        const reader = new FileReader();
        reader.readAsDataURL(archive);
        reader.addEventListener("load",(e)=>{
            let newImage = `<img src='${e.currentTarget.result}'>`;
            document.querySelector(".result").innerHTML += newImage;
        });
    }
}