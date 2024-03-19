document.addEventListener('DOMContentLoaded', populateFontOptions);
document.getElementById('refresh-button').addEventListener('click', saveAndRefreshPage);

function saveAndRefreshPage() {
  saveOptions();
  refreshPage();
}

function refreshPage() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.reload(tabs[0].id);
  });
}