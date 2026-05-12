(function () {
  var APP_STORE_URL = 'https://apps.apple.com/app/id6757857891';
  var GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.find_nearby';

  function getDeviceTarget() {
    var ua = navigator.userAgent || '';
    var platform = navigator.platform || '';
    var maxTouchPoints = navigator.maxTouchPoints || 0;

    var isIOS = /iPad|iPhone|iPod/i.test(ua) || (platform === 'MacIntel' && maxTouchPoints > 1);
    var isMac = /Mac/i.test(platform) || /Macintosh|Mac OS X/i.test(ua);
    var isAndroid = /Android/i.test(ua);
    var isWindows = /Win/i.test(platform) || /Windows/i.test(ua);

    if (isIOS || isMac) return APP_STORE_URL;
    if (isAndroid || isWindows) return GOOGLE_PLAY_URL;
    return null;
  }

  function scrollToDownloadButtons() {
    var downloadSection = document.getElementById('download');
    if (!downloadSection) {
      window.location.href = 'index.html#download';
      return;
    }

    downloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function handleDownloadClick(event) {
    var targetUrl = getDeviceTarget();

    if (targetUrl) {
      event.preventDefault();
      window.location.href = targetUrl;
      return;
    }

    event.preventDefault();
    scrollToDownloadButtons();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.smart-download-link');
    buttons.forEach(function (button) {
      button.addEventListener('click', handleDownloadClick);
    });

    if (window.location.hash && window.location.hash.toLowerCase() === '#download') {
      window.setTimeout(scrollToDownloadButtons, 80);
    }
  });
})();
