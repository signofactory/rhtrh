const extensionApi =
  typeof browser === "object" &&
  typeof browser.runtime === "object" &&
  typeof browser.runtime.getManifest === "function"
    ? browser
    : typeof chrome === "object" &&
      typeof chrome.runtime === "object" &&
      typeof chrome.runtime.getManifest === "function"
    ? chrome
    : console.log(
        'Cannot find extensionApi under namespace "browser" or "chrome"'
      );

const manifestData = extensionApi.runtime.getManifest();
const versionString = "v" + manifestData.version;
document.getElementById("version").innerText = versionString;
