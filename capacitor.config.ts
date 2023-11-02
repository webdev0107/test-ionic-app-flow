import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test-app-flow',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: 'cd2a5c3a',
      channel: 'production',
      autoUpdateMethod: 'background',
      maxVersions: 3,
    }
  }
};

export default config;
