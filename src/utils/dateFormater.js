export default function tiempoTranscurrido(fechaString) {
    // Parsear el string de fecha en un objeto Date
    const fecha = new Date(fechaString);
    const ahora = new Date();

    // Calcular la diferencia en milisegundos
    const diferencia = ahora - fecha;

    // Definir los milisegundos en una unidad de tiempo
    const unSegundo = 1000;
    const unMinuto = unSegundo * 60;
    const unaHora = unMinuto * 60;
    const unDia = unaHora * 24;
    const unaSemana = unDia * 7;
    const unMes = unDia * 30;
    const unAno = unDia * 365;

    if (diferencia < unMinuto) {
        return "Hace un momento";
    } else if (diferencia < unaHora) {
        const minutos = Math.floor(diferencia / unMinuto);
        return `Hace ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`;
    } else if (diferencia < unDia) {
        const horas = Math.floor(diferencia / unaHora);
        return `Hace ${horas} ${horas === 1 ? 'hora' : 'horas'}`;
    } else if (diferencia < unaSemana) {
        const dias = Math.floor(diferencia / unDia);
        return `Hace ${dias} ${dias === 1 ? 'día' : 'días'}`;
    } else if (diferencia < unMes) {
        const semanas = Math.floor(diferencia / unaSemana);
        return `Hace ${semanas} ${semanas === 1 ? 'semana' : 'semanas'}`;
    } else if (diferencia < unAno) {
        const meses = Math.floor(diferencia / unMes);
        return `Hace ${meses} ${meses === 1 ? 'mes' : 'meses'}`;
    } else {
        const anos = Math.floor(diferencia / unAno);
        return `Hace ${anos} ${anos === 1 ? 'año' : 'años'}`;
    }
}