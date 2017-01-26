import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
import Org from '../lib/components/Application';
import scoreWord from '../lib/components/Helpers'

describe('countword', () => {

  it('should scoreWord', () => {
    expect(scoreWord('hello')).to.equal(8);
  });

  it('should scoreWord', () => {
    expect(scoreWord('')).to.equal(0);
  });

  it('should remove whitespace', () => {
    expect(scoreWord(' hello ')).to.equal(8);
  });

  it('should multiply the value of the word', () => {
    expect(scoreWord('hello', 2)).to.equal(16);
  });

  it('should render an Org component', () => {
    const wrapper = mount(<Org />);
    expect(wrapper.find(Org)).to.have.length(1);
  });
//for AJAX calls/within each test
  beforeEach(function () {
    server = sinon.fakeServer.create();
    window.XMLHttpRequest = global.XMLHttpRequest;
});

  afterEach(function () {
      server.restore();
  });
})
