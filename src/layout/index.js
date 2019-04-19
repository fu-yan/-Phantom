
import { TabBar, Icon, Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import { NavLink } from 'react-router-dom'
import { connect } from 'dva'
import "../assets/index.css"

function icon(name) {return require(`../assets/font_icon/${name}.png`)}
const data = [
    {key:1,con:"万象",url:"/movie",icon:icon("movie1")},
    {key:2,con:"繁华",url:"/cinecism",icon:icon("cinecism1")},
    {key:3,con:"月光",url:"/speech",icon:icon("video1")},
    {key:4,con:"静思",url:"/read",icon:icon("book1")}
]

function Main(props){
    return(
        <div>
            <header>
                {props.Title.title}
            </header>
            <section>
                {props.children}
            </section>
            <footer>
                {data.map(item=>
                    <NavLink to={item.url} key={item.key} activeStyle={{backgroundImage:`url(${item.icon})`,color:"#faa"}}>
                        {/* <img src={item.active ? item.icon1 : item.icon} alt=""/> */}
                        <p>{item.con}</p>
                    </NavLink>
                )}
            </footer>
        </div>
    )
}

function mapStateToProps(state) {
    // console.log(state)
    return state
}

export default connect(mapStateToProps)(Main)



