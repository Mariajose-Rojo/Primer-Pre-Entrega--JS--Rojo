function calculo_compra(precio, unidades){
    return precio*unidades;
}

function porcentaje_compra(precio_compra, porcentaje_descuento){
    const descuento = precio_compra * (porcentaje_descuento / 100);
    const total_con_descuento = precio_compra - descuento;
    return total_con_descuento;
}

