import {FC} from 'react'
import style from './LabelPage.module.scss'

interface IProps{
  text:string
}

const LabelPage:FC<IProps> = (props) => {
  return (
    <div className={style.container}>
        <p>{props.text}</p>
    </div>
  )
}

export default LabelPage