/** PulseWave Studio · AdSense settings (public configuration, no secret tokens).
 *
 * 1. BEFORE APPROVAL: enabled=false. No mock banners and no ad requests.
 *    To verify ownership, add the AdSense meta tag supplied by Google to
 *    the <head> of index.html (or use ads.txt). This does NOT enable ads.
 * 2. AFTER the site's status is Ready in Google AdSense: set enabled=true,
 *    enter your ca-pub-... ID and ad-unit IDs below, then deploy.
 * 3. A placement with an empty/invalid slot ID is hidden automatically.
 *
 * This is a static site: editing this file then deploying is all you need.
 */
window.PULSEWAVE_ADS = {
  enabled: false, // false: hide ALL ad spaces; true: load configured slots
  client: '',     // 'ca-pub-1234567890123456' — replace with YOUR publisher ID
  slots: {
    side: '',     // Desktop side panel (ad unit ID, digits only)
    mobile: '',   // Mobile bottom area
    export: '',   // Export modal
    project: ''   // Project modal
  },
  sizes: {
    side: [320, 100],
    mobile: [320, 50],
    export: 'auto',
    project: 'horizontal'
  },
  placeholders: false // Leave false for a clean site, even during approval
};

// AdSense code is loaded ONLY when advertisements have explicitly been enabled.
// For pre-approval ownership verification use the official meta tag or ads.txt.
if (window.PULSEWAVE_ADS.enabled && /^ca-pub-\d{16}$/.test(window.PULSEWAVE_ADS.client)) {
  const adsense = document.createElement('script');
  adsense.async = true;
  adsense.crossOrigin = 'anonymous';
  adsense.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' +
    encodeURIComponent(window.PULSEWAVE_ADS.client);
  document.head.appendChild(adsense);
}
