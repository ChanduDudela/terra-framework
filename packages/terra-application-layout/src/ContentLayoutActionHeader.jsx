import React from 'react';

import ButtonGroup from 'terra-button-group';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconPinDown from 'terra-icon/lib/icon/IconPinDown';

import { withContentLayout } from './ContentLayout';

const ContentLayoutActionHeader = withContentLayout(({
  contentLayout,
}) => {
  let button;
  if (contentLayout.openMenu) {
    button = (
      <ButtonGroup.Button
        icon={<IconLeft />}
        key="open-menu"
        text="Open Menu"
        onClick={contentLayout.openMenu}
      />
    );
  } else if (contentLayout.menuIsPinned) {
    button = (
      <ButtonGroup.Button
        icon={<IconPinDown />}
        key="pin-menu"
        text="Pin Menu"
        onClick={contentLayout.unpinMenu}
      />
    );
  } else {
    button = (
      <ButtonGroup.Button
        icon={<IconPinDown />}
        key="pin-menu"
        text="Unpin Menu"
        onClick={contentLayout.pinMenu}
      />
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.714rem',
      }}
    >
      <ButtonGroup
        id="controlled-button-group"
        selectedKeys={contentLayout.menuIsPinned ? ['pin-menu'] : undefined}
      >
        {button}
      </ButtonGroup>
    </div>
  );
});

export default ContentLayoutActionHeader;
