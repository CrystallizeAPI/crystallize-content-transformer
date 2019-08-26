import React from 'react';
import { shallow } from 'enzyme';

import CrystallizeContent from '../../src/react';

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
      textContent: ' dude'
    }
  ],
  metadata: {}
};

describe('<CrystallizeContent >', () => {
  it('renders correctly block node with textContent', () => {
    const wrapper = shallow(<CrystallizeContent {...model} />);

    expect(wrapper.html()).toEqual(
      '<p><a href="https://crystallize.com">Crystallize</a> dude</p>'
    );
  });
});
