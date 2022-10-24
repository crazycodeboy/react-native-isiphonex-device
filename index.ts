import { Dimensions, Platform } from "react-native";
interface Device {
  w: number;
  h: number;
}

const DEVICES: Array<Device> = [
  { w: 428, h: 926 }, //Apple iPhone 12 Pro Max, 13 Pro Max
  { w: 390, h: 844 }, //Apple iPhone 12, 12 Pro, 13, 13 Pro
  { w: 375, h: 812 }, //Apple iPhone 12 mini, 13 mini
  { w: 414, h: 896 }, //Apple iPhone 11 Pro Max, XS Max,Apple iPhone 11, XR
  { w: 375, h: 812 }, //Apple iPhone X, XS, 11 Pro
  { w: 430, h: 932 }, //Apple iPhone 14 Pro max,
  { w: 428, h: 926 }, //Apple iPhone 14 plus,
  { w: 393, h: 852 }, //Apple iPhone 14 Pro,
  { w: 390, h: 844 }, //Apple iPhone 14,
];

const getResolvedDimensions = () => {
  const { width, height } = Dimensions.get("window");
  if (width === 0 && height === 0) return Dimensions.get("screen");
  return { width, height };
};

const { height: D_HEIGHT, width: D_WIDTH } = getResolvedDimensions();

export const isIPhoneX = (() => {
  if (Platform.OS === "web" || Platform.OS != "ios") return false;
  for (let device of DEVICES) {
    if (D_HEIGHT === device.h && D_WIDTH === device.w) {
      console.log(`width:${D_WIDTH} height:${D_HEIGHT} isIPhoneX`);
      return true;
    }
  }
  console.log(`width:${D_WIDTH} height:${D_HEIGHT} is not iPhoneX`);
  return false;
})();
