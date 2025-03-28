import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import '../SCSS/Category/category.css'
import { FormGroup,FormControlLabel,Checkbox,Switch } from '@mui/material'
import Datas from '../Res/lady.json'
import { useDispatch,useSelector } from 'react-redux'
import {DataFilterAct,DataFilterRemoveAct,DataMin,DataMax} from '../Redux/Action/DataFilterAct'
export default function Lady(){
    const dispatch = useDispatch()
    // Choose Gifts
    const data = useSelector(res=>{return res.dataFilter})
    // Budget
    const minBud = useSelector(res=>{return res.minBud})
    const maxBud = useSelector(res=>{return res.maxBud})
    // Date
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    // Restoraunt
    const [rest,setRest] = useState(false)
    const [hotel,setHotel] = useState(false)
    console.log(rest,hotel)
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
            {/* Gifts */}

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


           {/* Restourant */}

           <center><div className='cat-col'>
           <FormGroup>
              <FormControlLabel control={<Switch onClick={()=>setRest(e=>!e)} />} label="რესტორნის ორგანიზება" />
              <FormControlLabel control={<Switch onClick={()=>setHotel(e=>!e)} />} label="სასტუმროს ორგანიზება" />
           </FormGroup>
           </div></center>


           {/* Date */}

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


             {/* Budget */}

        <center><div className='cat-col'>
        <p className='cat-f-text'>აირჩიეთ ბიუჯეტი</p>
        <div className='cat-col-date'>
            <div>
        <input type='number' min={1} max={maxBud} placeholder='0' className='cat-bud' onChange={(e)=>dispatch(DataMin(e.target.value))} value={minBud} />
        {minBud==null?<p className='cat-f-text'> მინიმუმი </p>:<p className='cat-f-text'>მინიმუმი {minBud}</p>}
        </div>
        <div>
        <input type='number' min={minBud} max={9999999} placeholder='10 000' className='cat-bud'onChange={(e)=>dispatch(DataMax(e.target.value))} value={maxBud} />
        {maxBud==null?<p className='cat-f-text'> მაქსიმუმი </p>:<p className='cat-f-text'>მაქსიმუმი {maxBud}</p>}
        </div>
        </div>
</div></center>


        </div></center>
    )
}