import {FC} from 'react'
import style from './BtnBack.module.scss'
import { useNavigate } from 'react-router-dom'

const BtnBack:FC = () => {

  let navigate = useNavigate()

  return (
    <div className={style.container} 
    onClick={()=>navigate('/')}>
        <img className={style.arrowBack}src={require('../../../assets/img/inputline/arrow.png')} alt="" />
    </div>
  )
}

export default BtnBack