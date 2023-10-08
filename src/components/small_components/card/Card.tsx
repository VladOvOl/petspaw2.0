import {FC} from 'react'
import style from './Card.module.scss'

interface IProps{
    bagColor: string,
     imgUrl: string,
     text: string
}


const Card:FC<IProps> = (props) => {
  return (
    <div className={style.container}>
      <div className={style.containerCard} style={{backgroundColor : props.bagColor}}>
        <img src={props.imgUrl} alt="" />
      </div>
    </div>
  )
}

export default Card