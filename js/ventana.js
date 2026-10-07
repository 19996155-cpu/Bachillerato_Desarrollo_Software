function abrirVentana(materia) {
    let ventana = document.getElementById("ventana");
    let titulo = document.getElementById("titulo-ventana");
    let texto = document.getElementById("texto-ventana");
    let imagen = document.getElementById("imagen-ventana");

    if (materia == 1) {
        titulo.innerHTML = "1. Elaboración de algoritmos usando lógica de programación";
        imagen.src = "imagenes/primer.1.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 1.1<br><br>" +
            "<b>Duración:</b> 108 horas / 6 semanas.<br><br>" +
            "Este es uno de los módulos fundamentales del primer año, ya que introduce al estudiante en la lógica necesaria para desarrollar programas y sistemas informáticos.<br><br>" +
            "El estudiante aprende a analizar problemas y convertirlos en soluciones ordenadas mediante algoritmos.<br><br>" +
            "Entre los principales conocimientos se encuentran:<br>" +
            "• Algoritmos.<br>" +
            "• Diagramas de flujo.<br>" +
            "• Pseudocódigo.<br>" +
            "• Variables.<br>" +
            "• Constantes.<br>" +
            "• Operadores.<br>" +
            "• Entrada y salida de información.<br>" +
            "• Condiciones.<br>" +
            "• Estructuras repetitivas o ciclos.<br>" +
            "• Procesos lógicos.<br><br>" +
            "El objetivo es que el estudiante pueda desarrollar una forma de pensamiento lógico y estructurado que posteriormente utilizará para programar aplicaciones y sistemas informáticos.";
    }

    if (materia == 2) {
        titulo.innerHTML = "2. Identificación de requerimientos para diseñar o modificar sistemas informáticos";
        imagen.src = "imagenes/primer.2.png";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 1.2<br><br>" +
            "<b>Duración:</b> 90 horas / 5 semanas.<br><br>" +
            "En este módulo el estudiante aprende que desarrollar software no significa simplemente escribir código. Antes de comenzar a programar es necesario conocer qué necesita el usuario y qué problema se quiere solucionar.<br><br>" +
            "El estudiante aprende a identificar y organizar los requerimientos de un sistema informático.<br><br>" +
            "Entre los aspectos que se analizan están:<br>" +
            "• Necesidades del usuario.<br>" +
            "• Problemas que debe solucionar el sistema.<br>" +
            "• Información que debe manejar.<br>" +
            "• Funciones que debe realizar.<br>" +
            "• Riesgos del sistema.<br>" +
            "• Requisitos de seguridad.<br>" +
            "• Características de los usuarios.<br><br>" +
            "También se utilizan herramientas de análisis como diagramas de contexto y casos de uso.<br><br>" +
            "Este módulo introduce al estudiante en el análisis de sistemas y permite comprender la importancia de planificar correctamente un proyecto antes de comenzar su desarrollo.";
    }

    if (materia == 3) {
        titulo.innerHTML = "3. Diseño de aplicaciones multimedia";
        imagen.src = "imagenes/primer.3.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 1.3<br><br>" +
            "<b>Duración:</b> 72 horas / 4 semanas.<br><br>" +
            "El estudiante comienza a trabajar con diferentes recursos multimedia y aprende a utilizarlos para construir soluciones digitales más atractivas e interactivas.<br><br>" +
            "Las aplicaciones multimedia pueden combinar diferentes tipos de contenido para presentar información de una manera más dinámica.<br><br>" +
            "Entre los principales elementos se encuentran:<br>" +
            "• Imágenes.<br>" +
            "• Audio.<br>" +
            "• Video.<br>" +
            "• Elementos gráficos.<br>" +
            "• Animaciones.<br>" +
            "• Interactividad.<br>" +
            "• Organización de contenidos digitales.<br><br>" +
            "El estudiante aprende a organizar estos elementos de manera adecuada para crear aplicaciones y proyectos digitales.<br><br>" +
            "Estos conocimientos son especialmente útiles para el desarrollo de páginas web, aplicaciones educativas, presentaciones digitales y otros proyectos tecnológicos que necesitan una interfaz atractiva y fácil de utilizar.";
    }

    if (materia == 4) {
        titulo.innerHTML = "4. Elaboración de manual de sistemas de calidad para el desarrollo de software";
        imagen.src = "imagenes/primer.4.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 1.4<br><br>" +
            "<b>Duración:</b> 108 horas / 6 semanas.<br><br>" +
            "En este módulo el estudiante comienza a conocer la importancia de la calidad dentro del desarrollo de software.<br><br>" +
            "No basta con crear un programa que funcione. El software también debe estar organizado, documentado, ser comprensible, seguro y adecuado para las necesidades del usuario.<br><br>" +
            "Entre los aspectos relacionados con la calidad se encuentran:<br>" +
            "• Organización del software.<br>" +
            "• Documentación.<br>" +
            "• Seguridad.<br>" +
            "• Mantenimiento.<br>" +
            "• Facilidad de comprensión.<br>" +
            "• Cumplimiento de requisitos.<br>" +
            "• Necesidades del usuario.<br><br>" +
            "El estudiante aprende a reconocer procesos y procedimientos que pueden ayudar a mejorar la calidad de los sistemas informáticos.<br><br>" +
            "También se trabaja con documentación y manuales que permiten establecer procedimientos para desarrollar y mantener software de una manera más organizada.";
    }

    if (materia == 5) {
        titulo.innerHTML = "5. Desarrollo de páginas web";
        imagen.src = "imagenes/primer.5.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 1.5<br><br>" +
            "<b>Duración:</b> 108 horas / 6 semanas.<br><br>" +
            "Este es uno de los módulos principales para quienes desean aprender desarrollo web.<br><br>" +
            "El estudiante comienza a construir páginas y sitios web utilizando diferentes tecnologías y herramientas de desarrollo web.<br><br>" +
            "Entre los principales conocimientos se encuentran:<br>" +
            "• Estructura de páginas web.<br>" +
            "• HTML.<br>" +
            "• CSS.<br>" +
            "• Diseño de interfaces.<br>" +
            "• Organización de contenidos.<br>" +
            "• Navegación entre páginas.<br>" +
            "• Elementos multimedia.<br>" +
            "• Diseño visual.<br>" +
            "• Creación de sitios web.<br><br>" +
            "HTML permite construir la estructura de una página, mientras que CSS permite trabajar con el diseño, los colores, tamaños, posiciones y diferentes elementos visuales.<br><br>" +
            "Durante este módulo el estudiante puede pasar de la teoría a la creación de páginas web reales y comenzar a desarrollar proyectos propios.";
    }

    if (materia == 6) {
        titulo.innerHTML = "6. Conversación en inglés sobre sistemas informáticos y desarrollo de páginas web";
        imagen.src = "imagenes/primer.6.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 1.6<br><br>" +
            "<b>Duración:</b> 72 horas / 4 semanas.<br><br>" +
            "El inglés tiene un papel importante dentro del área de informática, debido a que una gran cantidad de documentación, herramientas, programas y recursos tecnológicos utilizan este idioma.<br><br>" +
            "Por esta razón, el estudiante comienza a familiarizarse con vocabulario técnico relacionado con informática y desarrollo de software.<br><br>" +
            "Entre los temas y términos relacionados se encuentran:<br>" +
            "• Computadoras.<br>" +
            "• Software.<br>" +
            "• Hardware.<br>" +
            "• Sistemas informáticos.<br>" +
            "• Programación.<br>" +
            "• Desarrollo web.<br>" +
            "• Páginas web.<br>" +
            "• Tecnología.<br>" +
            "• Herramientas informáticas.<br><br>" +
            "El objetivo es que el estudiante pueda comprender y utilizar expresiones básicas en inglés relacionadas con su área de formación.<br><br>" +
            "Esto facilita posteriormente el acceso a documentación, tutoriales, programas y recursos tecnológicos que se encuentran principalmente en inglés.";
    }

    if (materia == 7) {
        titulo.innerHTML = "7. Emprendedurismo colaborativo";
        imagen.src = "imagenes/primer.7.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 1.7<br><br>" +
            "<b>Duración:</b> 72 horas / 4 semanas.<br><br>" +
            "El bachillerato no solamente busca desarrollar conocimientos técnicos. También busca que el estudiante pueda utilizar sus conocimientos para crear proyectos y trabajar con otras personas.<br><br>" +
            "En este módulo se desarrollan habilidades relacionadas con el emprendimiento y el trabajo colaborativo.<br><br>" +
            "Entre los principales aspectos se encuentran:<br>" +
            "• Trabajo en equipo.<br>" +
            "• Emprendimiento.<br>" +
            "• Creatividad.<br>" +
            "• Organización.<br>" +
            "• Comunicación.<br>" +
            "• Identificación de oportunidades.<br>" +
            "• Desarrollo de ideas.<br>" +
            "• Colaboración.<br>" +
            "• Solución de problemas.<br><br>" +
            "El estudiante aprende a trabajar con otras personas para desarrollar ideas y convertirlas en posibles proyectos.<br><br>" +
            "Estos conocimientos pueden ser útiles tanto para proyectos escolares como para futuros emprendimientos relacionados con tecnología y desarrollo de software.";
    }

    if (materia == 8) {
        titulo.innerHTML = "8. Proyecto tecnológico de desarrollo de páginas web";
        imagen.src = "imagenes/primer.8.png";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 1.8<br><br>" +
            "<b>Duración:</b> 72 horas / 4 semanas.<br><br>" +
            "Este módulo permite integrar los conocimientos adquiridos durante el primer año del bachillerato.<br><br>" +
            "El estudiante puede desarrollar un proyecto tecnológico relacionado con páginas web, aplicando los conocimientos de programación, análisis, diseño y desarrollo web aprendidos durante los módulos anteriores.<br><br>" +
            "El proceso de desarrollo puede incluir diferentes etapas:<br>" +
            "• Identificar un problema.<br>" +
            "• Analizar las necesidades.<br>" +
            "• Identificar los requerimientos.<br>" +
            "• Diseñar una solución.<br>" +
            "• Crear la estructura de la página web.<br>" +
            "• Aplicar estilos y diseño.<br>" +
            "• Incorporar contenido multimedia.<br>" +
            "• Realizar pruebas.<br>" +
            "• Corregir errores.<br>" +
            "• Presentar el resultado final.<br><br>" +
            "Este módulo permite que el estudiante deje de trabajar únicamente con ejercicios aislados y comience a desarrollar un proyecto tecnológico más completo.<br><br>" +
            "Por esta razón, el primer año busca que el estudiante comience a desarrollar la capacidad de identificar problemas, proponer soluciones y convertir esas soluciones en proyectos tecnológicos.";
    }

    ventana.style.display = "flex";
}

function cerrarVentana() {
    let ventana = document.getElementById("ventana");
    ventana.style.display = "none";
}
