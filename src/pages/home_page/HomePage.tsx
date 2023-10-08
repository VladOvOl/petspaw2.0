import {FC, useEffect, useState} from 'react'
import style from './HomePage.module.scss'
import axios from 'axios';

const HomePage:FC = () => {
  return (
        
    <div className={style.container}>
        <img className={style.img}src={require('../../assets/img/girl-and-pet 1.png')} 
        alt=""/>
        <div className={style.containerBlock}>

        </div>
        
    </div>
  )
}

export default HomePage