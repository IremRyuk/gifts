import '../SCSS/Home/home.css'
import { useSelector } from 'react-redux'
import SlideShow from './SlideShow'

export default function Home () {
    const searched = useSelector((state)=>state.search)
    return(
        <div className="home">
        <SlideShow />
        </div>
    )
} 