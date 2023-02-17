import { ProCard } from '@ant-design/pro-components';
import { Space, Typography } from 'antd';
import React from 'react';
const { Text } = Typography;

export interface Props {
  data: StockListCardDataItem[];
  title: string;
}

export interface StockListCardDataItem {
  stockCode: string;
  stockName: string;
  latestPrice: string;
  priceLimit: string; // 跌涨幅
}

const StockListCard: React.FC<Props> = (props) => {
  return (
    <div>
      <ProCard title={props.title} style={{ maxWidth: 800, minWidth: 450 }}>
        <Space.Compact direction="vertical">
          <Space size={65} wrap>
            <Text>代码</Text>
            <Text>股票名称</Text>
            <Text>最新价格</Text>
            <Text>涨跌幅</Text>
          </Space>
          {props.data.map((item) => (
            <React.Fragment key={item.stockCode}>
              <Space size={65} wrap>
                <Text>{item.stockCode}</Text>
                <Text>{item.stockName}</Text>
                <Text>{item.latestPrice}</Text>
                <Text>{item.priceLimit}</Text>
              </Space>
            </React.Fragment>
          ))}
        </Space.Compact>
      </ProCard>
    </div>
  );
};

export default StockListCard;
