Find Nearby website v11 download-button update

Changes made:
- Removed the homepage sentence: "Viewing on a computer? Choose the store for your phone."
- Updated the top "Download options" button behaviour:
  - iPhone/iPad/Mac opens the Apple App Store listing.
  - Android/Windows opens the Google Play listing.
  - Unknown devices fall back to the homepage download buttons.
- Added js/download-options.js to keep this behaviour easy to edit later.
- Added CSS scroll-margin for #download so the download buttons stay visible when linked directly.

Still test after upload:
- /#download
- /app-ads.txt
- /get?code=TEST123
- /privacy and /terms
