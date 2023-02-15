import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';

interface Props {
  data: any;
}

const StockGraph: React.FC<Props> = (props) => {
  const {} = props;
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/ZWgtj7pC%261/stock.json')
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
    appendPadding: [0, 10, 0, 0],
    data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    slider: {},
  };

  return (
    <PageContainer
      header={{
        title: '行情数据',
      }}
    >
      <Stock {...config} />
    </PageContainer>
  );
};

export default StockGraph;
