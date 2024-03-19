function populateFontOptions() {
    const fontList = [
      '', 'Arial', 'Arial Black', 'Arial Narrow', 'Calibri', 'Cambria', 'Cambria Math',
      'Candara', 'Comic Sans MS', 'Consolas', 'Constantia', 'Corbel', 'Courier New',
      'Georgia', 'Helvetica', 'Impact', 'Lucida Console', 'Lucida Sans', 'Lucida Sans Unicode',
      'Microsoft Sans Serif', 'Palatino Linotype', 'Segoe Print', 'Segoe Script', 'Segoe UI',
      'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol', 'Tahoma', 'Times New Roman',
      'Trebuchet MS', 'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
    ];
  
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(function(selectElement) {
      fontList.forEach(function(font) {
        const option = document.createElement('option');
        option.value = font;
        option.text = font ? font : 'Default';
        selectElement.appendChild(option);
      });
    });
  
    chrome.storage.sync.get({
      headingsFontFamily: '',
      textFontFamily: '',
      tocFontFamily: '',
      otherFontFamily: ''
    }, function(fontFamilies) {
      document.getElementById('headings-font-family').value = fontFamilies.headingsFontFamily;
      document.getElementById('text-font-family').value = fontFamilies.textFontFamily;
      document.getElementById('toc-font-family').value = fontFamilies.tocFontFamily;
      document.getElementById('other-font-family').value = fontFamilies.otherFontFamily;
    });
  }
  
  function saveOptions() {
    const headingsFontFamily = document.getElementById('headings-font-family').value;
    const textFontFamily = document.getElementById('text-font-family').value;
    const tocFontFamily = document.getElementById('toc-font-family').value;
    const otherFontFamily = document.getElementById('other-font-family').value;
  
    chrome.storage.sync.set({
      headingsFontFamily: headingsFontFamily,
      textFontFamily: textFontFamily,
      tocFontFamily: tocFontFamily,
      otherFontFamily: otherFontFamily
    }, function() {
      console.log('Font families saved.');
    });
  }