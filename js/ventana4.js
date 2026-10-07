function abrirVentana(materia) {

    let ventana = document.getElementById("ventana");
    let titulo = document.getElementById("titulo-ventana");
    let texto = document.getElementById("texto-ventana");

    if (materia === 1) {

        titulo.innerHTML = "1. ¿Qué es el Bachillerato en Desarrollo de Software?";

        texto.innerHTML =
            "Es una especialidad técnica orientada al aprendizaje de conocimientos relacionados con el desarrollo de software y las tecnologías informáticas.<br><br>" +

            "Durante la formación, el estudiante aprende diferentes procesos que forman parte del desarrollo de soluciones informáticas.<br><br>" +

            "Entre estos procesos se encuentran:<br>" +
            "• Análisis de problemas.<br>" +
            "• Diseño de sistemas.<br>" +
            "• Programación.<br>" +
            "• Desarrollo de aplicaciones.<br>" +
            "• Desarrollo web.<br>" +
            "• Trabajo con bases de datos.<br>" +
            "• Mantenimiento de software.<br><br>" +

            "De esta manera, el estudiante obtiene una formación técnica que le permite comprender diferentes etapas del desarrollo de software.";

    }

    if (materia === 2) {

        titulo.innerHTML = "2. ¿Qué se aprende?";

        texto.innerHTML =
            "A lo largo del bachillerato se desarrollan conocimientos relacionados con diferentes áreas de la informática.<br><br>" +

            "Entre las principales áreas de aprendizaje se encuentran:<br>" +
            "• Lógica y algoritmos de programación.<br>" +
            "• Análisis de requerimientos.<br>" +
            "• Diseño de sistemas informáticos.<br>" +
            "• Desarrollo de páginas web.<br>" +
            "• Diseño de aplicaciones multimedia.<br>" +
            "• Desarrollo de aplicaciones de software.<br>" +
            "• Bases de datos.<br>" +
            "• Calidad y mantenimiento de software.<br>" +
            "• Inglés aplicado a sistemas informáticos.<br>" +
            "• Emprendimiento y trabajo colaborativo.<br>" +
            "• Elaboración de proyectos tecnológicos.<br><br>" +

            "Estos conocimientos se van desarrollando progresivamente durante los tres años de formación.";

    }

    if (materia === 3) {

        titulo.innerHTML = "3. Primer Año – Fundamentos de programación";

        texto.innerHTML =
            "El primer año introduce al estudiante en los fundamentos necesarios para comprender el desarrollo de software.<br><br>" +

            "Durante esta etapa se estudian temas relacionados con la lógica de programación, algoritmos, desarrollo web, análisis de necesidades y diseño de aplicaciones.<br><br>" +

            "Algunos de los temas incluyen:<br>" +
            "• Elaboración de algoritmos.<br>" +
            "• Lógica de programación.<br>" +
            "• Identificación de requerimientos.<br>" +
            "• Diseño de aplicaciones multimedia.<br>" +
            "• Desarrollo de páginas web.<br>" +
            "• Inglés relacionado con sistemas informáticos.<br>" +
            "• Emprendimiento colaborativo.<br>" +
            "• Proyecto tecnológico de desarrollo web.<br><br>" +

            "El objetivo es proporcionar las bases que permitirán al estudiante avanzar hacia contenidos técnicos más especializados.";

    }

    if (materia === 4) {

        titulo.innerHTML = "4. Segundo Año – Diseño y desarrollo";

        texto.innerHTML =
            "En segundo año aumenta el nivel de especialización. El estudiante comienza a trabajar con conceptos relacionados con el diseño y construcción de sistemas informáticos.<br><br>" +

            "Entre los principales contenidos se encuentran:<br>" +
            "• Diseño de sistemas informáticos.<br>" +
            "• Arquitectura de software.<br>" +
            "• Bases de datos.<br>" +
            "• Programación orientada a objetos.<br>" +
            "• Redes LAN.<br>" +
            "• Inglés técnico.<br>" +
            "• Planes de negocio.<br>" +
            "• Proyectos innovadores de portales web.<br><br>" +

            "Esta etapa permite integrar diferentes conocimientos para analizar problemas, diseñar soluciones y participar en proyectos tecnológicos.";

    }

    if (materia === 5) {

        titulo.innerHTML = "5. Tercer Año – Preparación profesional";

        texto.innerHTML =
            "El tercer año representa una etapa más avanzada de la formación técnica. En este nivel el estudiante aplica los conocimientos adquiridos durante los primeros dos años.<br><br>" +

            "Se desarrollan conocimientos relacionados con:<br>" +
            "• Desarrollo de aplicaciones de software.<br>" +
            "• Mantenimiento de sistemas informáticos.<br>" +
            "• Administración de bases de datos.<br>" +
            "• Documentación de sistemas.<br>" +
            "• Desarrollo de componentes para dispositivos móviles.<br>" +
            "• Inglés aplicado al mantenimiento informático.<br>" +
            "• Microemprendimiento.<br>" +
            "• Proyecto innovador de desarrollo de software.<br><br>" +

            "De esta manera, el estudiante puede aplicar sus conocimientos en proyectos de software más completos y relacionados con situaciones reales.";

    }

    if (materia === 6) {

        titulo.innerHTML = "6. Competencias que desarrolla";

        texto.innerHTML =
            "La formación en Desarrollo de Software permite desarrollar diferentes competencias técnicas y de trabajo colaborativo.<br><br>" +

            "Entre las principales competencias se encuentran:<br>" +
            "• Programación y resolución de problemas.<br>" +
            "• Desarrollo de páginas web.<br>" +
            "• Análisis y diseño de sistemas.<br>" +
            "• Desarrollo de aplicaciones.<br>" +
            "• Trabajo con bases de datos.<br>" +
            "• Mantenimiento de software.<br>" +
            "• Trabajo en equipo.<br>" +
            "• Desarrollo de proyectos tecnológicos.<br><br>" +

            "Estas competencias permiten al estudiante aplicar los conocimientos adquiridos durante su formación en diferentes proyectos relacionados con la tecnología.";

    }

    if (materia === 7) {

        titulo.innerHTML = "7. Desarrollo Web";

        texto.innerHTML =
            "El desarrollo web es una de las áreas presentes dentro de la formación técnica.<br><br>" +

            "El estudiante aprende conceptos relacionados con la creación de páginas y soluciones orientadas a la web.<br><br>" +

            "Estos conocimientos pueden utilizarse para desarrollar sitios web que presenten información o que permitan solucionar diferentes necesidades.";

    }

    if (materia === 8) {

        titulo.innerHTML = "8. Proyectos tecnológicos";

        texto.innerHTML =
            "Los proyectos tecnológicos permiten poner en práctica los conocimientos adquiridos durante la formación.<br><br>" +

            "El estudiante puede participar en proyectos donde se combinan diferentes áreas del desarrollo de software.<br><br>" +

            "En estos proyectos pueden integrarse:<br>" +
            "• Programación.<br>" +
            "• Diseño.<br>" +
            "• Bases de datos.<br>" +
            "• Análisis.<br>" +
            "• Desarrollo web.<br>" +
            "• Trabajo en equipo.<br><br>" +

            "El objetivo es aplicar los conocimientos técnicos para desarrollar soluciones informáticas.";

    }

    if (materia === 9) {

        titulo.innerHTML = "9. Perfil del estudiante";

        texto.innerHTML =
            "Al finalizar su formación, el estudiante ha desarrollado conocimientos técnicos relacionados con diferentes etapas del ciclo de desarrollo de software.<br><br>" +

            "También puede continuar sus estudios superiores en áreas relacionadas con:<br>" +
            "• Informática.<br>" +
            "• Programación.<br>" +
            "• Sistemas.<br>" +
            "• Desarrollo de software.<br>" +
            "• Otras áreas tecnológicas.<br><br>" +

            "La formación también permite fortalecer capacidades de análisis, resolución de problemas, trabajo en equipo y participación en proyectos tecnológicos.";

    }

    ventana.style.display = "flex";
}


function cerrarVentana() {

    let ventana = document.getElementById("ventana");

    ventana.style.display = "none";

}

