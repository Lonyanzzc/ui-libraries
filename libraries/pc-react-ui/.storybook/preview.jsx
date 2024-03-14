/** @type { import('@storybook/react').Preview } */
import '../src/index.css';
import React from 'react';
import { ConfigProvider } from 'antd';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider
        theme ={
          {
            cssVar: { prefix: 'cw', key: 'cw-nasl' },
          }
        }
        prefixCls="cw"
      >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default preview;
