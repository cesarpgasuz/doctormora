//formatear numero de telefono
export function formatearNumero(numero) {
    // Eliminar caracteres no numéricos
    const soloNumeros = numero.replace(/\D/g, '');
  
    // Formatear el número
    const formateado = soloNumeros.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  
    return formateado;
}