import {FC, useEffect, useState} from 'react'
import style from './VotingPage.module.scss'
import BtnBack from '../../components/small_components/btn_back/BtnBack'
import LabelPage from '../../components/small_components/label_page/LabelPage'
import { axiosGetImg } from '../../api/voting_page/AxiosGetImg'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addToArrDislikeImg, addToArrFavouriteImg, addToArrLikeImg, addToLogLike } from '../../store/slices/voting_page_slice'
import { IVotingCard } from '../../types/TypesCard'
import VotingLog from '../../components/small_components/voting_log/VotingLog'
import { axiosPostImg } from '../../api/voting_page/AxiosPostImg'
import { axiosGetImg2 } from '../../api/voting_page/AxiosGetImg copy'

const VotingPage:FC = () => {

  let now = new Date().toLocaleTimeString().slice(0,-3);
  let dispatch = useAppDispatch()
  let [imgData, setImgData] = useState<IVotingCard>()
  const[btn, setBtn] = useState(false)
  let arrLog = useAppSelector(state=>state.votingPageToolkit.arrLog)
  
  useEffect(()=>{
    axiosGetImg().then((res)=>setImgData(res[0]))
  },[arrLog])



  const onClickLike=()=>{
    setBtn(!btn)
    dispatch(addToArrLikeImg(imgData))
    dispatch(addToLogLike({
      time:now, ...imgData , 
      message:'was added to Likes', 
      icon:"/img/log/smile.png",
    }))
  }

  const onClickFavourite=()=>{
    setBtn(!btn)
    if(imgData?.id)
    axiosPostImg(imgData?.id)
    axiosGetImg2()
    dispatch(addToArrFavouriteImg(imgData))
    dispatch(addToLogLike({
      time:now, ...imgData , 
      message:'was added to Favourites', 
      icon:"/img/log/like.png",
    }))
  }

  const onClickDisLike=()=>{
    setBtn(!btn)
    dispatch(addToArrDislikeImg(imgData))
    dispatch(addToLogLike({
      time:now, ...imgData , 
      message:'was added to DisLikes', 
      icon:"/img/log/dislike.png",
    }))
  }
  
  return (
   <div className={style.container}>
      <div className={style.containerNavbar}>
        <BtnBack/>
        <LabelPage text={"VOTING"}/>
      </div>

      <div className={style.containerImg}>
        <img src={imgData?.url} alt="" />

        <div className={style.containerBtnImg}>
            <div className={style.btnImg} id={style.like}
            onClick={()=>onClickLike()}>
              <img src={require('./assets/icons/like.png')} alt="" />
            </div>

            <div className={style.btnImg} id={style.favourite}
            onClick={()=>onClickFavourite()}>
              <img src={require('./assets/icons/favourite.png')} alt="" />
            </div>

            <div className={style.btnImg} id={style.dislike}
            onClick={()=>onClickDisLike()}>
              <img src={require('./assets/icons/sad.png')}  alt="" />
            </div>
        </div>
      </div>

      <div className={style.containerLog}>
        <div className={style.containerWraper}>
            {arrLog.map((obj)=><VotingLog message={obj.message} id={obj.id} time={obj.time} icon={obj.icon}/>)}
        </div>
      </div>
      

   </div>
  )
}

export default VotingPage