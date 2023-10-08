import {FC} from 'react'
import style from './DislikePage.module.scss'
import { useAppSelector } from '../../store/hooks'
import BtnBack from '../../components/small_components/btn_back/BtnBack'
import LabelPage from '../../components/small_components/label_page/LabelPage'
import Wraper from '../../components/big_components/wraper/Wraper'

function DislikePage() {

    let arrDislike = useAppSelector(state => state.votingPageToolkit.arrDislikeImg)

    let length:number=5
    if(arrDislike.length>5){
        length=10
    }else if(arrDislike.length>10){
        length=15
    }else if(arrDislike.length>15){
        length=20
    }
  return (
    <div className={style.container}>
        <div className={style.containerNavbar}>
            <BtnBack/>
            <LabelPage text={"DISLIKE"}/>
        </div>

        <Wraper arr={arrDislike} length={length}/>

    </div>
  )
}

export default DislikePage