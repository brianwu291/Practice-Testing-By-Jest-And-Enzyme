import React from 'react';
import { mount } from 'enzyme';
import { Root } from '../../Root';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
  const initState = {
    comments: ['comment1', 'comment2']
  };
  wrapper = mount(
    <Root initState={initState}>
      <CommentList />
    </Root>
  );
});

it('create one <li> element per comment', () => {
  expect(wrapper.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapper.render().text()).toContain('comment1');
  expect(wrapper.render().text()).toContain('comment2');
});
