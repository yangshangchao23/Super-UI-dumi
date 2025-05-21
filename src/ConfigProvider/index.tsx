/*
 * @Author: yangshangchao
 * @Date: 2025-05-21 09:52:20
 * @LastEditors: yangshangchao
 * @Description: 头部注释
 */
import React, { createContext, type FC } from 'react';

interface ConfigContext {
  libPrefix: string;
}

const defaultConfigContext = { libPrefix: 'su' };
export const ConfigContext = createContext(defaultConfigContext);
const ConfigProvider: FC = () => {
  return <div>ConfigProvider</div>;
};

export default ConfigProvider;
