

# arXiv HTML Reader Customizer

The "arXiv HTML Reader Customizer" is a browser extension designed to enhance the reading experience on arXiv's HTML paper reader. This extension allows users to customize the font families used on arXiv's HTML viewer, making it easier to read academic papers according to personal preferences.

## Features

- **Font Customization**: Users can change the font family to their preferred type for a more comfortable reading experience.
- **Simple UI**: A default popup is provided for easy access to customization options.
- **Options Page**: Users can navigate to a dedicated options page to fine-tune their settings.

## Permissions

- **Storage**: The extension requires storage permissions to save the user's customization preferences.
- **Active Tab**: It needs permission to access the active tab to apply the custom font settings.

## Host Permissions

- The extension operates on pages under the `https://arxiv.org/html/*` domain, ensuring that it only affects arXiv's HTML paper reader.

## Content Scripts

- The extension injects a content script (`content.js`) into pages matching the `https://arxiv.org/html/*` pattern to apply the customizations on-the-fly.

## How to Use

1. Install the extension.
2. Click on the extension icon to open the popup and select your preferred font.
3. Alternatively, go to the options page to set more detailed preferences.
4. Enjoy reading papers on arXiv with your customized fonts!

## Develop
To develop the "arXiv HTML Reader Customizer" extension for Google Chrome, follow these steps:

1. **Set up your manifest**: Create a `manifest.json` file in the root directory of your extension's folder. This file should define the metadata, permissions, and other settings required by the extension.

2. **Make changes**: Check [`shared.js`](./shared.js) for most logic and [`popup.html`](./popup.html) for UI.



3. **Test**: Load your extension into Chrome using the "Load unpacked" feature in the Extensions settings (`chrome://extensions/`). Enable Developer Mode, click "Load unpacked", and select your extension's folder.

4. **Debug**: Use Chrome's developer tools to debug your extension. You can inspect the popup, background page, and content scripts.

5. **Add Pull Request!**: Once your changes is ready, feel free to add a pull request.

Remember to consult the [Chrome Extension Developer Guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for detailed instructions and best practices.
