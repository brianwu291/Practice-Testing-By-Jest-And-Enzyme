import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { Root } from '../Root';
import App from '../components/App';

beforeEach(() => {
  // means: hey moxios, try to intercept anything axios did.
  moxios.install()
  // hey moxios, if you see any req, go to xxx api and fetch data.
  // second arg is the response from fetch api.
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',
    {
      status: 200,
      response: [
        { name: 'Fetch no.1' },
        { name: 'Fetch no.2' }
      ]
    }
  );
});

afterEach(() => {
  moxios.uninstall();
});


it('can fetch a lists of comments and display them', (done) => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  // we can use css selector to find 'fetch-comments' button, and simulate click.
  wrapper.find('.fetch-comments').simulate('click');

  moxios.wait(() =>{
    wrapper.update();
    // expect to find a lists of comments, but it'll fail because this is an async move.
    expect(wrapper.find('li').length).toEqual(2);

    wrapper.unmount();
    done();
  }, 100)
});
