import React from 'react';
import { shallow } from 'enzyme';

import CrystallizeContent from '../../src/react';

import { transformModelForTests } from './_util';

const model = [
  {
    kind: 'block',
    type: 'paragraph',
    metadata: {},
    textContent:
      'De fleste som har et nært forhold til ull, spinning, strikking og veving kjenner Annemor Sundbø, men en kort presentasjon er allikevel på sin plass:'
  },
  {
    kind: 'block',
    type: 'paragraph',
    metadata: {},
    textContent:
      'Annemor Sundbø er utdannet kunsthåndverker, tekstildesigner og faglærer i vev og tegning. Hun har utgitt en rekke bøker innenfor temaet ull og strikking. Hun har vært statsstipendiat og har også mottatt en rekke priser, bl.a Kongens fortjenestemedalje for sitt arbeid.'
  }
];

describe('<CrystallizeContent />', () => {
  it('renders correctly multiple paragraphs', () => {
    const wrapper = shallow(
      <div>
        <CrystallizeContent {...transformModelForTests(model)} />
      </div>
    );

    expect(wrapper.html()).toEqual(
      '<div><p>De fleste som har et nært forhold til ull, spinning, strikking og veving kjenner Annemor Sundbø, men en kort presentasjon er allikevel på sin plass:</p><p>Annemor Sundbø er utdannet kunsthåndverker, tekstildesigner og faglærer i vev og tegning. Hun har utgitt en rekke bøker innenfor temaet ull og strikking. Hun har vært statsstipendiat og har også mottatt en rekke priser, bl.a Kongens fortjenestemedalje for sitt arbeid.</p></div>'
    );
  });
});
