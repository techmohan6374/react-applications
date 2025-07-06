import { NavLink } from 'react-router-dom'
import '../styles/SideBar.css'

const SideBar = () => {
    return (
        <div id='SideBar'>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <iconify-icon icon="mdi:view-dashboard-outline"></iconify-icon> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/datasets">
                            <iconify-icon icon="material-symbols:dataset-outline-rounded"></iconify-icon> Datasets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/role">
                            <iconify-icon icon="heroicons:user-group-16-solid"></iconify-icon> Role
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">
                            <iconify-icon icon="uil:user"></iconify-icon> Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/routes">
                            <iconify-icon icon="tabler:route"></iconify-icon> Routes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reportcenter">
                            <iconify-icon icon="gg:chart"></iconify-icon> Report Center
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar
