import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c408a396b83a40d49eb61b589d012a70',
  appName: 'Autometa - कॉल असिस्टेंट',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#3366ff",
      showSpinner: true,
      spinnerColor: "#ffffff"
    }
  }
};

export default config;