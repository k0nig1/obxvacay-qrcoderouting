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
  // Desktop / everything else
  fallback: 'https://obxvacay-qrcoderouting.web.app/',
};

const RedirectPage: React.FC = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href = STORE_LINKS.android;
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = STORE_LINKS.ios;
    } else {
      window.location.href = STORE_LINKS.fallback;
    }
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <IonSpinner name="crescent" />
          <p style={{ marginTop: '20px', textAlign: 'center' }}>
            Thanks for checking out our app! Redirecting you to the app store&hellip;
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RedirectPage;
