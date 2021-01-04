// Determine the height and width of the stream to use and apply maxWidthRes
export const getInputWidthAndHeight = (stream, maxWidthRes) => {
  const track = stream.getVideoTracks()[0];
  const trackSettings =
    track && track.getSettings() ? track.getSettings() : null;
  if (!trackSettings) {
    console.log(`No tracking settings available.`);
  }
  let width = trackSettings ? trackSettings.width : null;
  let height = trackSettings ? trackSettings.height : null;

  if (!width || !height) {
    return { width: width, height: height };
  }

  if (width > maxWidthRes) {
    const downscaleFactor = width / maxWidthRes;
    width = maxWidthRes;
    height = height / downscaleFactor;
  }

  return { width: width, height: height };
};

// Initialize the camera feed
export const initCamera = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });

  const { width, height } = getInputWidthAndHeight(stream, 640);

  // Paint an artificial video to use for the model prediction
  const video = document.createElement("video");
  video.srcObject = stream;
  video.width = width;
  video.height = height;
  video.setAttribute("muted", true);

  // Gets the video stream and paste on the query selector
  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve({ video, stream });
    };
  });
};
