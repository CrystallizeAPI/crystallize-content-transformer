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
          textContent: 'Click me'
        }
      ],
      metadata: {
        href: 'https://example.com'
      }
    }
  ]
};

describe('<CrystallizeContent >', () => {
  it('renders correctly block node with textContent', () => {
    const wrapper = shallow(<CrystallizeContent {...model} />);

    expect(wrapper.html()).toEqual(
      '<p><a href="https://example.com">Click me</a></p>'
    );
  });
});
