/* eslint-disable import/no-extraneous-dependencies, global-require */

import { configure } from '@storybook/react';

function loadStories() {
  require('../../stories/');
}

configure(loadStories, module);
