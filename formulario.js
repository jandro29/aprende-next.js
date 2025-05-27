'use client';
// components/HubspotForm.js
import { useEffect } from 'react';

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/50104181.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="na1"
      data-form-id="dd0561b9-57a9-4eee-8a02-a8a5c94cdb80"
      data-portal-id="50104181"
    />
  );
};

export default HubspotForm;
