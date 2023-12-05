import React, { useEffect } from 'react';

const YourComponent = () => {
   useEffect(() => {
      // Add the Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-V4WF9Z7HM5';
      document.head.appendChild(script);

      script.onload = () => {
         // Initialize Google Analytics
         window.dataLayer = window.dataLayer || [];

         function gtag() {
            window.dataLayer.push(arguments);
         }
         gtag('js', new Date());
         gtag('config', 'G-V4WF9Z7HM5');
      };

      // Add the meta tag
      const metaTag = document.createElement('meta');
      metaTag.name = 'google-site-verification';
      metaTag.content = 'dnno2GJ0DeIdWvtvWdh5qzlZC0Qp4YKQkzF75KddQHk';
      document.head.appendChild(metaTag);

      // Cleanup on component unmount
      return () => {
         document.head.removeChild(script);
         document.head.removeChild(metaTag);
      };
   }, []);

   return <div>{/* Your component content goes here */}</div>;
};

export default YourComponent;
