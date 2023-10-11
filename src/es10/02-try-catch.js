try {
    hello();
} catch (error) {
    console.log(error);
}
/*Parámetro opcional de catch
El parámetro opcional de catch permite omitir el error si es necesario. */

try {
    hello();
} catch  {
    console.log('esto es un error!');
}

//guias

try {
    // Manejar el código
  } catch (err) {
    // Se utiliza el parámetro `err`
  }
  
  try {
    // Manejar el código
  } catch {
    // Manejar el error sin el parámetro.
  }

