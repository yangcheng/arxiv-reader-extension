chrome.storage.sync.get({
    headingsFontFamily: '',
    textFontFamily: '',
    tocFontFamily: '',
    otherFontFamily: ''
  }, function(fontFamilies) {
    const style = document.createElement('style');
    let cssRules = '';
  
    if (fontFamilies.headingsFontFamily) {
      cssRules += `--headings-font-family: ${fontFamilies.headingsFontFamily};`;
    }
    if (fontFamilies.textFontFamily) {
      cssRules += `--text-font-family: ${fontFamilies.textFontFamily};`;
    }
    if (fontFamilies.tocFontFamily) {
      cssRules += `--toc-font-family: ${fontFamilies.tocFontFamily};`;
    }
    if (fontFamilies.otherFontFamily) {
      cssRules += `--other-font-family: ${fontFamilies.otherFontFamily};`;
    }
  
    if (cssRules) {
      style.textContent = `:root { ${cssRules} }`;
      document.head.appendChild(style);
    }
  });