# RHTRH - Raise Hand To Raise Hand

**tl;dr: Raise your hand in real life to raise your hand on Google Meet.**

RHTRH is a Google Chrome extension to add real-time hand raise tracking to Google Meet through Artifical Intelligence / Computer Vision. It supports all Chromium browsers (inc. Google Chrome, Microsoft Edge, Chromium, etc.). RHTRH is optimized to monitor its performance while running and should deliver an enjoyable experience on all systems.

<table>
  <tr>
    <td width="50%"><img src="https://media.giphy.com/media/LoFGaSRrCzOOs1urZb/giphy.gif" /></td>
    <td width="50%"><img src="https://media.giphy.com/media/eaHwAaKI6rYeTiPqEv/giphy.gif" /></td>
  </tr>
</table>

You can download the latest version of the extension for free from the [Chrome Extensions Web Store](https://chrome.google.com/webstore/category/extensions?hl=en). See below for a guide on how to install on Microsoft Edge or how to compile it for yourself. The extension currently works on Google Meet only for accounts that have the "Raise hand" feature enabled (Google Workspace). In a future version, we may add a custom solution to bring this feature to all accounts.

If you feel generous, please consider donating.

<a href="https://buymeacoffee.com/signofactory" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## Installation

### Google Chrome

Download the latest version of the extension from the [Chrome Extensions Web Store](https://chrome.google.com/webstore/category/extensions?hl=en).

### Microsoft Edge

1. Click the Settings (threed-dotted) button in the top-right.
2. Select the Extensions option.
3. Turn on the `Allow extensions from other stores` toggle switch.
4. Click the `Allow` button.
5. Download the latest version of the extension from the [Chrome Extensions Web Store](https://chrome.google.com/webstore/category/extensions?hl=en).

### Compile the extension manually

1. Clone the repo from Github

```
git clone https://github.com/signofactory/rhth
```

2. Install dependencies using npm / yarn:

```
yarn install
```

3. Run bundling script to build the source code from src folder to dist folder

```
yarn build
```

or use the watch script to have webpack look over your shoulders while making edits to your files. Changes to any js file will be immediately transpiled to the `dist` folder, while changed to html / json files have to be carried manually (stop the watch script and run it again for convenience):

```
yarn watch
```

4. Load the packed / unpacked extension from the `dist` folder onto your browser of choice. On Chrome, you can do so by going into the extension page, enabling `Developer Mode` and clicking onto `Load unpacked`.

5. Have fun!

## Usage and settings

The extension is enabled by default and automatically optimized to minimize impact on performance / battery life. There are simple settings to choose operating mode. See below:

![](https://media.giphy.com/media/gpBcnwDaUHd6wdmQwT/giphy.gif)

After the extension has been successfully installed, a new hand button will appear in the top-right bar on every Google Meet meeting. Clicking the hand icon allows access to the settings for the extension. There are currently to working modes supported: school and meeting. See below for instructions.

### School mode

![](https://media.giphy.com/media/LoFGaSRrCzOOs1urZb/giphy.gif)

School mode is designed to mimic the experience that people have at school / university when they want to ask a quesion:

1. Raise a hand to "Raise hand" on Google Meet
2. Lower your hand to "Lower hand" on Google Meet

### Meeting mode

![](https://media.giphy.com/media/eaHwAaKI6rYeTiPqEv/giphy.gif)

Meeting mode is designed for people who want to keep taking their notes while waiting for their turn to speak and ask questions:

1. Raise a hand to "Raise hand" on Google Meet
2. Raise a hand again to "Lower hand" on Google Meet
3. Rinse and repeat

## Known limitations

- The extension currently slows down significantly the action of entering a meeting (due to the predictive model being loaded while Google Meet is also doing its stuff). Once the model is loaded and our optimizations kick-in, performance should go back to normal — we are working on a solution to lazy load the model and smoothen this behaviour
- The extension is enabled on all meetings, even when there is no "Raise hand" button. We'll fix it soon.

## Authors

- signorettif@: [Twitter](https://twitter.com/signorettif) | [Github](https://github.com/signorettif)
- lorenzosignoretti@: [Twitter](https://twitter.com/lorenzosigno) | [Github](https://github.com/lorenzosignoretti)

## Credits

The extensions would not have been possible without these contributions from the Open Source community:

- [Google's Tensorflow and the tfjs team](https://github.com/tensorflow/tfjs)
- [fingerpose library](https://github.com/andypotato/fingerpose) from @andypotato
- [google-meet-grid-view](https://github.com/Fugiman/google-meet-grid-view) extension from @fugiman for inpiration on the user interface

## Contributing

RHTRH wouldn't have been possible without many amazing projects from the open-source community. While we do not have a formal contribution system in place, anyone willing to contribute is free to open a Pull Request for us to review. Suggestions to improve the code, add new feature, and increase performance are all welcome.

## Privacy Policy

This script does not track any user data.
