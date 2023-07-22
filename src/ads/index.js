import TagManager from 'react-gtm-module';

export const initGAds = () => {
  console.log('initGAds');
  const tagManagerArgs = {
      gtmId: 'GTM-KBR3ZNDL', // Update this to your Google Tag Manager ID
      dataLayer: {
        js: new Date(),
      },
    };

    // Initialize Google Tag Manager
    TagManager.initialize(tagManagerArgs);
};

export const gtag_report_conversion = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'conversion',
      google_conversion_id: '11266189727',
      google_conversion_label: 'II07COiG670YEJ_Tkfwp',
      google_conversion_value: 1
    }
  });
  return false;
};
