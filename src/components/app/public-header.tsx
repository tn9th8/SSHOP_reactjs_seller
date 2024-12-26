import { Header } from "antd/es/layout/layout";
import { Menu, Dropdown, Button, Space, Divider } from '@arco-design/web-react';
import { IconDown, IconLanguage, IconPublic } from '@arco-design/web-react/icon';
import './style.scss';
const MenuItem = Menu.Item;

const PublicHeader = () => {

    const languageMenu = (
        <Menu
            style={{ fontFamily: 'TikTokMedium', borderRadius: 6 }}
            defaultSelectedKeys={['en']}
        >
            <MenuItem key="vi" style={{ borderRadius: 6 }} disabled>Tiếng Việt</MenuItem>
            <MenuItem key="en" style={{ borderRadius: 6 }}>US English</MenuItem>
        </Menu>
    );

    const GmtMenu = (
        <Menu
            style={{ fontFamily: 'TikTokMedium', borderRadius: 6 }}
            defaultSelectedKeys={['en']}
        >
            <MenuItem key="sg" style={{ borderRadius: 6 }} disabled>Singapore</MenuItem>
            <MenuItem key="tl" style={{ borderRadius: 6 }} disabled>Thailand</MenuItem>
            <MenuItem key="vn" style={{ borderRadius: 6 }}>Vietnam</MenuItem>
        </Menu>
    );

    return (
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo và Tên SSHOP */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/logo/sshop.png" alt="SSHOP Logo" style={{ height: 40, marginRight: 10 }} />
                <span style={{ fontSize: '20px', fontFamily: 'TikTokMedium' }}>SShop</span>
                <Divider type='vertical' />
                <span style={{ fontSize: '20px', fontFamily: 'TikTokMedium' }}>Seller Center</span>
            </div>
            {/* Thông tin liên hệ và Dropdown */}

            <Space style={{ display: 'flex', alignItems: 'center' }}>
                <Button
                    type='text'
                    style={{ color: '#ffffff', fontFamily: 'TikTokMedium', fontSize: 14, background: 'transparent', margin: '0px 0px' }}>Contact us</Button>
                <Divider type='vertical' style={{ margin: '0px 0px' }} />
                {/* Dropdown Chọn Ngôn Ngữ */}
                <Dropdown trigger="hover" droplist={GmtMenu} position="bottom" >
                    <Button type='text' style={{ color: '#ffffff', fontFamily: 'TikTokMedium', fontSize: 14, background: 'transparent', margin: '0px 0px' }}>
                        <IconPublic style={{ margin: '0px 0px', fontSize: 15 }} />
                        <span style={{ margin: '0px 2px' }}>Vietnam</span>
                        <IconDown style={{ marginLeft: 4 }} />
                    </Button>

                    {/* <DownOutlined /> */}

                </Dropdown>
                <Divider type='vertical' style={{ margin: '0px 0px' }} />
                {/* Dropdown Chọn Ngôn Ngữ */}
                <Dropdown trigger="hover" droplist={languageMenu} position="bottom" >
                    <Button type='text' style={{ color: '#ffffff', fontFamily: 'TikTokMedium', fontSize: 14, background: 'transparent', margin: '0px 0px' }}>
                        <IconLanguage style={{ margin: '0px 0px', fontSize: 15 }} />
                        <span style={{ margin: '0px 2px' }}>US English</span>
                        <IconDown style={{ marginLeft: 4 }} />
                    </Button>
                </Dropdown>
                <Button
                    type='primary' status='danger'
                    style={{ color: '#ffffff', fontFamily: 'TikTokMedium', fontSize: 14, margin: '0px 0px', background: '#fe2c55' }}>
                    Sign up</Button>
            </Space>

        </Header >
    );
};

export default PublicHeader;