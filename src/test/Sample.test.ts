import * as Sample from '../Sample';

describe('Sample module', () => {

  it('Sample.world', () => {
    expect(Sample.world()).toBe('Welcome! This is an Awesome World');
  });

  it('Sample.getDocType', () => {
    expect(Sample.getDocType()).toBe('<!DOCTYPE html>');
  });

});
