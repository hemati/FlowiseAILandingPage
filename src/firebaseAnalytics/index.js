import { logEvent, setAnalyticsCollectionEnabled } from 'firebase/analytics';
import { analytics } from '../firebaseSetup';

export const logFirebaseEvent = (eventName) => {
    if(analytics){
        // Log the event to Firebase Analytics
        logEvent(analytics, eventName);
    }
};
