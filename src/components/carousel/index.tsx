import s from './carousel.module.scss';
import {Carousel as AntdCarousel, Image} from 'antd';
import img1 from '../../assets/images/carousel_1.jpg';
import img2 from '../../assets/images/carousel_2.jpg';
import img3 from '../../assets/images/carousel_3.jpg';

const Carousel = () => {
  return (
    <AntdCarousel autoplay className={s.carousel}>
      <Image src={img1}/>
      <Image src={img2}/>
      <Image src={img3}/>
    </AntdCarousel>
  );
};


export default Carousel;