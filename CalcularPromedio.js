/* 
function hello 
funtion calcular promedio 
function obtener calificacion 
function mostrar reporte 
hacer el objeto estudiante
*/

function Hola(nombre) {
    `return Hola, ${nombre}, bienvenido/a`
}

const CalcularPromedio = (calificaciones) => {
    let suma = calificaciones.reduce(
        (acumulador, contador) => acumulador + contador, 
        0
    );

    return suma / calificaciones.length;
}

const ObtenerCalificacion = (calificacion) => {
    if (calificacion <= 60) {
        return 'Reprobado'
    } else if (calificacion > 60 && calificacion <= 85) {
        return 'Aceptable'
    } else {
        return 'Excelente'
    }
}

const MostrarReporte = (estudiante) => {
    const prom = CalcularPromedio(estudiante.calificaciones);
    const resul = ObtenerCalificacion(prom);

    return `Hola ${estudiante.nombre}, 
    tu promedio es ${prom} 
    y tu estado en la materia es ${resul}`
}

const estudiante = [
    {
        nombre: 'Juan',
        calificaciones: [30, 60.5, 40, 55, 34],
        asignatura: 'Matematicas'
    },
    {
        nombre: 'Alexa',
        calificaciones: [30, 60.5, 40, 55, 34],
        asignatura: 'Matematicas'
    },
    {
        nombre: 'Leidy',
        calificaciones: [30, 60.5, 40, 55, 34],
        asignatura: 'Matematicas'
    },
    {
        nombre: 'Maria',
        calificaciones: [30, 60.5, 40, 55, 34],
        asignatura: 'Matematicas'
    }
];


estudiante.forEach(est => {
    console.log(MostrarReporte(est));
});