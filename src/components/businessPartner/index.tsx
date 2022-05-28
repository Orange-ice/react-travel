import s from './businessPartner.module.scss';
import {Col, Divider, Row, Typography} from 'antd';

import image1 from '../../assets/images/microsoft-80658_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image4 from '../../assets/images/facebook-807588_640.png';

const companies = [
  {src: image1, title: 'Microsoft'},
  {src: image2, title: 'YouTube'},
  {src: image3, title: 'Ins'},
  {src: image4, title: 'Facebook'},
];

const BusinessPartner = () => {
  return (
    <div className={s.wrapper}>
      <Divider orientation="left">
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      <Row>
        {companies.map(c => (
          <Col span={6} key={c.title}>
            <img
              src={c.src}
              alt="bussiness-partner"
              style={{width: '80%', display: 'block', margin: '0 auto'}}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};


export default BusinessPartner;