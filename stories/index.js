/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';

import '../styles/global.scss';

storiesOf('Button', module).add('with text', () => <Button>Hello world</Button>);
