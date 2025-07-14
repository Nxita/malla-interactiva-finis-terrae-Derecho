// Lista de ramos con sus dependencias const ramos = [ { nombre: "Introducción al Derecho I", abre: ["Introducción al Derecho II", "Fundamentos Derecho Procesal y Derecho Procesal Orgánico"] }, { nombre: "Historia del derecho I", abre: ["Historia del derecho II"] }, { nombre: "Derecho Romano I", abre: ["Derecho Romano II", "Fundamentos Derecho Procesal y Derecho Procesal Orgánico"] }, { nombre: "Derecho Político I", abre: ["Derecho Político II"] }, { nombre: "Expresión Oral y Escrita I", abre: ["Expresión Oral y Escrita II"] }, { nombre: "Identidad Personal" },

{ nombre: "Introducción al Derecho II", abre: ["Acto Jurídico", "Derecho Laboral I", "Derecho Natural I", "Derecho Económico"] }, { nombre: "Historia del derecho II", abre: ["Derecho Natural I"] }, { nombre: "Derecho Romano II" }, { nombre: "Derecho Político II", abre: ["Derecho Constitucional I"] }, { nombre: "Fundamentos Derecho Procesal y Derecho Procesal Orgánico", abre: ["Disposiciones Comunes"] }, { nombre: "Expresión Oral y Escrita II" }, { nombre: "Inglés I", abre: ["Inglés II"] },

{ nombre: "Acto Jurídico", abre: ["Derecho de Bienes", "Derecho Penal I", "Seminario de Integración I"] }, { nombre: "Derecho Constitucional I", abre: ["Derecho Constitucional II", "Seminario de Integración I"] }, { nombre: "Derecho Laboral I", abre: ["Derecho Laboral II"] }, { nombre: "Disposiciones Comunes", abre: ["Procedimiento Ordinario Civil", "Seminario de Integración I"] }, { nombre: "Derecho Natural I", abre: ["Derecho Natural II"] }, { nombre: "Inglés II", abre: ["Inglés III"] },

{ nombre: "Derecho de Bienes", abre: ["Derecho de las Obligaciones y Teoría General del Contrato"] }, { nombre: "Derecho Constitucional II", abre: ["Derecho Administrativo I"] }, { nombre: "Derecho Laboral II" }, { nombre: "Procedimiento Ordinario Civil", abre: ["Procedimiento Ejecutivo y Procedimientos Especiales"] }, { nombre: "Derecho Natural II", abre: ["Filosofía del Derecho"] }, { nombre: "Inglés III", abre: ["Seminario de Investigación Jurídica"] },

{ nombre: "Derecho de las Obligaciones y Teoría General del Contrato", abre: ["Responsabilidad Civil"] }, { nombre: "Derecho Administrativo I", abre: ["Derecho Administrativo II"] }, { nombre: "Derecho Económico", abre: ["Derecho Comercial I"] }, { nombre: "Procedimiento Ejecutivo y Procedimientos Especiales", abre: ["Recursos Procesales"] }, { nombre: "Derecho Penal I", abre: ["Derecho Penal II"] },

{ nombre: "Seminario de Integración I", abre: ["Seminario de Integración II"] }, { nombre: "Responsabilidad Civil", abre: ["Contratos Civiles"] }, { nombre: "Derecho Administrativo II", abre: ["Derecho Internacional Público I"] }, { nombre: "Derecho Comercial I", abre: ["Derecho Comercial II - Sociedades"] }, { nombre: "Recursos Procesales", abre: ["Derecho Procesal Penal"] }, { nombre: "Derecho Penal II", abre: ["Derecho Penal III"] }, { nombre: "Apreciación de los Lenguajes Artísticos" },

{ nombre: "Contratos Civiles", abre: ["Derecho de Familia", "Seminario de Integración II"] }, { nombre: "Derecho Internacional Público I", abre: ["Derecho Internacional Público II", "Seminario de Integración II"] }, { nombre: "Derecho Comercial II - Sociedades", abre: ["Derecho Concursal"] }, { nombre: "Derecho Procesal Penal", abre: ["Pre-clinica Jurídica", "Seminario de Integración II"] }, { nombre: "Derecho Penal III" },

{ nombre: "Derecho de Familia", abre: ["Derecho Sucesorio"] }, { nombre: "Derecho Internacional Público II", abre: ["Fundamentos Juridicos de los Recursos Naturales", "Derecho Internacional Privado"] }, { nombre: "Derecho Concursal", abre: ["Derecho Tributario I"] }, { nombre: "Pre-clinica Jurídica", abre: ["Clínica Jurídica I", "Seminario de Investigación Jurídica"] }, { nombre: "Seminario de Integración II", abre: ["Seminario de Investigación Jurídica"] }, { nombre: "Persona y Trascendencia" },

{ nombre: "Filosofía del Derecho", abre: ["Cátedra San Alberto Hurtado"] }, { nombre: "Derecho Sucesorio", abre: ["Derecho Internacional Privado"] }, { nombre: "Fundamentos Juridicos de los Recursos Naturales", abre: ["Fundamentos Juridicos del Derecho Ambiental"] }, { nombre: "Derecho Tributario I", abre: ["Derecho Tributario II"] }, { nombre: "Clínica Jurídica I", abre: ["Clínica Jurídica II"] }, { nombre: "Seminario de Investigación Jurídica" },

{ nombre: "Cátedra San Alberto Hurtado" }, { nombre: "Derecho Internacional Privado" }, { nombre: "Fundamentos Juridicos del Derecho Ambiental" }, { nombre: "Derecho Tributario II" }, { nombre: "Clínica Jurídica II" } ];

const mallaDiv = document.getElementById("malla"); const template = document.getElementById("ramo-template"); const botones = {};

ramos.forEach(r => { const clon = template.content.cloneNode(true); const div = clon.querySelector(".ramo"); const btn = clon.querySelector(".boton-ramo"); div.dataset.nombre = r.nombre; btn.textContent = r.nombre; btn.disabled = !r.abre && !ramos.some(x => x.abre?.includes(r.nombre)); mallaDiv.appendChild(clon); botones[r.nombre] = btn;

btn.addEventListener("click", () => { btn.classList.toggle("aprobado"); btn.disabled = false;

if (r.abre) {
  r.abre.forEach(nombre => {
    const botonDependiente = botones[nombre];
    if (botonDependiente) botonDependiente.disabled = false;
  });
}

}); });

