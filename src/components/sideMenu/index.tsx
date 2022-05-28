import {sideMenuList} from './mock';
import {Menu} from 'antd';
import {GifOutlined} from '@ant-design/icons';
import s from './sideMenu.module.scss';

const SideMenu = () => {

  const renderTitle = (title: string) => {
    return (
      <span>
        <GifOutlined style={{marginRight: 8}}/>
        {title}
      </span>
    );
  };
  return (
    <Menu mode="vertical" className={s.sideMenu}>
      {sideMenuList.map(menu => (
        <Menu.SubMenu key={menu.title} title={renderTitle(menu.title)}>
          {menu.subMenu.map(subMenu => (
            <Menu.SubMenu key={subMenu.title} title={renderTitle(subMenu.title)}>
              {subMenu.subMenu.map(item => (
                <Menu.Item key={item}>{renderTitle(item)}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};


export default SideMenu;