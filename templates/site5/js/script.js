// script.js
function showWarning(message) {
  const warningBar = document.getElementById('device-warning');
  const warningText = document.getElementById('warning-text');
  warningText.textContent = message;
  warningBar.classList.remove('w3-hide');
}

function hideWarning() {
  document.getElementById('device-warning').classList.add('w3-hide');
}

function setDevice(device) {
  const frameWrapper = document.getElementById('frame-wrapper');
  const deviceInfo = document.getElementById('device-info');
  let width, height, label;

  const isSmallDevice = window.innerWidth < 768;

  if (device === 'tablet' && isSmallDevice) {
    showWarning('Please enable "Desktop Site" in your browser to view tablet layout properly.');
  }

  if (device === 'desktop' && isSmallDevice) {
    showWarning('Please enable "Desktop Site" in your browser to view desktop layout properly.');
  }

  switch (device) {
    case 'mobile':
      width = 375;
      height = 667;
      label = '📱 Mobile - 375x667';
      break;
    case 'tablet':
      width = 768;
      height = 1024;
      label = '💊 Tablet - 768x1024';
      break;
    case 'desktop':
      width = 1280;
      height = 800;
      label = '🖥️ Desktop - 1280x800';
      break;
    case 'resizable':
      width = '100%';
      height = '600px';
      label = '🔧 Custom Size';
      break;
  }

  if (device === 'resizable') {
    frameWrapper.style.width = '100%';
    frameWrapper.style.height = '600px';
    frameWrapper.style.resize = 'both';
    frameWrapper.style.overflow = 'auto';
    frameWrapper.classList.add('resizable-container');
  } else {
    frameWrapper.style.width = width + 'px';
    frameWrapper.style.height = height + 'px';
    frameWrapper.style.resize = 'none';
    frameWrapper.style.overflow = 'hidden';
    frameWrapper.classList.remove('resizable-container');
  }

  deviceInfo.textContent = label;
}
function initPreview() {
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get('site') || 'site1';
  document.getElementById("preview-frame").src = `templates/${site}/index.html`;

  setDevice('mobile');
}

window.onload = initPreview;
