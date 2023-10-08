import {FC} from 'react'
import style from './Sidebar.module.scss'
import Card from '../../small_components/card/Card';
import { NavLink } from 'react-router-dom';

const Sidebar:FC = () => {
  return (
    <div className={style.container}>
        <div className={style.containerLogo}>
            <img className={style.logo} src={require('../../../assets/img/logo.png')} alt="" width={24} height={24}/>
            <img  src={require('../../../assets/img/PetsPaw.png')} alt="" width={71.87} height={12.56}/>
        </div>

        <div className={style.containerTitle}>
            <p className={style.title}>Hi!👋</p>
            <p className={style.underTitle}>Welcome to MacPaw Bootcamp 2023</p>
        </div>
                
        <div className={style.containerCardText}>
            <p className={style.textCard}>Lets start using The Cat API</p>
        </div>

        <div className={style.containerCard}>

        <div className="containerVoting">

          <Card bagColor="#B4B7FF" imgUrl="./img/vote-table.png" text="VOTING"/>
          <NavLink to={'/page/voting'} className={style.containerLink}>
              <p className={style.link} >VOTING</p>
          </NavLink>

          </div>

          <div className="containerVoting">
          <Card bagColor="#97EAB9" imgUrl="./img/pet-breeds.png" text="BREEDS"/>
          <NavLink to={'/page/breeds'} className={style.containerLink}>
              <p className={style.link}>BREEDS</p>
          </NavLink>
          </div>


          <div className="containerVoting">
          <Card bagColor="#FFD280" imgUrl="./img/images-search.png" text="GALLERY"/>
          <NavLink to={'/page/gallery'} className={style.containerLink}>
              <p className={style.link} >GALLERY</p>
          </NavLink>
          </div>
         
        </div>
    </div>
  )
}

export default Sidebar