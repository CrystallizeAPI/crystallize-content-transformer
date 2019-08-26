import React from 'react';
import { shallow } from 'enzyme';

import CrystallizeContent from '../../src/react';

const model = {
  kind: 'block',
  type: 'paragraph',
  children: [
    {
      kind: 'inline',
      textContent: 'hi\nthere'
    }
  ]
};

describe('<CrystallizeContent >', () => {
  it('renders correctly block node with textContent', () => {
    const wrapper = shallow(<CrystallizeContent {...model} />);

    expect(wrapper.html()).toEqual('<p>hi<br/>there</p>');
  });
});
