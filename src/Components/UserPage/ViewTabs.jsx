import React from 'react';

import MessMenuTab from './MessMenuTab';
import CanteenMenuTab from './CanteenMenuTab';
import FeedbackForm from './FeedbackForm';
import ServiceForm from './ServiceForm';
//For handling what kind of tab, is it for Mess, is it for canteen, is it for some service request. Based on navbar button click

const ViewTabs = ({ tab }) => {
  let componentToRender;

  switch (tab) {
    case 'first':
      componentToRender = <MessMenuTab />;
      break;
    case 'second':
      componentToRender = <CanteenMenuTab />;
      break;
    case 'third':
      componentToRender = <FeedbackForm />;
      break;
    case 'fourth':
      componentToRender = <ServiceForm />;
      break;
    default:
      // Handle a default case or render a default component
      <></>;
  }
  return componentToRender;
};

export default ViewTabs;
