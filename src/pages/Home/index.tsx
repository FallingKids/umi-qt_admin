import StockSearchInput from '@/components/StockSearchInput';
import { PageContainer } from '@ant-design/pro-components';
import { Col, Row, Space } from 'antd';
import SecurityCard from '@/components/SecurityCard';
import * as StockInfoConstant from '@/constants/StockInfoConstant';
import Title from 'antd/es/typography/Title';
import StockListCard, {
  StockListCardDataItem,
} from '@/components/StockListCard/StockListCard';
import { useState } from 'react';

const HomePage: React.FC = () => {
  const [stockListCardDataMap] = useState<{
    [key: string]: StockListCardDataItem[];
  }>({
    increaseList: [
      {
        stockCode: '603190',
        stockName: 'N亚通',
        latestPrice: '41.890',
        priceLimit: '+44.00%',
      },
      {
        stockCode: '603190',
        stockName: 'N亚通',
        latestPrice: '41.890',
        priceLimit: '+44.00%',
      },
      {
        stockCode: '603190',
        stockName: 'N亚通',
        latestPrice: '41.890',
        priceLimit: '+44.00%',
      },
      {
        stockCode: '603190',
        stockName: 'N亚通',
        latestPrice: '41.890',
        priceLimit: '+44.00%',
      },
      {
        stockCode: '603190',
        stockName: 'N亚通',
        latestPrice: '41.890',
        priceLimit: '+44.00%',
      },
    ],
  });
  return (
    <div style={{ transform: 'translateY(20%)' }}>
      <StockSearchInput />
      <PageContainer
        ghost
        tabList={[
          {
            tab: '沪深',
            key: 'cha',
          },
          {
            tab: '港股',
            key: 'hk',
          },
          {
            tab: '美股',
            key: 'usa',
          },
        ]}
        header={{
          title: false,
        }}
      >
        <Space
          direction="vertical"
          size="large"
          style={{ display: 'flex', transform: 'translateY(0%)' }}
        >
          <Row
            gutter={{ xs: 60, sm: 120, md: 180, lg: 240 }}
            // style={{ marginLeft: '0%' }}
          >
            <Col xs={24} sm={12} md={6} lg={6}>
              <SecurityCard
                data={{
                  securityId: '1000001',
                  securityCode: '000001',
                  securityName: '上证指数',
                  price: '3249.030',
                  priceDirect: StockInfoConstant.PriceDirect.down,
                  change: '-31.462',
                  changeRatio: '-0.96%',
                  timeSection: [],
                }}
              />
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <SecurityCard
                data={{
                  securityId: '1000001',
                  securityCode: '000001',
                  securityName: '上证指数',
                  price: '3249.030',
                  priceDirect: StockInfoConstant.PriceDirect.down,
                  change: '-31.462',
                  changeRatio: '-0.96%',
                  timeSection: [],
                }}
              />
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <SecurityCard
                data={{
                  securityId: '1000001',
                  securityCode: '000001',
                  securityName: '上证指数',
                  price: '3249.030',
                  priceDirect: StockInfoConstant.PriceDirect.down,
                  change: '-31.462',
                  changeRatio: '-0.96%',
                  timeSection: [],
                }}
              />
            </Col>
          </Row>
          <Title level={2} style={{ marginLeft: '5%' }}>
            排行榜
          </Title>
          <Row
            justify="start"
            gutter={{ xs: 150, sm: 300, md: 400, lg: 500 }}
            // style={{ marginLeft: '-10%' }}
          >
            <Col xs={36} sm={18} md={9} lg={9}>
              <StockListCard
                title="涨幅榜"
                data={stockListCardDataMap['increaseList']}
              ></StockListCard>
            </Col>
            <Col xs={36} sm={18} md={9} lg={9}>
              <StockListCard
                title="涨幅榜"
                data={stockListCardDataMap['increaseList']}
              ></StockListCard>
            </Col>
          </Row>
          <Row
            justify="start"
            gutter={{ xs: 150, sm: 300, md: 400, lg: 500 }}
            // style={{ marginLeft: '-10%' }}
          >
            <Col xs={36} sm={18} md={9} lg={9}>
              <StockListCard
                title="涨幅榜"
                data={stockListCardDataMap['increaseList']}
              ></StockListCard>
            </Col>
            <Col xs={36} sm={18} md={9} lg={9}>
              <StockListCard
                title="涨幅榜"
                data={stockListCardDataMap['increaseList']}
              ></StockListCard>
            </Col>
          </Row>
        </Space>
      </PageContainer>
    </div>
  );
};

export default HomePage;
