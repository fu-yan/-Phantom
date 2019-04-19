import React, { Component, useEffect,useState } from 'react'
import { connect } from 'dva'
import { getSpeech } from "../../services/data"
import Link from 'umi/link'

function Speech(props) {
  const [speech,setSpeech] = useState({})
  useEffect(() => {
    props.dispatch({
      type:'Title/yueguang',
      payload:{
        title:"发现"
    }})
    getXdata()
  },[])
  // console.log(speech)
  async function getXdata(){
    getSpeech().then(res=>{
      const data = res.data
      props.dispatch({
        type:'Movie/Yueguang',
        payload:{
          yueguang:data
      }})
    }).catch(err=>console.log(err))
  }

  // console.log(props.yueguang)
  const {itemList} = props.yueguang;


  return (
    <div>
        {itemList?itemList.map((item,i)=>
        <div key={i}>
        {item.data.playUrl?<Link to={`/speech/${item.data.id}`}  style={{margin:'0.5rem 0',padding:'0.5rem',display:'block',background:'#f1f1f1'}}>
        <video
          src={item.data.playUrl}
          width='100%'
          poster={item.data.cover?item.data.cover.detail:""}
          controls="controls"
          style={{position:'static'}}
          >
          您的手机不支持播放该视频。
        </video>
        <p>{item.data.title}</p>
        <p style={{fontSize:'0.6rem',color:'#777',overflow:'hidden'}}>{item.data.description}</p>
        </Link>:''}
        </div>):"加载中......"}
    </div>
  )
}


export default connect(state=>state.Movie)(Speech)
