/*let btn = document.getElementById('btn');
let result = document.getElementById('result');

btn.addEventListener('click',drawStudent);

const drawStudent = () => {
    onload();
    resul
}*/

const container = document.getElementById('result'); 

renderInfo = (data) => {
    document.getElementById('btn').addEventListener('click', (event) => {
        let result = '';

        console.log(Object.values(data.students));// se puede llamar a la data de esta forma o de la siguiente linea
        const info = Object.values(data)[0]; // hace lo mismo que la linea anterior
    

        for(let i = 0; i < info.length; i++){
            console.log(info[i].progress.javascript);
            result += `<div class="card">
                         <div class="info">
                             <p>Nombre: ${info[i].name}</p>
                             <p>Active: ${info[i].active}</p>
                             <p>Progress JavaScript: ${info[i].progress.javascript}</p>
                             <p>Progress UX: ${info[i].progress.ux}</p>
                         </div>
                        </div>`;
        }
        container.innerHTML = result;
    });
}

document.getElementById('delate').addEventListener('click', (event) => {
    container.innerHTML = '';
});