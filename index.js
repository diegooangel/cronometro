const $h2 = document.getElementById('h2');
console.log($h2);
let segundos = 0;
let minutos  = 0;
let horas    = 0;
let t;

const ticktack = () => {
    segundos++;
    if(segundos >= 60){
        minutos++;
        segundos = 0;
        if(minutos >= 60){
            horas++;
            minutos = 0;
        }
    }
}
const agregar = () => {
    ticktack();
    $h2.textContent = `${horas}:${minutos}:${segundos}`
    tiempo();
}
const tiempo = () => {
    t = setTimeout(() => {
        agregar();
    }, 1000);
}
const detener = () => {
    clearTimeout(t);
}
const reiniciar = () => {
    segundos = 0;
    minutos = 0;
    horas = 0;
    $h2.textContent = `00:00:00`
}
