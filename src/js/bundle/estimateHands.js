// Imports the options from settings

import { RHTRHoptions, modeEnum } from './options';

// Keep track of whether there was a hand in the frame or not
let handInFrame = false;

// Decides whether to toggle the option or not
const handleToggleBasedOnOptionsAndSetHandInFrame = () => {
  // School mode: hand has to be kept up all the time
  if (RHTRHoptions.mode === modeEnum.SCHOOL) {
    if (handInFrame) {
      const element = document.querySelector('[aria-label="Raise hand"]');
      if (element) {
        element.click();
      }
    } else {
      const element = document.querySelector('[aria-label="Lower hand"]');
      if (element && !handInFrame) {
        element.click();
      }
    }
  }

  // Toggle mode: hand up toggles the element
  if (RHTRHoptions.mode === modeEnum.TOGGLE) {
    const element =
      document.querySelector('[aria-label="Raise hand"]') ||
      document.querySelector('[aria-label="Lower hand"]');

    if (element && handInFrame) {
      element.click();
    }
  }
};

// Main estimation loop
export const estimateHands = async (model, GE, video) => {
  // Checks that we are in the meeting view as at least one of the
  const isInMeeting =
    document.querySelector('[aria-label="Raise hand"]') ||
    document.querySelector('[aria-label="Lower hand"]');

  if (isInMeeting) {
    // Get hand landmarks from video
    // Note: Handpose currently only detects one hand at a time
    // Therefore the maximum number of predictions is 1
    const predictions = await model.estimateHands(video, true);

    // If a hand is detected
    // - Clicks on the "Raise hand" button if the gesture detected is a hand-raise
    // - Clicks on the "Lower hand" if the gesture detected is not a hand-raise
    // If no hand is detected clicks on the "Lower hand" button
    if (predictions.length > 0) {
      for (let i = 0; i < predictions.length; i++) {
        // Now estimate gestures based on landmarks using a minimum confidence of 7.5/10
        const est = GE.estimate(predictions[i].landmarks, 7.5);

        if (est.gestures.length > 0) {
          if (
            est.gestures.some((gesture) => gesture.name === 'hand-raise') &&
            !handInFrame
          ) {
            handInFrame = true;
            handleToggleBasedOnOptionsAndSetHandInFrame();
          }
        } else {
          handInFrame = false;
          handleToggleBasedOnOptionsAndSetHandInFrame();
        }
      }
    } else {
      handInFrame = false;
      handleToggleBasedOnOptionsAndSetHandInFrame();
    }
  }
};
