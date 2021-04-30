import React from 'react';
import {Ret} from '..';
import {render} from '@testing-library/react';
import {Ret as RetObject} from 'miaoxing';

describe('Ret', () => {
  test('basic', () => {
    const result = render(<Ret ret={RetObject.new({code: 1, message: 'error'})}/>);
    expect(result.container).toMatchSnapshot();
  });
});
