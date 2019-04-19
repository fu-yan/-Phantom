import React,{useEffect} from 'react'
import { connect } from 'dva'


function Detail(props) {
  console.log(props.match.params.id)
  var id = props.match.params.id
  const detail = props.readlist[id];
  console.log(detail)
  useEffect(() => {
    if(detail){
      let con = document.getElementsByClassName("con")[0]
      console.log(con,detail)
      con.innerHTML = detail.content;
    }
  },[])
  return (
    <div>
      <i onTouchStart={()=>history.go(-1)}>返回</i>
      <div style={{margin:'0.3rem 0',padding:'0.5rem',background:'#dfd',fontSize:'0.8rem'}}>
        <h3 style={{textAlign:'center',lineHeight:'2rem'}}>{detail.title}</h3>
        <p style={{textAlign:'center',fontSize:'0.6rem',padding:'0.4rem 0'}}>作者：{detail.author} / {detail.date.curr}</p>
        <div className='con' style={{textIndent:'1.6rem',fontFamily:'bowen',paddingLeft:'0.2rem'}}></div>
      </div>
    </div>
  )
}


export default connect(state=>state.Movie)(Detail)