import {FC} from 'react'
import style from './VotingLog.module.scss'
import { IVotingCard, IVotingLog } from '../../../types/TypesCard'


const VotingLog:FC<IVotingLog> = (props) => {
  return (
    <div className={style.containerMessage}>
        <div className={style.containerTime}>
            {props.time}
        </div>
        <div className={style.containerText}>
        <p>ImageID: {props.id} {props.message}</p>
        </div>
    <img className={style.imgItem} src={props.icon} alt="" width={20} height={17}/>
</div>
  )
}

export default VotingLog