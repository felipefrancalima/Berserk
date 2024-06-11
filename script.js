document.addEventListener('mousemove', function(e) {
    var imagem = document.getElementById('imagem-seguindo');
    imagem.style.left = e.pageX + 'px';
    imagem.style.top = e.pageY + 'px';
});
