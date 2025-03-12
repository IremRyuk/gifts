import '../SCSS/Nav/nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import Lady from '../Photoes/lady.png'
import Man from '../Photoes/man.png'
import HelpIcon from '@mui/icons-material/Help';
import {useDispatch} from 'react-redux'
import {SearchAction} from '../Redux/Action/SearchAction'
export default function LeftNav(){
        let dispatch = useDispatch()
        const Local = (word) => {
                dispatch(SearchAction(word))
        }
    return(
        <div className="leftNav">
        <div className="menu">
<MenuIcon className='menuBtn' fontSize="large" />
        </div>
        <div className="categories">
<img src={Lady} alt="lady" className='imgprofile' onClick={()=>Local('lady')}/>
<img src={Man} alt="man" className='imgprofile' onClick={()=>Local('man')} />
        </div>
        <div className='help'>
<HelpIcon className='menuBtn' fontSize="large"/>
        </div>
        </div>
    )
}