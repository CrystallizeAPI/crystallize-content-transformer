import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Chunk from '../src/react-chunk';

configure({ adapter: new Adapter() });

describe('<Chunk >', () => {
  it('renders correctly block node with textContent', () => {
    const wrapper = shallow(
      <Chunk
        {...{
          kind: 'block',
          children: [{ kind: 'block', textContent: 'hello' }]
        }}
      />
    );

    expect(wrapper.html()).toEqual('hello');
  });
});
