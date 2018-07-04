const json = 'https://raw.githubusercontent.com/marelywoody/taller-dom/master/data/students.json';
window.onload = () =>  {
    fetch(json)
    .then((res) =>{
        return res.json(); //toma el json y aplica un metodo para aplicar en el json y así poder manipularlo
    })
    .then((data) => {
       // console.log(data);
        renderInfo(data);
    })
    .catch((error) => {
        //console.log('error');
    })
}