import sideImage1 from '../../assets/images/sider_2019_12-09.png';
import {domesticRecommendation, newArrivals, popularRecommendation} from '../../mock';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import Header from '../../components/header';
import {Col, Row, Typography} from 'antd';
import SideMenu from '../../components/sideMenu';
import Carousel from '../../components/carousel';
import ProductCollection, {Product} from '../../components/productCollection';
import BusinessPartner from '../../components/businessPartner';
import Footer from '../../components/footer';

interface ProductCollections {
  id: string;
  title: string;
  sideImage: string;
  products: Product[];
  type: 'success' | 'danger' | 'warning';
}

const Home = () => {
  const productCollections: ProductCollections[] = [
    {
      id: 'popularRecommendation',
      title: '热门推荐',
      sideImage: sideImage1,
      products: popularRecommendation,
      type: 'warning'
    },
    {id: 'newArrivals', title: '新品上架', sideImage: sideImage2, products: newArrivals, type: 'danger'},
    {
      id: 'domesticRecommendation',
      title: '国内热门',
      sideImage: sideImage3,
      products: domesticRecommendation,
      type: 'success'
    }
  ];

  return (
    <div>
      <Header/>
      <div style={{background: '#f5f5f5'}}>
        <main style={{width: '80%', margin: '0 auto', minHeight: '75vh', paddingTop: 16}}>
          <Row>
            <Col span={6}>
              <SideMenu/>
            </Col>
            <Col span={18}>
              <Carousel/>
            </Col>
          </Row>

          {productCollections.map(c => (
            <ProductCollection
              key={c.id}
              title={
                <Typography.Title level={3} type={c.type}>
                  {c.title}
                </Typography.Title>
              }
              sideImage={c.sideImage}
              products={c.products}
            />
          ))}

          <BusinessPartner/>
        </main>
      </div>
      <Footer/>
    </div>
  );
};


export default Home;