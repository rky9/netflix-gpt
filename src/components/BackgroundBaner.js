import React from "react";

function BackgroundBaner() {
  return (
    <>
      <div className="absolute bg-cover h-full w-full">
        <img
          className="min-w-full min-h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Logo"
        />
      </div>
    </>
  );
}

export default BackgroundBaner;
