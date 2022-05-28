import s from './productCollection.module.scss';
import {Col, Divider, Row} from 'antd';
import {PropsWithChildren} from 'react';
import ProduceImage from './ProduceImage';

export interface Product {
  id: number;
  title: string;
  price: string;
  touristRoutePictures: Record<'url', string>[];
}

interface ProductCollectionProps {
  title: JSX.Element;
  sideImage: string;
  products: Product[];
}

const ProductCollection = (props: PropsWithChildren<ProductCollectionProps>) => {
  const {title, sideImage, products} = props;
  return (
    <div className={s.wrapper}>
      <Divider orientation="left">{title}</Divider>
      <Row>
        <Col span={4}>
          <img src={sideImage} alt="sideImage" className={s.sideImage}/>
        </Col>
        <Col span={20}>
          <div className={s.products}>

            {products.map((product, index) => (
              <div key={product.id}>
                <ProduceImage
                  id={product.id}
                  size={index === 0 ? 'large' : 'small'}
                  imgSrc={product.touristRoutePictures[0].url}
                  price={product.price}
                  title={product.title}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};


export default ProductCollection;