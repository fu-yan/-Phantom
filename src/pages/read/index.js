import React, { Component, useEffect,useState } from 'react'
import { connect } from 'dva'
import { getRead,getReadList } from "../../services/data"
import Link from 'umi/link'

var list = [];
list.length = 16;
function Read(props) {
  useEffect(() => {
    props.dispatch({
      type:'Title/jingsi',
      payload:{
        title:"阅读"
    }})
    getRead().then(res=>{
      const data = res.data.data
      list[0] = data;
      props.dispatch({
        type:'Movie/ReadList',
        payload:{
          readlist:list
        }
      })
      getList()
    }).catch(err=>console.log(err))
  },[])


  var ndate = new Date()
  async function getList(){
    // console.log(ndate)
    // console.log(ndate-24*3600*1000)
    for(let i = 1; i<=15;i++){
      ndate = new Date(ndate-24*3600*1000);
      var y = ndate.getFullYear();
      var m = ndate.getMonth()+1;
      var d = ndate.getDate();
      var a = ''+y+(m>9?m:'0'+m)+(d>9?d:'0'+d)
      // console.log(a);
      const r = await getReadList(a)
      list[i] = r.data.data
    }
    props.dispatch({
      type:'Movie/ReadList',
      payload:{
        readlist:list
      }
    })
  }


  // console.log(list)
  const read = list[0];
  const rlist = list.slice(1,list.length)
  // console.log(rlist)
  return (
    <div>
        <h5>每日一文</h5>
        {read?
        <Link to={`/read/0`} style={{display:'block'}}>
        <div style={{margin:'0.3rem 0',padding:'0.3rem',background:'#feeeff',fontSize:'0.8rem'}}>
          <span>{read.title}</span>
          <span>作者：{read.author}</span>
          <p>{(read.digest).replace(/\s/gi,'')}......</p>
        </div>
        </Link>
        :'加载中......'}
        <h5>精彩阅读</h5>
        {rlist.length?rlist.map((item,i)=>{
          return(<Link to={`/read/${i+1}`} style={{display:'block'}} key={item.date.curr}>
          <div style={{margin:'0.5rem 0',padding:'0.3rem',background:'#feddee',fontSize:'0.8rem'}}>
            <span>{item.title}</span>
            <span>作者：{item.author} / {item.date.curr}</span>
            <p>{(item.digest).replace(/\s/gi,'')}......</p>
          </div>
        </Link>)
        }):'加载中......'
        }
    </div>
  )
}


export default connect(state=>state)(Read)
