import {FC,useEffect,useState,useMemo} from 'react'
import style from './BreedsPage.module.scss'
import BtnBack from '../../components/small_components/btn_back/BtnBack'
import LabelPage from '../../components/small_components/label_page/LabelPage'
import Wraper from '../../components/big_components/wraper/Wraper'
import { AxiosGetImgs } from '../../api/breeds_page/AxiosGetImgs'
import { axiosGetBreeds } from '../../api/breeds_page/AxiosGetBreeds'
import { Dropdown ,MenuButton,Menu,MenuItem} from '@mui/base'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeBreedState, changeLimitState, changePreload } from '../../store/slices/breeds_page_slice'



export interface Idata{
  id?:string,
  url?:string,
  breeds?:[],
  width?:string
}

export interface IBreeds{
  name:string,
  id:string
}
const BreedsPage:FC = () => {
  
    const dispatch = useAppDispatch()
    const[dataWraper, setDataWraper] = useState<Idata[]>([])
    const[dataBreeds, setDataBreeds] = useState<IBreeds[]>([])
    let preloder = useAppSelector(state => state.breedsPageToolkit.preload)

    let limit = useAppSelector(state => state.breedsPageToolkit.limit)
    let breed = useAppSelector(state => state.breedsPageToolkit.breed)

    useEffect(()=>{axiosGetBreeds().then((res)=>setDataBreeds([{name:"All breeds",id:''},...res]))},[])
    useEffect(()=>{AxiosGetImgs(limit,breed.id).then((res)=>{
    setDataWraper(res)
    dispatch(changePreload())}).finally(()=>dispatch(changePreload()))},[limit,breed])
  

  let dataLimit:number[]=[5,10,15,20]


  return (
    <div className={style.container}>
      <div className={style.containerNavbar}>
        <BtnBack/>
        <LabelPage text={"BREEDS"}/>
  
        <Dropdown>
          <MenuButton className={style.containerBreeds}>{breed.name}</MenuButton>

          <Menu id={style.customMenuBreeds}
            className="CustomMenu"
            slotProps={{
              listbox: { className: 'CustomMenu--listbox' },
            }}>
            {dataBreeds.map((res)=> 
              <MenuItem
                className="CustomMenu--item"
                onClick={()=>dispatch(changeBreedState(res))}>
                {res.name}
              </MenuItem>)}
      
          </Menu>
        </Dropdown>

        <Dropdown>
          <MenuButton className={style.containerLimit}>Limit:{limit}</MenuButton>

          <Menu id={style.customMenuLimit}
            className="CustomMenu"
            slotProps={{
              listbox: { className: 'CustomMenu--listbox' },
            }}
          >
            {dataLimit.map((res)=> 
              <MenuItem
                className="CustomMenu--item"
                onClick={()=>dispatch(changeLimitState(res))}>
                Limit:{res}
              </MenuItem>)}
          
          </Menu>
        </Dropdown>


            <div className={style.containerSortAZ}>
                <img className={style.imgSortActive} src={require('../../assets/img/inputline/AZ.png')} alt="" />
            </div>

            <div className={style.containerSortZA}>
                <img className={style.imgSortPassive} src={require('../../assets/img/inputline/ZA.png')} alt=''/>
            </div>
        </div>

        <Wraper arr={dataWraper} length={limit} preloader={preloder} heigth={470}/>
        

      </div>

  
  )
}

export default BreedsPage