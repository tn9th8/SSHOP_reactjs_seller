import { Layout } from 'antd';
import { Outlet } from 'react-router';
import HeaderComponent from '../../components/layout/header.component';
import SiderComponent from '../../components/layout/sider.component';
import './style.scss';

const LayoutPage = () => {
    return (
        <Layout className='app-layout'>
            <HeaderComponent />
            <Layout>
                <SiderComponent />
                <Layout className='outlet-layout'>
                    <Outlet />
                </Layout>
            </Layout>
        </Layout >
    );
};

export default LayoutPage;