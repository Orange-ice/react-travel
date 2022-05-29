import {Image, Typography} from 'antd';
import {Link} from 'react-router-dom';

interface Props {
  id: string | number;
  size: 'small' | 'large';
  imgSrc: string;
  price: string | number;
  title: string;
}

const ProduceImage = (props: Props) => {
  const {id, size, imgSrc, price, title} = props;
  const imageSize = size === 'large' ? {height: 300, width: '100%'} : {height: 120, width: '100%'};
  return <Link to={`/detail/${id}`}>
    <Image src={imgSrc} height={imageSize.height} width={imageSize.width}/>
    <div>
      <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
      <Typography.Text type="danger" strong>￥ {price} 起</Typography.Text>
    </div>
  </Link>;

};

export default ProduceImage;