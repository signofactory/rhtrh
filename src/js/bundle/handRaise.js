import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from 'fingerpose';

// describe victory gesture ✌️
const handRaiseDescription = new GestureDescription('hand-raise');

// thumb:
handRaiseDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
handRaiseDescription.addDirection(
  Finger.Thumb,
  FingerDirection.VerticalUp,
  0.75
);
handRaiseDescription.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalUpRight,
  0.4
);
handRaiseDescription.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalUpLeft,
  0.4
);

// index:
handRaiseDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
handRaiseDescription.addDirection(
  Finger.Index,
  FingerDirection.VerticalUp,
  0.75
);
handRaiseDescription.addDirection(
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  0.4
);
handRaiseDescription.addDirection(
  Finger.Index,
  FingerDirection.DiagonalUpLeft,
  0.4
);

// middle:
handRaiseDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
handRaiseDescription.addDirection(
  Finger.Middle,
  FingerDirection.VerticalUp,
  0.75
);

// ring:
handRaiseDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
handRaiseDescription.addDirection(
  Finger.Ring,
  FingerDirection.VerticalUp,
  0.75
);

// pinky:
handRaiseDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
handRaiseDescription.addDirection(
  Finger.Pinky,
  FingerDirection.VerticalUp,
  0.75
);
handRaiseDescription.addDirection(
  Finger.Pinky,
  FingerDirection.DiagonalUpRight,
  0.4
);
handRaiseDescription.addDirection(
  Finger.Pinky,
  FingerDirection.DiagonalUpLeft,
  0.4
);

// give additional weight to index and ring fingers
handRaiseDescription.setWeight(Finger.Index, 2);
handRaiseDescription.setWeight(Finger.Ring, 2);

export default handRaiseDescription;
