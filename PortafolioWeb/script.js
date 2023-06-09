// Habilidades
//Lenguajes y frameworks
const habilidades = ['Sociales', 'Comunicativas'];
const tecnologias = ['Java', 'JavaScript', 'Vue.js'];

const habilidadesLista= document.getElementById('habilidades-lista');
const tecnologiasLista = document.getElementById('tecnologias-lista');

habilidades.forEach(habilidad =>{
    const lis = document.createElement('lis');
    lis.textContent = habilidad;
    habilidadesLista.appendChild(lis);
});

tecnologias.forEach(tecnologia => {
  const li = document.createElement('li');
  li.textContent = tecnologia;
  tecnologiasLista.appendChild(li);
});
