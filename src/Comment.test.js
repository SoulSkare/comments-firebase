import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Comment from './Comment';

Enzyme.configure({ adapter: new Adapter() });

it('shoud render', () => {
  const comment = {
    comment: 'test',
  };
  const wrapper = render(<Comment c={comment} />);
  console.log(wrapper);
});
