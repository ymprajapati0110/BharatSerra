/**
 * 📘 WHAT THIS FILE DOES:
 *
 * Fetches equipment data from a PRIVATE Google Sheet via Google Apps Script.
 *
 * HOW IT WORKS:
 * ─────────────────────────────────────────────────────────────
 * Google Sheet (PRIVATE, only client can edit)
 *       ↓
 * Google Apps Script (deployed as Web App, acts as a free API)
 *       ↓
 * This function fetches JSON from the Apps Script URL
 *       ↓
 * Your website displays the data
 * ─────────────────────────────────────────────────────────────
 *
 * WHY NOT "Publish to Web" CSV?
 * - "Publish to web" makes the sheet publicly readable via URL
 * - With Apps Script, the sheet stays 100% private
 * - Only the deployed script can read it, and it returns only the data we want
 *
 * SETUP STEPS (one-time):
 * 1. Open your Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Paste the script from the instructions below
 * 4. Deploy as Web App (Execute as: Me, Access: Anyone)
 * 5. Copy the Web App URL and paste it below
 */

// 🔗 PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxQ2ZMt-sIueaWzjzUY0W8eVyqX9Z4bmPKTa6H-D7HN5NiXqCtnPq8I5U6yEj5vPtYA/exec";

export async function fetchEquipment() {
    // No caching — always fetch fresh data so client's changes reflect immediately
    console.log("🌐 Fetching equipment data from Google Sheets...");

    try {
        const response = await fetch(APPS_SCRIPT_URL);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const equipment = await response.json();

        console.log(`✅ Loaded ${equipment.length} equipment items`);
        return equipment;
    } catch (error) {
        console.error("❌ Error fetching equipment data:", error);
        return [];
    }
}
