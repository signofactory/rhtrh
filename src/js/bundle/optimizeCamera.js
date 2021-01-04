import { getInputWidthAndHeight } from './initCamera';

// Default resolutions to switch to
const resolutions = [425, 640, 768, 800];

// Optimize model with check on FPS
export const optimizeCamera = async (video, stream, stats) => {
  const average = (array) => array.reduce((a, b) => a + b) / array.length;

  const recurringFpsCheck = async () => {
    const fpsLog = stats.getFpsLog();

    if (fpsLog.length === 5) {
      const currentIndex = resolutions.indexOf(video.width);
      const increment =
        average(fpsLog) < 10 ? -1 : average(fpsLog) > 16 ? +1 : 0;

      if (
        (increment < 0 && currentIndex > 0) ||
        (increment > 0 && currentIndex < resolutions.length - 1)
      ) {
        const { width, height } = getInputWidthAndHeight(
          stream,
          resolutions[currentIndex + increment]
        );

        video.width = width;
        video.height = height;
      }
    }

    setTimeout(recurringFpsCheck, 6000);
  };

  recurringFpsCheck();
};
