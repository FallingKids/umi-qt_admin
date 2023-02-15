import { EllipsisOutlined, RightOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/plots';
import { StatisticCard } from '@ant-design/pro-components';
import { Space } from 'antd';
import { useEffect, useState } from 'react';

const { Statistic } = StatisticCard;

export interface Props {
  data: {
    securityId: string;
    securityCode: string;
    securityName: string; // 证券名称
    change: string;
    changeRatio: string;
    price: string;
    priceDirect: number;
    timeSection: {
      begin: number;
      end: number;
    }[];
  };
}

const StockCard: React.FC<Props> = (props) => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    style: { height: 80 },
  };

  return (
    <StatisticCard
      title={
        <Space>
          <span>{props.data.securityName}</span>
          <RightOutlined style={{ color: 'rgba(0,0,0,0.65)' }} />
        </Space>
      }
      extra={<EllipsisOutlined />}
      statistic={{
        value: 1102893,
        prefix: '¥',
        description: (
          <Space>
            <Statistic title="实际完成度" value="82.3%" />
            <Statistic title="当前目标" value="¥6000" />
          </Space>
        ),
      }}
      chart={
        <div>
          <Line {...config} xAxis={false} yAxis={false} />
        </div>
      }
      style={{ width: 310, height: 220 }}
    />
  );
};

export default StockCard;
