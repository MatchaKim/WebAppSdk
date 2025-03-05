import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    console.warn("⏳ Navigation is not ready yet. Retrying in 100ms...");
    setTimeout(() => navigate(name, params), 100);
  }
}

