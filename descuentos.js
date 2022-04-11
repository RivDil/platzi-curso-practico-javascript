const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcetajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcetajePrecioConDescuento) / 100;

    return precioConDescuento;

}
/* 

console.log({
    precioOriginal,
    descuento,
    porcetajePrecioConDescuento,
    precioConDescuento,
}); */