import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const sidebarLinks = [
    { name: "Dashboard", path: '/owner', icon: assets.dashboardIcon },
    { name: "Add Room", path: '/owner/add-room', icon: assets.addIcon },
    { name: "List Room", path: '/owner/list-room', icon: assets.listIcon },
  ]

  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>

      {sidebarLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          end={item.path === '/owner'}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 md:px-8 gap-3 ${
              isActive
                ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-600'
                : 'text-gray-700'
            }`
          }
        >
          <img src={item.icon} alt={item.name} />
          <p className="hidden md:block">{item.name}</p>
        </NavLink>
      ))}

    </div>
  )
}

export default Sidebar