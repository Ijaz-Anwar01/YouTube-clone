import './Sidebar.css'
import home from '../../Assets/home.png'
import game_icon from '../../Assets/game_icon.png'
import automobiles from '../../Assets/automobiles.png'
import sports from '../../Assets/sports.png'
import entertainment from '../../Assets/entertainment.png'
import tech from '../../Assets/tech.png'
import music from '../../Assets/music.png'
import blogs from '../../Assets/blogs.png'
import news from '../../Assets/news.png'
import jack from '../../Assets/jack.png'
import simon from '../../Assets/simon.png'
import tom from '../../Assets/tom.png'
import megan from '../../Assets/megan.png'
import cameron from '../../Assets/cameron.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>

        <div className="sortcut-links">

            <div className={`sidelinks ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="" />
                <p>Home</p>
            </div>
            <div className={`sidelinks ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt="" />
                <p>Gaming</p>
            </div>
            <div className={`sidelinks ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="" />
                <p>Automobiles</p>
            </div>
            <div className={`sidelinks ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" />
                <p>Sports</p>
            </div>
            <div className={`sidelinks ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="" />
                <p>Entertainment</p>
            </div>
            <div className={`sidelinks ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" />
                <p>Technology</p>
            </div>
            <div className={`sidelinks ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" />
                <p>Music</p>
            </div>
            <div className={`sidelinks ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="" />
                <p>Blogs</p>
            </div>
            <div className={`sidelinks ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" />
                <p>News</p>
            </div>
            <hr/>
        </div>

        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link" onClick={()=>setCategory(0)}>
                <img src={jack} alt="" /> <p>PewDiePie</p>
            </div>
            <div className="side-link" onClick={()=>setCategory(0)}>
                <img src={simon} alt="" /> <p>MrBeast</p>
            </div>
            <div className="side-link" onClick={()=>setCategory(0)}>
                <img src={tom} alt="" /> <p>Justin Beiber</p>
            </div>
            <div className="side-link" onClick={()=>setCategory(0)}>
                <img src={megan} alt="" /> <p>Five-Minutes Craft</p>
            </div>
            <div className="side-link" onClick={()=>setCategory(0)}>
                <img src={cameron} alt="" /> <p>NasDaily</p>
            </div>

        </div>



    </div>
  )
}

export default Sidebar