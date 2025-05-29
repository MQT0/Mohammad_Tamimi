// script.js

function setDevice(type) {
  const wrapper = document.getElementById("frame-wrapper");
  const info = document.getElementById("device-info");

  // Default: reset styles
  wrapper.style.resize = 'none';
  wrapper.style.width = '';
  wrapper.style.height = '';
  wrapper.className = 'device-frame';

  if (type === 'mobile') {
    wrapper.style.width = '375px';
    wrapper.style.height = '667px';
    info.innerText = '📱 Mobile - 375x667';
  } else if (type === 'tablet') {
    wrapper.style.width = '768px';
    wrapper.style.height = '1024px';
    info.innerText = '💊 Tablet - 768x1024';
  } else if (type === 'desktop') {
    wrapper.style.width = '1000px';
    wrapper.style.height = '800px';
    info.innerText = '🖥️ Desktop - 1000x800';
  } else if (type === 'resizable') {
    wrapper.className = 'resizable-container';
    wrapper.style.resize = 'both';
    wrapper.style.width = '600px';
    wrapper.style.height = '500px';
    info.innerText = '🔧 Custom Size - Drag to resize';
  }
}




// Initialize preview frame src and default device
function initPreview() {
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get('site') || 'site1';
  document.getElementById("preview-frame").src = `templates/${site}/index.html`;

  setDevice('mobile');
}

window.onload = initPreview;
