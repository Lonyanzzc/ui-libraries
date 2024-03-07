// import React from 'react';
import _ from 'lodash';
// import { theme, Layout } from 'antd';
// import { useLocation, useNavigate } from 'react-router-dom';

// const { Header, Content, Footer } = Layout;

export function useHandleRouter(props) {
  const onClickPorps = props.get('onClick');
  // const navigate = useNavigate();
  return {
    onClick: _.wrap(onClickPorps, (fn, arg) => {
      _.attempt(fn, arg);
      // console.log(arg.key);
      // navigate(arg.key);
      if (_.isValidLink(arg.key)) {
        window.location.href = arg.key;
      }
      window.history.pushState({}, '', arg.key);
      // windowhistory.push("/index/goodsinfo/goodsdetail")
    }),
  };
}
