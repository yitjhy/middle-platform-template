import React from 'react';
import { Route, BrowserRouter as Router, withRouter, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Article from './../pages/article';
import { getMenuData } from '../constants';
import logo from "../logo.svg";
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const BasicRoute = props => {
    const { history } = props;
    const getMenuItem = menuData => {
        return menuData.reduce((pre, cur) => {
            if(cur.children) {
               pre.push(
                   <SubMenu
                       key={cur.key}
                       title={
                           <span>{cur.icon || <HomeOutlined />}<span>{cur.title}</span></span>
                       }
                   >
                       {
                           cur.children.map(menuItem => {
                               return <Menu.Item key={menuItem.key} onClick={() => {
                                   menuItem.pathname && history.push(menuItem.pathname);
                               }}>
                                   {menuItem.title}
                               </Menu.Item>
                           })
                       }
                   </SubMenu>
               )
            } else {
                pre.push(<Menu.Item key={cur.key} onClick={() => {
                    cur.pathname && history.push(cur.pathname);
                }}>
                    <span>{cur.icon || <HomeOutlined />}<span>{cur.title}</span></span>
                </Menu.Item>)
            }
            return pre;
        }, []);
    };
    return (
        <div>
            <Layout>
                <Sider collapsible>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                    >
                        <img src={logo} className="App-logo" alt="logo" />
                        {getMenuItem(getMenuData()).map(menu => menu)}
                    </Menu>
                </Sider>
                <Layout>
                    <Content>
                        <div style={{minHeight: '100vh'}}>
                            <Router>
                                <Route exact path="/" render={() => <Redirect to="/article" />} />
                                <Route component={Article} path="/article" />
                            </Router>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default withRouter(BasicRoute)
