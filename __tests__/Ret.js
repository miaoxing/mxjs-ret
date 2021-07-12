import {Ret} from '..';
import {render} from '@testing-library/react';
import {Ret as RetObject} from 'miaoxing';

describe('Ret', () => {
  test('basic', () => {
    const result = render(<Ret ret={RetObject.err('error')}/>);
    expect(result.container).toMatchSnapshot();
  });
});
