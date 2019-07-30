import React from 'react';
import { mount } from 'enzyme';  // this is a func for Full DOM test
import { Root } from '../../Root';
import CommentBox from '../CommentBox';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapper.unmount();
});

it('has a textarea and two button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
  });

describe('the textarea', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    }); // second arg is a mock object for simulating event object.
        // it will be merged with event object passed to the event handler
    wrapper.update();
    // because the setState method is asynchronous, so we have to update forcely.
  });

  it('has a textarea hat user can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
    // reference doc link: https://airbnb.io/enzyme/docs/api/ReactWrapper/prop.html
  });

  it('had cleaned up the textarea when user submit the form', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update(); // clean up the textarea

    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
