import Header from './components/header';
import Footer from './components/footer';
import {Row, Col} from 'antd';
import SideMenu from './components/sideMenu';
import Carousel from './components/carousel';

function App() {

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
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App
