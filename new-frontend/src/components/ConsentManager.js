import React, { useState, useEffect } from 'react';

function ConsentManager() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('userConsent');
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('userConsent', 'true');
    document.cookie = "user_tracking=1;path=/;max-age=31536000;SameSite=Lax";
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div id="cookieConsent">
      This site uses cookies to improve your experience. <button onClick={acceptCookies}>Accept Cookies</button>
    </div>
  );
}

export default ConsentManager;
