import s from './header.module.scss';
import {Button, Dropdown, Input, Menu} from 'antd';
import {GlobalOutlined} from '@ant-design/icons';
import logo from '../../assets/logo.svg';

const languageMenuItems = [
  {key: 'en', label: 'English'},
  {key: 'cn', label: '中文'},
];
const navMenuItems = [
  {key: '1', label: '旅游首页'},
  {key: '2', label: '周末游'},
  {key: '3', label: '跟团游'},
  {key: '4', label: '自由行'},
  {key: '5', label: '私家团'},
  {key: '6', label: '邮轮'},
  {key: '7', label: '酒店 + 景点'},
  {key: '8', label: '当地玩乐'},
  {key: '9', label: '主题游'},
  {key: '10', label: '定制游'},
  {key: '11', label: '游学'},
  {key: '12', label: '签证'},
  {key: '13', label: '企业游'},
  {key: '14', label: '高端游'},
  {key: '15', label: '爱玩户外'},
  {key: '16', label: '保险'},
];
const Header = () => {

  return (
    <header className={s.header}>
      <div className={s.top}>
        <span>让旅游更幸福</span>
        <Dropdown.Button
          overlay={<Menu items={languageMenuItems}/>}
          icon={<GlobalOutlined/>}
          className={s.language}
        >
          语言
        </Dropdown.Button>
        <Button.Group>
          <Button>登录</Button>
          <Button type="primary">注册</Button>
        </Button.Group>
      </div>
      <div className={s.title_wrapper}>
        <div className={s.title}>
          <img src={logo} alt="logo"/>
          <span>React旅游网</span>
          <Input.Search placeholder="请输入旅游目的地、主题、或关键字" className={s.input}/>
        </div>
      </div>
      <Menu mode="horizontal" items={navMenuItems} className={s.nav}/>
    </header>
  );
};


export default Header;