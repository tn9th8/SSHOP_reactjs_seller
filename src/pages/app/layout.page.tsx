import { Layout } from 'antd';
import { Outlet } from 'react-router';
import HeaderComp from '../../components/app/header.component';
import SiderComp from '../../components/app/sider.component';
import './style.scss';

const LayoutPage = () => {
    return (
        <Layout className='app-layout'>
            <HeaderComp />
            <Layout>
                <SiderComp />
                <Layout className='outlet-layout'>
                    <Outlet />
                </Layout>
            </Layout>
        </Layout >
    );
};

export default LayoutPage;