// Import tfjs
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import * as handpose from "@tensorflow-models/handpose";

// Import fingerpose
import * as fp from "fingerpose";

// Import local modules
import { initCamera } from "./initCamera";
import { optimizeCamera } from "./optimizeCamera";
import { estimateHands } from "./estimateHands";
import { Stats } from "./stats";
import handRaiseDescription from "./handRaise";

// Options
import { initOptionsInterface } from "./options";

// Style
import { injectStyle } from "./style";

// Initialize the video
let video = null;

// Initialize tthe fps Stats
const stats = new Stats();

// Main function
const main = async () => {
  console.log("Starting predictions");

  // Loads the model
  const model = await handpose.load();
  const GE = new fp.GestureEstimator([handRaiseDescription]);

  // Recursive funtion to continuously re-estimate the gestures
  const recurringUpdateFrameCallback = async () => {
    stats.begin();
    await estimateHands(model, GE, video);
    stats.end();
    window.requestAnimationFrame(
      async () => await recurringUpdateFrameCallback(model)
    );
  };

  recurringUpdateFrameCallback();
};

// Call the camera intialization on script loaded
const start = () => {
  initCamera().then(({ video: returnedVideo, stream }) => {
    video = returnedVideo;
    video.play();
    video.addEventListener("loadeddata", () => {
      console.log("Camera is ready");
      optimizeCamera(video, stream, stats);
      main();
    });
  });

  // Injects the options interface
  initOptionsInterface();

  // Injects style in page
  injectStyle();
};

start();
