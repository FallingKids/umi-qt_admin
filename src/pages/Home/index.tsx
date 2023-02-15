import SearchInput from '@/components/SearchInput';
import { PageContainer } from '@ant-design/pro-components';
import { Col, Row, Space } from 'antd';
import SecurityCard from '@/components/SecurityCard';
import * as StockInfoConstant from '@/constants/StockInfoConstant';

const HomePage: React.FC = () => {
  return (
    <div style={{ transform: 'translateY(20%)' }}>
      <SearchInput />
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
          style={{ display: 'flex', transform: 'translateY(-10%)' }}
        >
          <Row gutter={{ xs: 60, sm: 120, md: 180, lg: 240 }}>
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
        </Space>
      </PageContainer>
    </div>
  );
};

export default HomePage;
