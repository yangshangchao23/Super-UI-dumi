/*
 * @Author: yangshangchao
 * @Date: 2025-05-22 12:03:38
 * @LastEditors: yangshangchao
 * @Description: 头部注释
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index';

describe('Button Component', () => {
  // 1.基础渲染测试
  test('渲染按钮组件', () => {
    render(<Button>点击我</Button>);
    // 精确查找按钮：添加正则 { name: /点击我/i }
    const buttonElement = screen.getByRole('button', { name: /点击我/i });
    expect(buttonElement).toBeInTheDocument();
  });
  // 2.测试onClick事件
  // 使用fireEvent
  // it('should trigger onClick when clicked', () => {
  //   const handleClick = jest.fn();
  //   render(<Button onClick={handleClick}>Clickable</Button>);
  //   // 查找按钮，触发点击事件
  //   fireEvent.click(screen.getByRole('button'));
  //   // 断言点击事件被调用
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });

  // 使用 userEvent
  // @testing-library/user-event v13及更低版本 可用该方法测试。
  // but v14版本不支持，出现无法触发事件的现象。因为v14版本开始，userEvent.click() 是异步操作，需要配合 await 使用。
  // 现象：测试代码未等待点击完成就立即断言，导致 handleClick 未被调用。
  // 原来的代码-不可触发事件，因为 userEvent.click() 是异步操作
  // test('点击按钮时调用 onClick 回调(userEvent)',  () => {
  //   const handleClick = jest.fn();
  //   const handleClick = jest.fn(e => { console.log('Button clicked', e); }); // 没有打印
  //   render(<Button onClick={handleClick}>点击我</Button>);
  //   userEvent.click(screen.getByRole('button'));   // 👈 异步点击操作
  //   console.log('Button clicked  out'); // 打印
  //   expect(handleClick).toHaveBeenCalledTimes(1);   // 👈 断言
  // });

  // v14 版本需要处理 异步操作，添加 async / await
  test('点击按钮时调用 onClick 回调(userEvent)', async () => {
    // const user = userEvent.setup();  // ✅ 初始化 userEvent
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>点击我</Button>);

    // await user.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  // 总结对比：fireEvent.click() 和 userEvent.click()

  // 3.测试disbaled属性
  test('disabled 属性', async () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        不可点击
      </Button>,
    );
    const buttonElement = screen.getByRole('button', { name: /不可点击/i });
    // const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled(); // 断言按钮被禁用
    await userEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled(); // 断言点击事件未被调用
  });
});
