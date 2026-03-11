/**
 * Firebase Configuration — NKC Builders
 * ---------------------------------------------------------------
 * Shared Firebase project (godivatech-websites) used across all
 * Godivatech client sites. Data is namespaced per-site in Firestore:
 *   websites / nkc-builders / {collection} / {doc}
 *
 * All credentials are loaded from Vite env variables (VITE_FIREBASE_*)
 * so secrets are never hardcoded in source.
 * ---------------------------------------------------------------
 */

import { initializeApp, getApps, getApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";

// ── Environment-sourced config ─────────────────────────────────
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Guard against hot-reload re-initialization
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

// ── Site identifier ────────────────────────────────────────────
const SITE_ID = "nkc-builders" as const;

// ── Types ─────────────────────────────────────────────────────
export type FormSubmissionResult =
    | { success: true; id: string }
    | { success: false; error: unknown };

// ── Shared submission helper ───────────────────────────────────
/**
 * Writes any form data into:
 *   Firestore → websites / nkc-builders / {formName}
 *
 * @param formName  Slug for the form (e.g. "contact-submissions")
 * @param data      Plain object with the fields to store
 */
export async function submitWebsiteForm(
    formName: string,
    data: Record<string, unknown>
): Promise<FormSubmissionResult> {
    try {
        const ref = collection(db, "websites", SITE_ID, formName);
        const docRef = await addDoc(ref, {
            ...data,
            timestamp: serverTimestamp(),
            source: formName,
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error(`[Firebase] Failed to submit "${formName}":`, error);
        return { success: false, error };
    }
}
