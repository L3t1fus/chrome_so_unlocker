window.addEventListener('message', (event) => {
  if (
    event.data.type &&
    event.data.type == 'FROM_PAGE' &&
    event.data.meaning == 'stonehenge'
  ) {
    if (_gsoi) {
      _gsoi.cmd.push(() => {
        _gsoi.require('session', 'article').then((modules) => {
          var session = modules[0];
          var article = modules[1];
          article.release();
        });
      });
    }
  }
});
