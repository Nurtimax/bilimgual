/* eslint-disable no-undef */
import 'dotenv';

export const FIREBASE_REALTIME_URL =
   process.env.NEXT_PUBLIC_FIREBASE_REALTIME_URL || process.env.REACT_APP_FIREBASE_REALTIME_URL || '';

export const SENTRY_DNS_URL = process.env.NEXT_PUBLIC_SENTRY_URL || '';
