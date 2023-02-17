import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useNavigate } from '@umijs/max';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const StockSearchInput: React.FC = () => {
  const navigateTo = useNavigate();

  const onSearch = (value: string) => {
    navigateTo('/stock-graph?stockCode=xxxx');
    console.log(value);
  };
  return (
    <Search
      placeholder="请输入的你的股票代码或者股票名称"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={(value) => onSearch(value)}
      style={{
        maxWidth: 450,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '30%',
      }}
    />
  );
};

export default StockSearchInput;
