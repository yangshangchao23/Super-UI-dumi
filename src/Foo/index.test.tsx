/*
 * @Author: yangshangchao
 * @Date: 2025-05-22 18:37:59
 * @LastEditors: yangshangchao
 * @Description: 头部注释
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Foo from './index';

describe('Foo Component', () => {
  test('渲染Foo组件', () => {
    render(<Foo title="MyFoo" />);
    const fooElement = screen.getByRole('heading', { name: /MyFoo/i });
    expect(fooElement).toBeInTheDocument();
  });
});
