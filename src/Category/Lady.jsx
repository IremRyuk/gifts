import { useState } from 'react'
import '../SCSS/Category/category.css'
import { FormGroup,FormControlLabel,Checkbox } from '@mui/material'
import Datas from '../Res/lady.json'
export default function Lady(){
    const [arr,setArr] = useState([])
    // add / remove
    const addName = (names) => {
        if(arr.includes(names)){
            setArr(arr.filter(info=>info !== names))
            // console.log(arr)
        }else{
            arr.push(names) 
            // console.log(arr)
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
        <FormControlLabel sx={{paddingLeft:'35px'}} control={<Checkbox />} label={res.names} onClick={()=>addName(res.names)}/>
        </div>
    ))}
</FormGroup>
<button onClick={()=>ArchevaSachuqris()} className='archeva'>არჩევა</button>
        </div></center>
        </div></center>
    )
}