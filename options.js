document.addEventListener('DOMContentLoaded', populateFontOptions);
document.getElementById('save-button').addEventListener('click', saveOptions);
document.getElementById('reset-button').addEventListener('click', resetOptions);

function resetOptions() {
  chrome.storage.sync.remove([
    'headingsFontFamily',
    'textFontFamily',
    'tocFontFamily',
    'otherFontFamily'
  ], function() {
    console.log('Font families reset to default.');
    populateFontOptions();
  });
}