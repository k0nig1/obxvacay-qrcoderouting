import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonSpinner, IonButton } from '@ionic/react';

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
 * Modern iPads (iPadOS 13+) report a desktop "Macintosh" user-agent, so the
 * naive /iPad/ test misses them. A Mac with a touch screen is really an iPad.
 */
const isIOS = (ua: string): boolean =>
  /iPad|iPhone|iPod/.test(ua) ||
  (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);

const RedirectPage: React.FC = () => {
  // Genuine desktop visitors have no app to open, so we show store buttons
  // instead of redirecting (the old self-referential fallback caused a loop).
  const [showChooser, setShowChooser] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href = STORE_LINKS.android;
    } else if (isIOS(userAgent)) {
      window.location.href = STORE_LINKS.ios;
    } else {
      setShowChooser(true);
    }
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          {showChooser ? (
            <>
              <p style={{ marginBottom: '20px', textAlign: 'center' }}>
                Get the OBX Vacay app:
              </p>
              <IonButton href={STORE_LINKS.ios}>App Store (iPhone &amp; iPad)</IonButton>
              <IonButton href={STORE_LINKS.android}>Google Play (Android)</IonButton>
            </>
          ) : (
            <>
              <IonSpinner name="crescent" />
              <p style={{ marginTop: '20px', textAlign: 'center' }}>
                Thanks for checking out our app! Redirecting you to the app store&hellip;
              </p>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RedirectPage;
