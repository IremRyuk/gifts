import '../SCSS/Home/home.css'
import Lady from '../Category/Lady'
import Man from '../Category/Man'
import { useSelector } from 'react-redux'
import SlideShow from './SlideShow'

export default function Home () {
    const searched = useSelector((state)=>state.search)
    return(
        <div className="home">
        {searched=='man'
        ?<Man />
        :searched=='lady'
        ?<Lady />
        :<SlideShow />
        }
        </div>
    )
} 