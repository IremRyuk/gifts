import '../SCSS/Nav/nav.css'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import { useDispatch } from 'react-redux';
import { SearchAction } from '../Redux/Action/SearchAction';

export default function Nav(){
    const [search,setSearch] = useState('')
    const dispatch = useDispatch()
    return(
        <div className="nav">
            <center>
            <div className="nav-box">
            <div className='title' onClick={()=>dispatch(SearchAction(null))}>
IremRyuk
            </div>
            <div className='search'>
                <input type='text' 
                className='text-input' 
                placeholder='ძებნა...' 
                onChange={(e)=>setSearch(e.target.value)}
                />
            </div>
            <div className='title'>
            <Badge badgeContent={0} max={999} color="error" showZero className='faveBadge'>
            <FavoriteIcon className='fave' fontSize="large"/>
</Badge>
            </div>
            </div></center>
        </div>
    )
}