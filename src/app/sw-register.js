// Service Worker Registration Script - DISABLED
export function registerServiceWorker() {
  // Service worker registration is disabled to prevent console errors
  console.log('Service Worker registration is disabled');
  
  // Original implementation (commented out)
  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('/service-worker.js')
  //       .then(registration => {
  //         console.log('Service Worker registered with scope:', registration.scope);
  //       })
  //       .catch(error => {
  //         console.error('Service Worker registration failed:', error);
  //       });
  //   });
  // }
}
