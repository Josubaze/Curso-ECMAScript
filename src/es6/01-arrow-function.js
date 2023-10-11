function square2(num) {
    return num * num;
}

const square1 = (num) => //aunque se puede usar var let y const se recomienda este ultimo.
{
    return num * num;
}
                                 // Si existe un solo parámetro, puedes omitir los paréntesis.
const square = num => num * num; // Retorno implícito, se puede omitir la palabra reservada return

const resultado = square(10);
console.log(resultado);