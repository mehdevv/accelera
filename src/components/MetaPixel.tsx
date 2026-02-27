import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = '2175610733205261';

const MetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Pixel
    const options = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init(PIXEL_ID, undefined, options);
    
    // Initial PageView
    ReactPixel.pageView();
  }, []);

  useEffect(() => {
    // Track PageView on route change
    ReactPixel.pageView();
  }, [location.pathname, location.search]);

  return null;
};

export default MetaPixel;
