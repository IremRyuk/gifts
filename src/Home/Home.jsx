import '../SCSS/Home/home.css'
import Lady from '../Category/Lady'
import Man from '../Category/Man'
import { useSelector } from 'react-redux'

export default function Home () {
    const searched = useSelector((state)=>state.search)
    
    console.log(searched)
    return(
        <div className="home">
        {searched=='man'
        ?<Man />
        :searched=='lady'
        ?<Lady />
        :<p>Nothing</p>
        }
        </div>
    )
} 