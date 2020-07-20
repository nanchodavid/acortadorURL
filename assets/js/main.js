

function generarURL(){
  var url = $('#url').val();
  var url_hash = btoa(url);
  mostrarLink(url_hash);
}

function mostrarLink(link){
  var url = btoa(link);

  document.getElementById('message').innerHTML='<div class="alert alert-success" role="alert">'+
  '<h2>¡ Genial !</h2><p>Ya puedes compartir el <b>LINK</b></p><div class="linkGenerate flexbox" id="linkGenerate">'+
  '<input class="input-link" type="text" id="linkHash" name="linkHash" value="http://localhost:3000?u='+url+'" readonly></div>'+
  '<button type=button class="btn btn-primary btn-copy" id="copy-button" data-clipboard-target="#linkHash" onclick="clipBoard()">Copiar</a></div>';
}

function clipBoard() {
  var clipboard = new Clipboard('.btn-copy');

  
}
