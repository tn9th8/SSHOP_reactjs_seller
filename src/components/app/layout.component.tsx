import { Outlet } from "react-router";

const LayoutComponent = () => {
    return (
        <>
            <h1>Header</h1>
            <h1>Menu</h1>
            <Outlet />
        </>
    );
};

export default LayoutComponent;