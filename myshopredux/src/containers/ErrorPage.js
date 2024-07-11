import React from 'react';

const ErrorPage = () => {
  const containerStyle = {
    height: '100vh',
    backgroundImage: 'url("https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={containerStyle}></div>
  );
};

export default ErrorPage;

