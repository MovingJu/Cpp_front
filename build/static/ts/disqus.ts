var disqus_config = function () {
  this.page.url = 'http://localhost:8080/try_it_out.html';
  this.page.identifier = 'http://localhost:8080/try_it_out.html';
};
(function () {
  var d = document, s = d.createElement('script');
  s.src = 'https://MovingJu.disqus.com/embed.js';
  s.setAttribute('data-timestamp', (+new Date()).toString());
  (d.head || d.body).appendChild(s);
})();