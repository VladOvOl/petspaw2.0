import {FC} from 'react'
import style from './Wraper.module.scss'
import { Idata } from '../../../pages/breeds_page/BreedsPage'

interface IProps{
    arr:Idata[]
    length:number
    preloader?:boolean
    heigth?:number
}



const Wraper:FC<IProps> = (props) => {
  return (
    <div className={style.containerMain} style={{height:props.heigth}}>
        <div className={props.length === 5 ? style.container  : props.length === 10 ?[style.container,style.add10].join(' ')
        : props.length === 15 ?[style.container,style.add15].join(' '): props.length === 20 ?[style.container,style.add20].join(' '):""} > 
        {props.arr.map((obj,index)=>
            <div className={style.containerImg} key={index}>
            {props.preloader ? <button>ggggg</button>:<img src={obj.url} alt="" />}
            </div>)}
        </div>
    </div>
  )
}

export default Wraper