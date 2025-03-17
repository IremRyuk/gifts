import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import '../SCSS/Category/category.css'
import { FormGroup,FormControlLabel,Checkbox,Slider,Stack } from '@mui/material'
import Datas from '../Res/lady.json'
import { useDispatch,useSelector } from 'react-redux'
import {DataFilterAct,DataFilterRemoveAct, FilterAct} from '../Redux/Action/DataFilterAct'
export default function Lady(){
    const dispatch = useDispatch()
    const data = useSelector(res=>{return res.dataFilter})
    const range = useSelector(state=>state.price)
    // Date
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    console.log()
    // add / remove
    // console.log(data)
    const addName = (names) => {
        if(!data.includes(names)){
            dispatch(DataFilterAct(names))
            console.log(data)
        }else{
            dispatch(DataFilterRemoveAct(names))
            console.log('gaiwminda',data)
        }
    }
const ArchevaSachuqris = () =>{
    // console.log(arr)
}

    // Data
    const datas = Datas
    return(
        <center><div className="cat-page">
            <center><div className='cat-col'>
<p className='cat-f-text'>აირჩიეთ ქალის საჩუქრები</p>
<FormGroup sx={{display:'grid',gridTemplateColumns:'30% 30% 30%',width:'100%',alignItems:'center',alignSelf:'center',justifyContent:'center', textAlign:'start'}}>
    {datas.map(res=>(
        <div key={res.id}>
        <FormControlLabel sx={{paddingLeft:'35px'}} control={<Checkbox />} label={res.names} onChange={()=>addName(res.names)}/>
        </div>
    ))}
</FormGroup>
{data.length === 0?<button className='archevaN'>არჩევა</button>:<button onClick={()=>ArchevaSachuqris()} className='archeva'>არჩევა</button>}
        </div></center>
        <center><div className='cat-col'>
        <p className='cat-f-text'>აირჩიეთ ბიუჯეტი</p>
  <Slider
  min={1}
  max={1000}
  value={range}
  sx={{color:'pink',width:'70%'}}
  onChange={(_e,newValue)=>{dispatch(FilterAct(newValue))}}
  valueLabelDisplay='auto'
  />
  <Stack direction='row' sx={{display:'flex',width:'70%', justifyContent:'center'}}>
  <p className='cat-f-text'>{range[0]}-დან  &nbsp;  {range[1]}-მდე</p>
  </Stack>
</div></center>
{/* Test */}
<center><div className='cat-col'>
<p className='cat-f-text'>აირჩიეთ თარიღი</p>
    <div className='cat-col-date'>
        <div>
<DatePicker className='datesStart' maxDate={endDate} dateFormat="dd/MM/yyyy" placeholderText='აირჩიეთ თარიღი' selected={startDate} onChange={(date) => setStartDate(date)} />
{startDate==null?<p className='cat-f-text'>აირჩიეთ თარიღი</p>:<p className='cat-f-text'>{startDate.getDate()} / {startDate.getMonth()+1} / {startDate.getFullYear()}-დან</p>}
</div>
<div>
<DatePicker minDate={startDate} dateFormat="dd/MM/yyyy"  placeholderText='აირჩიეთ თარიღი' selected={endDate} onChange={(date) => setEndDate(date)} />
{endDate==null?<p className='cat-f-text'>აირჩიეთ თარიღი</p>:<p className='cat-f-text'>{endDate.getDate()} / {endDate.getMonth()+1} / {endDate.getFullYear()}-დან</p>}
</div>
</div>
</div></center>
        </div></center>
    )
}