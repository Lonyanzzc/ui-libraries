import './theme/vars.css';
import { Cascader as AntdCascader } from 'antd';
import React from 'react';
import type { CascaderProps } from 'antd';
import { registerComponet } from '@/plugins/index';
import * as plugin from './plugins';
import type { pluginType } from '@/plugins/type';

import './index.module.less';

// type TransferProps = AntdTransferProps

const mapProps = {
  // dataSource: 'options',
};

export const Cascader = registerComponet<
  CascaderProps,
  pluginType<CascaderProps>
>(
  AntdCascader,
  { plugin, displayName: AntdCascader.displayName, mapProps },
);
