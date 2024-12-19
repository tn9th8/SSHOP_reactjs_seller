import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useNavigate } from "react-router";
import { HomeFilled as IconHome, SnippetsFilled as IconOrder, ProductFilled as IconProduct } from '@ant-design/icons';

const items = [
    {
        key: 'Homepage',
        icon: <IconHome />,
        label: 'Homepage',
        path: '/homepage',
    },
    {
        key: 'Orders',
        icon: <IconOrder />,
        label: 'Orders',
        children: [
            {
                key: 'Manage orders',
                label: 'Manage orders',
                path: '/order/manage',
            },
            {
                key: 'Manage cancellations',
                label: 'Manage cancellations',
                path: '/order/cancellation',
            }
        ],
    },
    {
        key: 'Products',
        icon: <IconProduct />,
        label: 'Products',
        children: [
            {
                key: 'Manage products',
                label: 'Manage products',
                path: '/product/manage',
            },
            {
                key: 'Product ratings',
                label: 'Product ratings',
                path: '/product/rating',
            }
        ],
    },
]

const SiderComponent = () => {
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    // const [selectedLabel, setSelectedLabel] = useState<string>('Homepage');
    const navigate = useNavigate();
    const { token: { colorBgContainer } } = theme.useToken();

    const onOpenChange = (keys: string[]) => {
        //keys: [old key, new key]
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    };

    const onSelect = (info: any) => {
        const { keyPath } = info;
        const item = findItemByKeyPath(keyPath);

        if (item.key === 'Homepage')
            setOpenKeys([]);
        navigate(item.path);
        // setSelectedLabel(item.label);
    };

    const findItemByKeyPath = (keyPath: string[]) => {
        let currentItems: any = items;
        let foundItem: any;
        //keyPath: [child item, parent item]
        for (let i = keyPath.length - 1; i >= 0; i--) {
            console.log(keyPath[i]);
            foundItem = currentItems.find((item: any) => item.key === keyPath[i]);
            console.log(foundItem);

            if (foundItem) {
                currentItems = foundItem.children || [];
            } else {
                return undefined;
            }
            console.log(currentItems);
        }

        return foundItem;
    };

    return (
        <Sider width={220} style={{ background: colorBgContainer }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['Homepage']}
                defaultOpenKeys={['Homepage']}
                style={{ paddingLeft: 2, paddingRight: 2, marginTop: 16 }}
                items={items}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                onSelect={onSelect}
            />
        </Sider>
    );
}

export default SiderComponent;