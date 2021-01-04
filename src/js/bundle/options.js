// Icons
import { mainButtonIcon } from '../../images/icons/mainButton';

// Options types
export const modeEnum = {
  SCHOOL: 'school',
  TOGGLE: 'meeting',
};

// Default options configuration
const defaultOptions = {
  mode: modeEnum.SCHOOL,
};

// Elements and state variables
let optionsButton = null;
let modalElement = null;

// Actual options
let options =
  JSON.parse(localStorage.getItem('rhtrh-options')) || defaultOptions;

// Method to save options
const saveOptions = () =>
  localStorage.setItem('rhtrh-options', JSON.stringify(options));

//
//
// Options UI and functions
//
//

//
// Method to create the modal UI
//

const toggleMode = (e) => {
  options.mode = e.target.value;
  saveOptions();
};

const createModal = () => {
  modalElement = document.createElement('div');
  modalElement.classList.add('_rhtrh__modal');

  // Mode text
  const selectModeLabel = document.createElement('p');
  selectModeLabel.innerText = 'Mode:';

  // Options to switch mode
  const selectMode = document.createElement('select');
  selectMode.onchange = toggleMode;

  Object.keys(modeEnum).map((key) => {
    const option = document.createElement('option');
    option.value = modeEnum[key];
    option.innerHTML = modeEnum[key];
    option.selected = modeEnum[key] === options.mode;
    selectMode.appendChild(option);
  });

  // Appends options in the right order
  modalElement.appendChild(selectModeLabel);
  modalElement.appendChild(selectMode);
};

//
// Method to create the div for our button
//
const createButton = (divToAppendStuffTo) => {
  const toggleModal = () => {
    document
      .getElementsByClassName('_rhtrh__modal')[0]
      .classList.toggle('show');
  };

  optionsButton = document.createElement('div');
  optionsButton.classList = divToAppendStuffTo.children[1].classList;
  optionsButton.classList.add('_rhtrh__optionsButton');
  optionsButton.onclick = toggleModal;
  optionsButton.innerHTML = mainButtonIcon;
  divToAppendStuffTo.prepend(optionsButton);
};

//
// Method to add our button element to the bar of google meet
// This function has to be repeated on an interval (https://github.com/Fugiman/google-meet-grid-view/) docet, since, when the extension is first loaded, there is no such bar in the interface
//
export const initOptionsInterface = () => {
  let buttonHasBeenAppended = false;

  // Only executed once
  setInterval(() => {
    // Finds the button bar
    const buttonsBar = document.querySelector('[data-tooltip="Show everyone"]')
      .parentElement;

    if (!buttonHasBeenAppended && buttonsBar) {
      // Change the boolean so this will not run again
      buttonHasBeenAppended = true;

      // Copy the divider from the bar
      buttonsBar.prepend(buttonsBar.children[1].cloneNode());

      // Appends the button
      createButton(buttonsBar);

      // Creates the modal and appends it
      createModal();
      buttonsBar.parentElement.appendChild(modalElement);
    }
  }, 250);
};

//
// Exports to be used in other parts of the code
//

// Export options to be read elsewhere
export const RHTRHoptions = options;
