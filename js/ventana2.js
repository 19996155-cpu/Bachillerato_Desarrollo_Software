function abrirVentana(materia) {
    let ventana = document.getElementById("ventana");
    let titulo = document.getElementById("titulo-ventana");
    let texto = document.getElementById("texto-ventana");
    let imagen = document.getElementById("imagen-ventana");

    if (materia == 1) {
        titulo.innerHTML = "1.Diseño de sistemas informáticos";
        imagen.src = "imagenes/segundo.1.webp";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 2.1<br><br>" +
            "<b>Duración:</b> 108 horas / 6 semanas.<br><br>" +
            "En este módulo el estudiante aprende a transformar los requisitos de un sistema en un diseño organizado.<br><br>" +
            "Se trabajan aspectos relacionados con:<br>" +
            "• Análisis.<br>" +
            "• Modelado.<br>" +
            "• Diseño de sistemas.<br>" +
            "• Procesos.<br>" +
            "• Usuarios.<br>" +
            "• Información.<br>" +
            "• Componentes de un sistema.<br><br>" +
            "La idea principal es aprender a planificar correctamente un sistema antes de comenzar su desarrollo.<br><br>" +
            "El estudiante comprende cómo organizar las diferentes partes de un sistema informático para que posteriormente pueda ser desarrollado de una manera estructurada.";
    }

    if (materia == 2) {
        titulo.innerHTML = "2. Diseño de arquitectura de software";
        imagen.src = "imagenes/segundo.2.png";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 2.2<br><br>" +
            "<b>Duración:</b> 108 horas / 6 semanas.<br><br>" +
            "En este módulo se profundiza en la forma en que se organiza internamente un sistema de software.<br><br>" +
            "La arquitectura de software determina cómo se estructuran los diferentes componentes de una aplicación y cómo se relacionan entre ellos.<br><br>" +
            "El estudiante comienza a comprender que una aplicación grande necesita una estructura organizada para poder crecer, mantenerse y funcionar correctamente.<br><br>" +
            "Se busca que el estudiante comprenda la importancia de planificar la estructura de un sistema antes de desarrollar todos sus componentes.";
    }

    if (materia == 3) {
        titulo.innerHTML = "3. Programación de componentes de base de datos";
        imagen.src = "imagenes/segundo.3.png";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 2.3<br><br>" +
            "<b>Duración:</b> 90 horas / 5 semanas.<br><br>" +
            "Las bases de datos son fundamentales para almacenar, organizar y administrar información.<br><br>" +
            "En este módulo se estudian conceptos relacionados con:<br>" +
            "• Datos.<br>" +
            "• Tablas.<br>" +
            "• Registros.<br>" +
            "• Relaciones.<br>" +
            "• Consultas.<br>" +
            "• Organización de información.<br>" +
            "• Componentes de bases de datos.<br><br>" +
            "El estudiante aprende cómo se organiza la información dentro de una base de datos y cómo puede ser utilizada por diferentes aplicaciones.<br><br>" +
            "Estos conocimientos preparan al estudiante para desarrollar aplicaciones capaces de trabajar con información almacenada.";
    }

    if (materia == 4) {
        titulo.innerHTML = "4. Desarrollo de programación orientada a objetos";
        imagen.src = "imagenes/segundo.4.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 2.4<br><br>" +
            "<b>Duración:</b> 90 horas / 5 semanas.<br><br>" +
            "La programación orientada a objetos, conocida como POO, es uno de los conceptos importantes en el desarrollo moderno de software.<br><br>" +
            "El estudiante comienza a trabajar con conceptos como:<br>" +
            "• Clases.<br>" +
            "• Objetos.<br>" +
            "• Atributos.<br>" +
            "• Métodos.<br>" +
            "• Encapsulamiento.<br>" +
            "• Relaciones entre objetos.<br><br>" +
            "Esta metodología permite organizar programas grandes de una manera más estructurada y facilita su mantenimiento y desarrollo.<br><br>" +
            "El estudiante comienza a comprender cómo dividir un programa en diferentes objetos y componentes que trabajan entre sí.";
    }

    if (materia == 5) {
        titulo.innerHTML = "5. Diseño e instalación de redes LAN";
        imagen.src = "imagenes/segundo.5.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 2.5<br><br>" +
            "<b>Duración:</b> 90 horas / 5 semanas.<br><br>" +
            "El desarrollo de software también requiere comprender cómo se comunican los diferentes equipos dentro de una red.<br><br>" +
            "En este módulo se estudian las redes LAN, utilizadas en espacios como:<br>" +
            "• Instituciones educativas.<br>" +
            "• Oficinas.<br>" +
            "• Empresas.<br>" +
            "• Laboratorios.<br><br>" +
            "El estudiante obtiene conocimientos sobre la estructura y funcionamiento de las redes informáticas.<br><br>" +
            "También comienza a comprender cómo diferentes equipos pueden comunicarse dentro de una red local y la importancia de planificar correctamente su instalación.";
    }

    if (materia == 6) {
        titulo.innerHTML = "6. Conversación en inglés sobre arquitectura de software y bases de datos";
        imagen.src = "imagenes/segundo.6.png";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 2.6<br><br>" +
            "<b>Duración:</b> 72 horas / 4 semanas.<br><br>" +
            "El inglés técnico continúa acompañando la formación del estudiante debido a la importancia de este idioma en el área de informática.<br><br>" +
            "En este módulo se trabaja vocabulario relacionado con:<br>" +
            "• Arquitectura de software.<br>" +
            "• Bases de datos.<br>" +
            "• Sistemas informáticos.<br>" +
            "• Terminología tecnológica.<br><br>" +
            "Esto ayuda al estudiante a familiarizarse con términos utilizados en herramientas, documentación y recursos tecnológicos.<br><br>" +
            "El conocimiento de este vocabulario facilita la comprensión de diferentes recursos relacionados con el desarrollo de software y las tecnologías informáticas.";
    }

    if (materia == 7) {
        titulo.innerHTML = "7. Diseño de planes de negocio en asociatividad cooperativa";
        imagen.src = "imagenes/segundo.7.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 2.7<br><br>" +
            "<b>Duración:</b> 72 horas / 4 semanas.<br><br>" +
            "En este módulo el estudiante comienza a relacionar los conocimientos tecnológicos con el mundo empresarial.<br><br>" +
            "Aprende a considerar aspectos como:<br>" +
            "• Ideas de negocio.<br>" +
            "• Organización.<br>" +
            "• Clientes.<br>" +
            "• Productos o servicios.<br>" +
            "• Costos.<br>" +
            "• Planificación.<br>" +
            "• Trabajo cooperativo.<br><br>" +
            "Estos conocimientos permiten comprender cómo una idea tecnológica puede convertirse en un proyecto organizado.<br><br>" +
            "El estudiante comienza a considerar aspectos necesarios para planificar una propuesta y comprender cómo puede organizarse un proyecto relacionado con tecnología.";
    }

    if (materia == 8) {
        titulo.innerHTML = "8. Proyecto innovador de portales web";
        imagen.src = "imagenes/segundo.8.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 2.8<br><br>" +
            "<b>Duración:</b> 72 horas / 4 semanas.<br><br>" +
            "Este proyecto permite integrar diferentes conocimientos adquiridos durante el segundo año.<br><br>" +
            "El estudiante puede trabajar en la planificación y desarrollo de un portal web que responda a una necesidad determinada.<br><br>" +
            "En este proyecto comienzan a combinarse:<br>" +
            "• Programación.<br>" +
            "• Bases de datos.<br>" +
            "• Diseño.<br>" +
            "• Análisis.<br>" +
            "• Trabajo en equipo.<br>" +
            "• Emprendimiento.<br><br>" +
            "El estudiante puede aplicar los conocimientos aprendidos en los diferentes módulos para construir un proyecto web más completo.<br><br>" +
            "De esta manera, el segundo año permite aplicar los conocimientos técnicos mediante proyectos que integran diferentes áreas del desarrollo de software.";
    }

    ventana.style.display = "flex";
}

function cerrarVentana() {
    let ventana = document.getElementById("ventana");
    ventana.style.display = "none";
}
