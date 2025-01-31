import React from 'react';
import _ from 'lodash';
import { MenuItem, Icon } from '@/index';
import {
  useRequestDataSource, useHandleMapField, useFormatDataSource,
} from '@/plugins/common/dataSource';
import { $deletePropsList, $dataSourceField } from '@/plugins/constants';

export function useHandleDataSource(props) {
  const dataSourceProps = props.get('dataSource');
  const textField = props.get('textField', 'label');
  const valueField = props.get('valueField', 'value');
  const deletePropsList = props.get($deletePropsList, []).concat(['textField', 'valueField', 'dataSource']);
  const ref = props.get('ref');
  const { data, run: reload, loading } = useRequestDataSource(dataSourceProps);
  const dataSourceFormat = useFormatDataSource(data);
  const dataSource = useHandleMapField({ textField, valueField, dataSource: dataSourceFormat });
  const selfRef = React.useMemo(() => _.assign(ref, { reload, data: dataSource }), [dataSource, reload, ref]);
  const dataSourceResult = _.isEmpty(dataSource) ? {} : { items: dataSource };
  return {
    [$deletePropsList]: deletePropsList,
    ref: selfRef,
    loading,
    ...dataSourceResult,
  };
}

export function useMergeMenu(props) {
  const fragment = props.get('menuItem');
  const menuItem = React.Children.toArray(_.get(fragment, 'props.children', []));
  const ItemsProps = _.filter(menuItem, (item) => React.isValidElement(item) && item.type === MenuItem)?.map((item) => {
    const { icon } = item.props;
    return {
      ..._.omit(item.props, 'children'),
      ..._.isNil(icon) ? {} : { icon: <Icon name={icon} /> },
    };
  });
  const menu = props.get('menu');
  const items = props.get('items', ItemsProps);
  return {
    menu: {
      ...menu,
      items,
    },
  };
}
useMergeMenu.order = 6;
