'use client';
// components/HubspotForm.js
import { useEffect } from 'react';

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/46220186.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      class="hs-form-frame lg:w-[550px] lg:h-[100%]"
      data-region="na1"
      data-form-id="4394c944-61a5-4eae-b4ac-993ba4e3b388"
      data-portal-id="46220186"></div>
  );
};

export default HubspotForm;
