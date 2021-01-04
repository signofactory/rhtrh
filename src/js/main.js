function run() {
  const s = document.createElement('script');
  s.src = chrome.runtime.getURL('js/bundle.js');
  document.head.appendChild(s);
}

run();
