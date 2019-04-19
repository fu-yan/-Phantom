import React, { Component, useEffect ,useState} from 'react'
import { connect } from 'dva'
import { getCinecism } from "../../services/data"
import Link from 'umi/link'


function Cinecism(props) {
  useEffect(() => {
    props.dispatch({
      type:'Title/fanhua',
      payload:{
        title:"趣闻"
    }}),
    getCinecism().then(res=>{
      // console.log(res.data);
      props.dispatch({
        type:'Movie/Cinecism',
        payload:{
          cinecism:res.data
      }})
    })
  },[])
  const {feedList} = props.cinecism;
  console.log(props.cinecism.feedList)
  return (
    <div>
      {feedList?feedList.map(item=>
      <div key={item.post_id} style={{border:'#ccc solid 0.05rem',margin:'0.5rem 0',padding:'0.5rem',background:'#feefff'}}>
        <p>{item.excerpt}</p>
        <div>
          <a href={item.url} style={{fontFamily:'bowen',color:'#f98eee'}}>查看详情</a>
          {/* {item.images.length?item.images.map(imgs=>{
            return(
            <img src={`https://api.tuchong.com/images/${imgs.img_id}`} />
            )
          }):''} */}
        </div>
      </div>
      ):''}
    </div>
  )
}


export default connect(state=>state.Movie)(Cinecism)


