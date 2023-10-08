import {FC, useState} from 'react'
import style from './Navbar.module.scss'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar:FC = () => {
    

    let [btnLike,setBtnLike] = useState(false)
    let [btnFavourite,setBtnFavourite] = useState(true)
    let [btnDislike,setBtnDislike] = useState(true)
  return (
    <div className={style.container}>
        <div className={style.containerNavbar}>
            <div className={style.containerInput} title="Search dont work">
                <input className={style.input}type="search" placeholder='Search for breeds by name' />
                <img className={style.loop}src={require('../../../assets/img/inputline/search.png')} alt="" height={20}width={20}/>
            </div>

            <div className={style.containerBtn}>
                <NavLink to={'likes'} className={({isActive})=> isActive ? style.activeBtn :style.btn}>
                    <img  src={require('../../../assets/img/inputline/smile.png')} 
                    onClick={()=>setBtnLike(!btnLike)}alt="" width={30} height={30}/>
                </NavLink>

                <NavLink to={'favourite'} className={style.btn}>
                <img  src={require('../../../assets/img/inputline/like.png')} 
                    onClick={()=>setBtnFavourite(!btnFavourite)}alt="" width={30} height={30}/>
                </NavLink>

                <NavLink to={'dislikes'} className={style.btn}>
                <img  src={require('../../../assets/img/inputline/sad.png')} 
                    onClick={()=>setBtnDislike(!btnDislike)}alt="" width={30} height={30}/>
                </NavLink>
            </div>

        </div>

        <Outlet/>
    </div>

    
  )
}

export default Navbar