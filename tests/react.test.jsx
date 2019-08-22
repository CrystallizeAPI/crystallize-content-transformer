import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CrystallizeContent from '../src/react';

configure({ adapter: new Adapter() });

const model = {
  kind: 'block',
  type: 'paragraph',
  children: [
    {
      kind: 'block'
    },
    {
      kind: 'inline',
      type: 'link',
      children: [
        {
          kind: 'inline',
          textContent: 'Mal arbeidsavtale fast ansettelse'
        }
      ],
      metadata: {
        href:
          'https://origamipaperworks.com/maler/mal-arbeidsavtale-fast-ansettelse'
      }
    },
    {
      kind: 'block'
    }
  ]
};

describe('<CrystallizeContent >', () => {
  it('renders correctly block node with textContent', () => {
    const wrapper = shallow(<CrystallizeContent {...model} />);

    expect(wrapper.html()).toEqual(
      '<p><a href="https://origamipaperworks.com/maler/mal-arbeidsavtale-fast-ansettelse">Mal arbeidsavtale fast ansettelse</a></p>'
    );
  });
});
