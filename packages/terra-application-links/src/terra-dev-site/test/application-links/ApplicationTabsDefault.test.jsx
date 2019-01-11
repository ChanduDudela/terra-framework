import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testLinkConfig from '../common/testLinkConfig';

const demoheaderstyles = {
  width: '100%',
  backgroundColor: '#1c5f92',
  height: '49px',
  position: 'relative',
};

export default () => (
  <MemoryRouter
    initialEntries={testLinkConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div style={{
      border: '1px solid lightGray', width: '100%', backgroundColor: 'green', height: '39px', position: 'relative',
    }}
    >
      <ApplicationTabs id="test-tabs" links={testLinkConfig} />
    </div>
  </MemoryRouter>
);
