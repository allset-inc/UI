import { isPlatform } from '@ionic/react';
import { StatusBar } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';

export const isAndroid = isPlatform('android');
export const isIos = isPlatform('ios');
export const isMobile = isAndroid || isIos;

export async function setStatusAndNavBarStyles(bgColor: string) {
  await StatusBar.setBackgroundColor({ color: bgColor });
  await NavigationBar.setColor({ color: bgColor });
}