import React from 'react';
import { shallow } from 'enzyme';

import CrystallizeContent from '../../src/react';

import { transformModelForTests } from './_util';

const model = {
  kind: 'block',
  type: 'paragraph',
  children: [
    {
      kind: 'inline',
      type: 'link',
      children: [
        {
          kind: 'inline',
          textContent: 'Crystallize'
        }
      ],
      metadata: {
        href: 'https://crystallize.com'
      }
    },
    {
      kind: 'inline',
      textContent: '\n dude'
    }
  ]
};

describe('<CrystallizeContent />', () => {
  it('renders correctly block node with line breaks', () => {
    const wrapper = shallow(
      <CrystallizeContent {...transformModelForTests(model)} />
    );

    expect(wrapper.html()).toEqual(
      '<p><a href="https://crystallize.com">Crystallize</a><br/> dude</p>'
    );
  });
});
