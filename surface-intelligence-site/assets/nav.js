(function(){
  const header = `<div class="stripe"></div><header class="top"><div class="wrap nav"><a class="brand" href="/"><small>// Surface Intelligence</small><strong>Property Decision Hub</strong></a><nav class="links"><a href="/">Home</a><a href="/tools/">Free Tools</a><a href="/projects/">Projects</a><a href="/articles/">Articles</a><a href="/contact/">Contact</a><a class="btn" style="padding:11px 16px;font-size:15px" href="/tools/bid-decoder/">Decode a Bid</a></nav></div></header>`;
  const footer = `<footer class="footer"><div class="wrap">Surface Intelligence · Asphalt · Concrete · ADA · Bid Strategy · Built for property managers</div></footer>`;
  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);
})();
