
document.querySelector('.infocard')
let title = document.getElementById('gen-1').innerHTML = 'Generasión 1 Pokimon';
let color = document.querySelector('body > main > div:nth-child(6)').style.backgroundColor = '#F7B801';

let urlPokimon = window.location;
console.log(urlPokimon);

let dominioPokimon = window.location.host;
console.log(dominioPokimon);

let nodes = document.querySelectorAll('body > main > div:nth-child(6) > div:nth-child(5) > span.infocard-lg-img > a > img');

let srcChange = document.querySelectorAll('.infocard-list .img-fixed');
for(let i = 0; i < srcChange.length; i++){
    srcChange[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
}

// let backgroundChange = document.querySelectorAll('.infocard-lg-data');
// let flying = document.querySelectorAll('body > main > div:nth-child(6) > div:nth-child(130) > span.infocard-lg-data.text-muted > small:nth-child(5) > a.itype.flying');
// for(let i = 0; i < backgroundChange.length; i++){
//     for(let j = 0; j < flying.length; j++){
//         if(backgroundChange[i] === flying[j]) {
//             backgroundChange[i].style.backgroundColor = '#7678ED';
//         }
//     }
// }

// ESTE ULTIMO NO ME SALE, CONSEGUÍ QUE LA PALABRA 'FLYING' TUVIESES UN FONDO,
// PERO ENTIENDO QUE NO ERA LO QUE PEDIA EL EJERCICIO. CREO QUE SE PODRIA HACER CON UN SOLO BUCLE,
// PERO TAMPOCO LOGRO SELECCIONAR LA CLASE ITYPE FLYING BIEN, ASI QUE SE ME OCURRIÓ
// HACERLO EN DOS BUCLES, PERO TAMPOCO FUNCIONA

