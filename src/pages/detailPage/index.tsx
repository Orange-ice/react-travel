import {useParams} from 'react-router-dom';

const DetailPage = () => {
  const {touristRouteId} = useParams();

  return (
    <h1>详情页面 touristRouteId：{touristRouteId}</h1>
  );
};

export default DetailPage;