'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  // Completely disabled service worker registration for now
  // This prevents errors in the console and doesn't affect core functionality
  
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', () => {
  //       // First check if the service worker file exists
  //       fetch('/service-worker.js')
  //         .then(response => {
  //           if (response.status === 200) {
  //             // File exists, register the service worker
  //             return navigator.serviceWorker.register('/service-worker.js')
  //               .then(registration => {
  //                 console.log('Service Worker registered with scope:', registration.scope);
  //               });
  //           } else {
  //             // File doesn't exist, log a message but don't throw an error
  //             console.log('Service Worker file not found, skipping registration');
  //             return Promise.resolve();
  //           }
  //         })
  //         .catch(error => {
  //           // Only log the error, don't break the application
  //           console.log('Service Worker registration skipped:', error);
  //         });
  //     });
  //   }
  // }, []);

  return null; // This component doesn't render anything
}
