import '../SCSS/Nav/nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import Lady from '../Photoes/lady.png'
import Man from '../Photoes/man.png'
import HelpIcon from '@mui/icons-material/Help';
export default function LeftNav(){
    return(
        <div className="leftNav">
        <div className="menu">
<MenuIcon className='menuBtn' fontSize="large" />
        </div>
        <div className="categories">
<img src={Lady} alt="lady" className='imgprofile' />
<img src={Man} alt="man" className='imgprofile' />
        </div>
        <div className='help'>
<HelpIcon className='menuBtn' fontSize="large"/>
        </div>
        </div>
    )
}