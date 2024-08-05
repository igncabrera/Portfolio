var tryAccess = 0;
var mainContent = document.getElementById('mainContent');

document.getElementById("Apps").addEventListener("click", function(){
  tryAccess++; 
  if (tryAccess >= 5) {
    tryAccess = 0;
    mainContent.innerHTML = "";
    let contenedorVideos = document.createElement('div');
    contenedorVideos.id = 'main-Container';
    contenedorVideos.className = 'main-Container';
    mainContent.appendChild(contenedorVideos);

    for (var i = 1; i <= 6; i++) {
      let contenedorVideo = document.createElement('div');
      contenedorVideo.className = 'sub-Container';
  
      let videoElemento = document.createElement('video');
      videoElemento.controls = true;
  
      let sourceElemento = document.createElement('source');
      sourceElemento.src = 'src' + i + '.mp4';
      sourceElemento.type = 'video/mp4';
  
      videoElemento.appendChild(sourceElemento);
      contenedorVideo.appendChild(videoElemento);
      contenedorVideos.appendChild(contenedorVideo);
    }
  } 
});

document.getElementById("sortArrays").addEventListener("click", function(){
  mainContent.innerHTML = "";
  let titleContainer = document.createElement('h1');
  titleContainer.textContent = 'Ordenar arreglos de objetos';
  mainContent.appendChild(titleContainer);

  let algorithmsContainer = document.createElement('div');
  algorithmsContainer.id = 'main-Container';
  algorithmsContainer.className = 'main-Container';
  mainContent.appendChild(algorithmsContainer);

  for (var i = 1; i <= 6; i++) {
    let algorithm = document.createElement('div');
    algorithm.className = 'sub-Container';
    
    let title = document.createElement('h2');
    title.textContent = 'Algoritmo ' + i;

    let objectInput = document.createElement('input');
    objectInput.type = 'file';
    objectInput.accept = '.json';
    objectInput.id = 'objectInput' + i;

    algorithm.appendChild(objectInput);
    algorithm.appendChild(title);
    algorithmsContainer.appendChild(algorithm);
  }

});

document.getElementById("findArrays").addEventListener("click", function(){
  mainContent.innerHTML = "";
  let titleContainer = document.createElement('h1');
  titleContainer.textContent = 'Buscar arreglos de objetos';
  mainContent.appendChild(titleContainer);
  
});
