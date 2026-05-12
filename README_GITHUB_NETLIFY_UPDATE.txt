Find Nearby website v8 - GitHub/referral/ads-ready update

This version keeps the final Netlify-ready multi-page website, and also preserves the useful files from the older GitHub Pages setup:

1. app-ads.txt
   - Must stay at the website root.
   - Public URL should be: https://www.findnearby.co.uk/app-ads.txt
   - This supports Google AdMob app-ads verification.

2. get/index.html
   - Must stay at /get/index.html.
   - Public URL should be: https://www.findnearby.co.uk/get?code=TEST123
   - This preserves the referral/smart-link page from the old GitHub setup.
   - The page redirects Android users to Google Play with the referral parameter and iOS users to the App Store.

3. _redirects
   - Includes Netlify rules for /privacy, /terms, /features, /get and other clean URLs.
   - Keeps old #privacy and #terms compatibility via JavaScript in index.html.

Do not use the old root index.html from the GitHub Pages repo, because it only redirects to Carrd. This new index.html is the real homepage.

CNAME note:
- The old GitHub Pages repo had a CNAME file for findnearby.co.uk.
- This is not needed for manual Netlify deployment.
- Once Netlify is live, manage the domain in Netlify and your DNS provider instead.
