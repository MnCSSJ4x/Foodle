import React from 'react';
import ViewMessMenu from './ViewMessMenu';
import ViewCanteenMenu from './ViewCanteenMenu';
import ViewFeedback from './ViewFeedback';
import ViewRequest from './ViewRequest';

const ViewTabs = ({ tab, emailId }) => {
  let componentToRender;

  switch (tab) {
    case 'first':
      componentToRender = <ViewMessMenu />;
      break;
    case 'second':
      componentToRender = <ViewCanteenMenu />;
      break;
    case 'third':
      componentToRender = <ViewFeedback emailId={emailId} />;
      break;
    case 'fourth':
      componentToRender = <ViewRequest emailId={emailId} />;
      break;
    default:
      // Handle a default case or render a default component
      <></>;
  }
  return componentToRender;
};

export default ViewTabs;
