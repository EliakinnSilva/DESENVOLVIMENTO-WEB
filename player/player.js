const playlist = document.getElementById("playlist");
const player = document.getElementById("player");
const links = playlist.getElementsByTagName("a");
const len = links.length;
const nextBtn = document.createElement("button");
nextBtn.innerText = "Next";
nextBtn.addEventListener("click", playNext);

player.addEventListener("ended", playNext);

// reproduz a primeira música ao carregar a página
player.src = links[0].href;
player.play();

// adiciona um evento de clique a cada música na lista
for (let i=0; i<len; i++) {
  links[i].onclick = function(e) {
    e.preventDefault();
    player.src = this.href;
    player.play();
  }
}

// adiciona um evento para tocar a próxima música quando a atual terminar
function playNext() {
  const current = document.querySelector("a[href='" + player.src + "']").parentNode;
  const next = current.nextElementSibling || links[0].parentNode;
  player.src = next.getElementsByTagName("a")[0].href;
  player.play();
}

// adiciona o botão "Next" aos controles do player
player.parentNode.insertBefore(nextBtn, player.nextSibling);
