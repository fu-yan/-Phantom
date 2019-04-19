import React , { Component }from 'react'
import { connect } from 'dva'
import Link from 'umi/link'
import {getMovie} from "../../services/data"
import "../../assets/movie.css"


class Movie extends Component {
  constructor(props){
    super(props);
    props.dispatch({
      type:'Title/wanxiang',
      payload:{
        title:"电影"
    }})
  }
  async componentDidMount(){
    const ry = await getMovie()
    this.props.dispatch({
      type:'Movie/Reying',
      payload:{
        reying: ry.data
      }
    })
    // console.log(ry.data)
  }
  render() {
    const {ms} = this.props.Movie.reying;
    return (
      <div>
        <h5>全部电影</h5>
        <div className="reying">
        <ul>
          {ms?ms.map(item=>
          <li key={item.id}><Link to={`/movie/${item.id}`}>
          <img src={item.img}/>
          <p>{item.t}</p>
          <p style={{fontSize:'0.6rem',color:'#999',overflow:'hidden'}}>{item.commonSpecial}</p>
          </Link></li>):""}
        </ul>
        </div>
      </div>
    )
  }
}



function mapStateToProps(state) {
  
  return state
}

export default connect(mapStateToProps)(Movie)