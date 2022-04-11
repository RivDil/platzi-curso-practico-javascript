//Código del cauadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado mide: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
};

//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado){
    return lado * lado;
};

//console.log("El area del cuadrado mide: " + areaCuadrado + " cmº2");
console.groupEnd();

//Código del triangulo

console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();


//Código del Circulo

console.group("Circulo");

function diametroCirculo(radio){
    return radio *2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

const PI = Math.PI;


console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}