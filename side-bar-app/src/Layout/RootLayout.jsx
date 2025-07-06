import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'

const RootLayout = () => {
    return (
        <div style={{ display: "flex" }}>
            <SideBar />
            <Outlet />
        </div>
    )
}

export default RootLayout
