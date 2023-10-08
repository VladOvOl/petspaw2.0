import {FC} from 'react'
import style from './Layout.module.scss'
import Sidebar from '../components/big_components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout:FC = () => {
  return (
    <div className={style.container}>
      <div className={style.containerContent}>
        <Sidebar/>
         <Outlet/>
      </div>
        
    </div>
  )
}

export default Layout