import "react-native";
import "isomorphic-fetch";
import "react-native-gesture-handler/jestSetup";
import "jest-enzyme";

import mockAsyncStorage from "@react-native-community/async-storage/jest/async-storage-mock";
import mockRNCNetInfo from "@react-native-community/netinfo/jest/netinfo-mock.js";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
jest.useFakeTimers();
Enzyme.configure({ adapter: new Adapter() });
jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("@react-native-community/async-storage", () => mockAsyncStorage);
jest.mock("@react-native-firebase/crashlytics", () => {
  return () => ({
    log: jest.fn(),
    recordError: jest.fn(),
  });
});
jest.mock("@react-native-firebase/app", () => {
  return () => ({
    onNotification: jest.fn(),
    onNotificationDisplayed: jest.fn(),
  });
});
jest.mock("@react-native-community/netinfo", () => mockRNCNetInfo);
jest.mock("react-native-device-info", () => {
  return {
    getVersion: jest.fn(() => Promise.resolve("1.0")),
    getApplicationName: jest.fn(() => Promise.resolve("My App")),
  };
});
jest.mock("react-native-text-input-mask", () => ({
  default: jest.fn(),
}));
jest.mock("@react-native-google-signin/google-signin", () => ({}));
jest.mock("react-native-image-crop-picker", () => {
  jest.fn().mockImplementation((result) => Promise.resolve(result));
});
jest.mock("@rnmapbox/maps", () => ({
  setAccessToken: jest.fn(),
}));
//
// jest.mock("react-redux/lib/components/Provider", () =>
//   jest.genMockFromModule("react-redux/lib/components/Provider")
// );
// jest.mock("@callstack/react-theme-provider/lib/createThemeProvider", () =>
//   jest.genMockFromModule(
//     "@callstack/react-theme-provider/lib/createThemeProvider"
//   )
// );
// jest.mock("react-native-paper/lib/commonjs/core/Provider", () =>
//   jest.genMockFromModule("react-native-paper/lib/commonjs/core/Provider")
// );
// jest.mock("react-native-paper/lib/commonjs/components/Portal/PortalHost", () =>
//     jest.genMockFromModule("react-native-paper/lib/commonjs/components/Portal/PortalHost")
// );
