import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const SearchInput: React.FC = () => (
  <Search
    placeholder="请输入的你的股票代码或者股票名称"
    enterButton="Search"
    size="large"
    suffix={suffix}
    onSearch={onSearch}
    style={{
      maxWidth: 450,
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '25%',
    }}
  />
);

export default SearchInput;
