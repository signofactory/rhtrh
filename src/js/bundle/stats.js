// FPS monitoring
export const Stats = function () {
  var beginTime = (performance || Date).now(),
    prevTime = beginTime,
    frames = 0,
    fps = 0,
    fpsLog = [];

  return {
    getFpsLog: function () {
      return fpsLog;
    },

    begin: function () {
      beginTime = (performance || Date).now();
    },

    end: function () {
      frames++;

      var time = (performance || Date).now();

      if (time >= prevTime + 1000) {
        fps = (frames * 1000) / (time - prevTime);
        fpsLog.push(fps);
        fpsLog.splice(0, fpsLog.length - 5);
        prevTime = time;
        frames = 0;
      }

      return time;
    },

    update: function () {
      beginTime = this.end();
    },
  };
};
