import React from 'react';
import { shallow } from 'enzyme'; // this is a func, render instance of component
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapper;
beforeEach(() => {
	wrapper = shallow(<App />);
});
afterEach(() => {
	wrapper.unmount();
});

it('shows the commentbox', () => {
	expect(wrapper.find(CommentBox).length).toEqual(1);
	//wrapper.find() return an array, represent the instance of CommentBox
});

it('shows the commentlist', () => {
	expect(wrapper.find(CommentList).length).toEqual(1);
});
