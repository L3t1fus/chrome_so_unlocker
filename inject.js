(function () {
  if (!document.getElementById('__fuck')) {
    console.log('Loading...');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.id = '__fuck';
    po.src = chrome.extension.getURL('gsoi.js');
    document.body.appendChild(po);
  }

  setTimeout(() => {
    console.log('Lauching....');

    window.postMessage({ type: 'FROM_PAGE', meaning: 'stonehenge' });
  }, 500);
})();
