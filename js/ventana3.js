function abrirVentana(materia) {
    let ventana = document.getElementById("ventana");
    let titulo = document.getElementById("titulo-ventana");
    let texto = document.getElementById("texto-ventana");
    let imagen = document.getElementById("imagen-ventana");

    if (materia == 1) {
        titulo.innerHTML = "1. Desarrollo de aplicaciones de software para la solución de problemas";
        imagen.src = "imagenes/tercer.1.png";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 3.1<br><br>" +
            "<b>Duración:</b> 240 horas / 8 semanas.<br><br>" +
            "Este es el módulo técnico con mayor cantidad de horas del plan original.<br><br>" +
            "El estudiante utiliza los conocimientos obtenidos durante los dos primeros años para desarrollar aplicaciones capaces de resolver problemas reales.<br><br>" +
            "Aquí se integran conocimientos de:<br>" +
            "• Programación.<br>" +
            "• Análisis.<br>" +
            "• Diseño.<br>" +
            "• Bases de datos.<br>" +
            "• Arquitectura.<br>" +
            "• Interfaces.<br>" +
            "• Pruebas.<br>" +
            "• Solución de problemas.<br><br>" +
            "Este módulo representa uno de los puntos centrales de la formación profesional del estudiante.";
    }

    if (materia == 2) {
        titulo.innerHTML = "2. Mantenimiento y aseguramiento de la operación del sistema informático";
        imagen.src = "imagenes/tercer.2.png";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 3.2<br><br>" +
            "<b>Duración:</b> 120 horas / 4 semanas.<br><br>" +
            "Crear un sistema no es suficiente. Después de implementarlo, debe mantenerse funcionando correctamente.<br><br>" +
            "Por eso se estudian aspectos relacionados con:<br>" +
            "• Mantenimiento.<br>" +
            "• Detección de problemas.<br>" +
            "• Corrección de errores.<br>" +
            "• Funcionamiento de sistemas.<br>" +
            "• Seguridad.<br>" +
            "• Continuidad de operación.<br><br>" +
            "Estos conocimientos permiten al estudiante comprender la importancia de mantener los sistemas funcionando de manera adecuada.<br><br>" +
            "También se busca que el estudiante pueda identificar problemas y comprender los procesos necesarios para conservar la operación de un sistema informático.";
    }

    if (materia == 3) {
        titulo.innerHTML = "3. Administración de bases de datos";
        imagen.src = "imagenes/tercer.3.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 3.3<br><br>" +
            "<b>Duración:</b> 180 horas / 6 semanas.<br><br>" +
            "El estudiante profundiza considerablemente en el trabajo con bases de datos.<br><br>" +
            "Aprende a trabajar con sistemas que necesitan almacenar y administrar grandes cantidades de información.<br><br>" +
            "Se estudian aspectos como:<br>" +
            "• Administración.<br>" +
            "• Organización.<br>" +
            "• Consultas.<br>" +
            "• Seguridad.<br>" +
            "• Mantenimiento.<br>" +
            "• Integridad de información.<br><br>" +
            "Esto permite desarrollar conocimientos necesarios para administrar información de manera organizada y segura.<br><br>" +
            "El estudiante comprende la importancia de mantener los datos correctamente organizados y disponibles para las aplicaciones que los necesitan.";
    }

    if (materia == 4) {
        titulo.innerHTML = "4. Elaboración de documentación de sistemas informáticos";
        imagen.src = "imagenes/tercer.4.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 3.4<br><br>" +
            "<b>Duración:</b> 180 horas / 6 semanas.<br><br>" +
            "Un sistema profesional necesita documentación para explicar su funcionamiento y facilitar su mantenimiento.<br><br>" +
            "El estudiante aprende a documentar aspectos importantes de los sistemas que desarrolla.<br><br>" +
            "Esto puede incluir:<br>" +
            "• Funcionamiento.<br>" +
            "• Instalación.<br>" +
            "• Usuarios.<br>" +
            "• Procesos.<br>" +
            "• Mantenimiento.<br>" +
            "• Componentes.<br>" +
            "• Manuales.<br><br>" +
            "La documentación facilita que otras personas puedan comprender, utilizar y mantener el sistema.<br><br>" +
            "También permite conservar información importante sobre el proyecto para facilitar futuras modificaciones y procesos de mantenimiento.";
    }

    if (materia == 5) {
        titulo.innerHTML = "5. Desarrollo de componentes para dispositivos móviles";
        imagen.src = "imagenes/tercer.5.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 3.5<br><br>" +
            "<b>Duración:</b> 180 horas / 6 semanas.<br><br>" +
            "La formación también se extiende al desarrollo de soluciones para dispositivos móviles.<br><br>" +
            "El estudiante se introduce en el desarrollo de componentes destinados a aplicaciones móviles.<br><br>" +
            "Esto permite comprender cómo adaptar soluciones de software a dispositivos como:<br>" +
            "• Teléfonos inteligentes.<br>" +
            "• Tabletas.<br>" +
            "• Otros dispositivos móviles.<br><br>" +
            "De esta manera, el estudiante amplía sus conocimientos sobre las diferentes plataformas en las que puede funcionar un sistema de software.<br><br>" +
            "El objetivo es comprender las características y necesidades que deben considerarse al desarrollar soluciones destinadas a dispositivos móviles.";
    }

    if (materia == 6) {
        titulo.innerHTML = "6. Conversación en inglés sobre mantenimiento de sistemas informáticos";
        imagen.src = "imagenes/tercer.6.jpeg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 3.6<br><br>" +
            "<b>Duración:</b> 90 horas / 3 semanas.<br><br>" +
            "En tercer año, el inglés técnico se enfoca principalmente en el mantenimiento de sistemas informáticos.<br><br>" +
            "El objetivo es que el estudiante pueda familiarizarse con terminología relacionada con:<br>" +
            "• Sistemas.<br>" +
            "• Mantenimiento.<br>" +
            "• Problemas técnicos.<br>" +
            "• Software.<br>" +
            "• Hardware.<br>" +
            "• Tecnología.<br><br>" +
            "Esto fortalece la capacidad del estudiante para comprender y utilizar vocabulario técnico relacionado con la informática.<br><br>" +
            "Estos conocimientos pueden facilitar la comprensión de documentación, instrucciones y recursos técnicos relacionados con el mantenimiento de sistemas.";
    }

    if (materia == 7) {
        titulo.innerHTML = "7. Puesta en marcha de la microempresa en asociatividad cooperativa";
        imagen.src = "imagenes/tercer.7.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 3.7<br><br>" +
            "<b>Duración:</b> 90 horas / 3 semanas.<br><br>" +
            "Esta etapa lleva el emprendimiento a un nivel más práctico.<br><br>" +
            "El estudiante aprende conceptos relacionados con la puesta en marcha de una iniciativa empresarial.<br><br>" +
            "Esto es importante porque un desarrollador de software puede trabajar como empleado, pero también puede crear sus propios servicios o emprendimientos tecnológicos.<br><br>" +
            "Se busca relacionar los conocimientos técnicos con la organización y desarrollo de una iniciativa empresarial.<br><br>" +
            "El estudiante puede comprender mejor los procesos necesarios para convertir una idea tecnológica en una propuesta organizada y desarrollable.";
    }

    if (materia == 8) {
        titulo.innerHTML = "8. Proyecto innovador de desarrollo de software";
        imagen.src = "imagenes/tercer.8.jpg";
        imagen.alt = "Desarrollo de aplicaciones";
        texto.innerHTML =
            "<b>Código:</b> BTVDS 3.8<br><br>" +
            "<b>Duración:</b> 90 horas / 3 semanas.<br><br>" +
            "Este módulo representa la integración final de muchos de los conocimientos adquiridos durante el bachillerato.<br><br>" +
            "El estudiante debe ser capaz de plantear una solución tecnológica y convertirla en un proyecto.<br><br>" +
            "Un proyecto puede seguir una estructura como:<br><br>" +
            "Problema → investigación → requisitos → diseño → programación → base de datos → pruebas → documentación → presentación.<br><br>" +
            "El proyecto permite integrar diferentes conocimientos relacionados con el desarrollo de software y aplicarlos en una solución tecnológica.<br><br>" +
            "Por eso, el proyecto final representa una demostración de las capacidades adquiridas durante el bachillerato y permite integrar diferentes áreas del desarrollo de software.";
    }

    ventana.style.display = "flex";
}

function cerrarVentana() {
    let ventana = document.getElementById("ventana");
    ventana.style.display = "none";
}