import React, { useEffect } from 'react';
import { IonContent, IonPage, IonSpinner } from '@ionic/react';

/**
 * Destinations for the device-aware redirect.
 *
 * The printed QR code points at the deployed site (which lands here), so these
 * are the ONLY values that ever need to change — update a link below and
 * redeploy, and every existing printed QR code keeps working. No reprinting.
 */
const STORE_LINKS = {
  ios: 'https://apps.apple.com/us/app/obxvacay/id6740537702',
  android: 'https://play.google.com/store/apps/details?id=com.ecr.obxvacay',
};

/**
 * Non-native visitors (desktop, and anything that isn't iOS/Android) have no
 * app to open, so we send them to the marketing site. This makes the same QR
 * link safe to share on social channels like Facebook, where most traffic is
 * on a browser rather than a mobile device with the app installed.
 */
const WEBSITE_URL = 'https://obxvacay.com';

/**
 * Modern iPads (iPadOS 13+) report a desktop "Macintosh" user-agent, so the
 * naive /iPad/ test misses them. A Mac with a touch screen is really an iPad.
 */
const isIOS = (ua: string): boolean =>
  /iPad|iPhone|iPod/.test(ua) ||
  (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);

const RedirectPage: React.FC = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href = STORE_LINKS.android;
    } else if (isIOS(userAgent)) {
      window.location.href = STORE_LINKS.ios;
    } else {
      // Non-native device (desktop/social traffic): send to the website.
      window.location.href = WEBSITE_URL;
    }
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <IonSpinner name="crescent" />
          <p style={{ marginTop: '20px', textAlign: 'center' }}>
            Thanks for checking out OBX Vacay! Redirecting you&hellip;
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RedirectPage;
