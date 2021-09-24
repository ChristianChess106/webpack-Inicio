import '../css/componentes.css';
// import webpackImage from '../assets/img/webpack-logo.png';

export const saludar = (nombre = 'sin nombre') => {

    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `hola ${nombre} epa`;

    document.body.append(h1);

    //img

 /*    const img = document.createElement('img');
    img.src = webpackImage;
    document.body.append(img); */

};