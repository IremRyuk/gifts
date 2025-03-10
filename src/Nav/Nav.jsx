import '../SCSS/Nav/nav.css'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';

export default function Nav(){
    const [search,setSearch] = useState('')
    console.log(search)
    return(
        <div className="nav">
            <div className='title'>
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
        </div>
    )
}