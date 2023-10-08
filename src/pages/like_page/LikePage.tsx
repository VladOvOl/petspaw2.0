import {FC} from 'react'
import style from './LikePage.module.scss'
import BtnBack from '../../components/small_components/btn_back/BtnBack'
import LabelPage from '../../components/small_components/label_page/LabelPage'
import Wraper from '../../components/big_components/wraper/Wraper'
import { useAppSelector } from '../../store/hooks'

const LikePage:FC = () => {

    let arrLike = useAppSelector(state => state.votingPageToolkit.arrLikeImg)

    let length:number=5
    if(arrLike.length>5){
        length=10
    }else if(arrLike.length>10){
        length=15
    }else if(arrLike.length>15){
        length=20
    }
  return (
    <div className={style.container}>
        <div className={style.containerNavbar}>
            <BtnBack/>
            <LabelPage text={"LIKE"}/>
        </div>

        <Wraper arr={arrLike} length={length}/>

    </div>
  )
}

export default LikePage