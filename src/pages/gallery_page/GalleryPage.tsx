import {FC, useEffect, useState} from 'react'
import style from './GalleryPage.module.scss'
import BtnBack from '../../components/small_components/btn_back/BtnBack'
import LabelPage from '../../components/small_components/label_page/LabelPage'
import { Dropdown, Menu, MenuButton, MenuItem} from '@mui/base'
import { IBreeds, Idata } from '../breeds_page/BreedsPage'
import { axiosGetBreeds } from '../../api/breeds_page/AxiosGetBreeds'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeBreedState, changeLimitState, changeOrderState, changeTypeState } from '../../store/slices/gallery_page_slice'
import { AxiosGetImgs } from '../../api/gallery_page/AxiosGetImgs'
import Wraper from '../../components/big_components/wraper/Wraper'



const GalleryPage:FC = () => {

  let dispatch = useAppDispatch()

  const[dataBreeds, setDataBreeds] = useState<IBreeds[]>([])
  let[data, setData] = useState<Idata[]>([])
  const dataOrder:string[] = ['Random','Desc','Asc']
  const dataLimit:number[]=[5,10,15,20]
  const dataType:string[]=['All','Static','Animated']

  let order = useAppSelector(state => state.galletyPageToolkit.order)
  let type = useAppSelector(state => state.galletyPageToolkit.type)
  let breed = useAppSelector(state => state.galletyPageToolkit.breed)
  let limit = useAppSelector(state => state.galletyPageToolkit.limit)

  useEffect(()=>{axiosGetBreeds().then((res)=>setDataBreeds([{name:"All breeds",id:''},...res]))},[])
  useEffect(()=>{AxiosGetImgs(order,type,breed.id,limit).then((res)=>setData(res))},[limit,breed,type,order])
  

  return (
    <div className={style.container}>
      <div className={style.containerNavbar}>
        <div className={style.containerLogo}>
          <BtnBack/>
          <LabelPage text={"GALLERY"}/>
        </div>
        

        <div className={style.containerUpload} title='this work'>            
            <img src={require('../../assets/img/GalleryPage/upload.png')} alt="" height={16} width={15.576}/>
            <p> UPLOAD</p>
        </div>
      </div>
    
      <div className={style.containerSortline}>
        <div className={style.containerFirstline}>
          <Dropdown>
            <MenuButton className={style.containerOrder}>{order}</MenuButton>
              <Menu 
                className={style.customMenuOrder}
                slotProps={{
                  listbox: { className: 'CustomMenu--listbox' },
                }}>
                {dataOrder.map((res)=> 
                  <MenuItem
                    className="CustomMenu--item"
                    onClick={()=>dispatch(changeOrderState(res))}>
                    {res}
                  </MenuItem>)}
              </Menu>
          </Dropdown>

          <Dropdown>
            <MenuButton className={style.containerType}>{type}</MenuButton>

            <Menu id={style.customMenuType}
              className="CustomMenu"
              slotProps={{
                listbox: { className: 'CustomMenu--listbox' },
              }}
            >
              {dataType.map((res)=> 
                <MenuItem
                  className="CustomMenu--item"
                  onClick={()=>dispatch(changeTypeState(res))}>
                  {res}
                </MenuItem>)}
            </Menu>
          </Dropdown>

        </div>

        <div className={style.containerSecondline}>

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
          <MenuButton className={style.containerLimit}>
            <div>
              <span>Limit:{limit}</span> 
              <img src={require('../../assets/img/inputline/Down.png')} alt="" />
            </div>
          </MenuButton>

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

        <div className={style.containerReload} title='this work'>
          <img src={require('../../assets/img/GalleryPage/reload.png')} alt="" />
        </div>

      </div>
    </div>

    <div className={style.containerWraper}>
        <Wraper arr={data} length={limit} heigth={410}/>
    </div>
    
  </div>

  )
}

export default GalleryPage