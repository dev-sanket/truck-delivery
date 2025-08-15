import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard';
const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'vehicle care',
  webDir: 'dist',
    plugins: {
    Keyboard: {
    resize: KeyboardResize.None,
    resizeOnFullScreen: false
    }
  }
};

export default config;
