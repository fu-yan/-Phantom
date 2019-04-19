import React, { useEffect, useState } from 'react'
import { getMovieDetail } from "../../services/data"
import '../../assets/movie.css'
import { loadavg } from 'os';


//右划返回
function fanhui(e) {
  var ele = document.getElementsByClassName("Detail")[0];
  // console.log(ele)
  var beginX, beginY, endX, endY, swipeLeft, swipeRight;
  beginX = e.targetTouches[0].screenX;
    beginY = e.targetTouches[0].screenY;
    // console.log(beginX,beginY)
  // ele.addEventListener('touchstart', function (event) {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   beginX = event.targetTouches[0].screenX;
  //   beginY = event.targetTouches[0].screenY;
  //   console.log(beginX,beginY)
    // swipeLeft = false, swipeRight = false;
  // });

  ele.addEventListener('touchmove', function (event) {
    event.stopPropagation();
    event.preventDefault();
    endX = event.targetTouches[0].screenX;
    endY = event.targetTouches[0].screenY;
    // console.log(endX,endY)
    // 左右滑动
    if (Math.abs(endX - beginX) - Math.abs(endY - beginY) > 0) {
      /*向右滑动*/
      if (endX - beginX > 0) {
        // swipeRight = true;
        // swipeLeft = false;
        // console.log('aa')
        history.go(-1)
      }
    }
  })
}

export default function Detail(props) {
  // console.log(props.match.params.id);
  const [detail, setDetail] = useState({})
  useEffect(() => {
    getMovieDetail(props.match.params.id)
      .then(res => {
        const data = res.data.data
        // console.log(data);
        setDetail({
          ...detail,
          ...data
        })
      })
  }, [])

  // console.log(detail)
  const { basic } = detail
  return (
    <div className='Detail' onTouchStart={(e) => fanhui(e)}>
      <i onTouchStart={()=>history.go(-1)}>返回</i>
      <video
        src={basic ? basic.video.hightUrl : ""}
        width='100%'
        poster={basic ? basic.video.img : ""}
        controls="controls">
        您的手机不支持播放该视频。
      </video>
      <span>{basic ? basic.video.title : ''}</span>
      <p style={{ lineHeight: '1.7rem', borderTop: '0.05rem solid #ddd' }}>影片信息</p>
      <div style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
        <img src={basic ? basic.img : ''} alt={basic ? basic.img : ''} style={{ width: '6rem', float: 'left' }} />
        <div style={{ width: '11.5rem', float: 'right' }}>
          <span>{basic ? basic.name : ''}</span>
          <span>时长：{basic ? basic.mins : ''}</span>
          <span>导演：{basic ? basic.director.name : ''}</span>
          <span>地区：{basic ? basic.releaseArea : ''}</span>
          <span>评分：{basic ? basic.overallRating : ''}</span>
        </div>
      </div>
      <p style={{ lineHeight: '1.7rem', borderTop: '0.05rem solid #ddd' }}>影片简介</p>
      <span>{basic ? basic.story : ''}</span>
      <p style={{ lineHeight: '1.7rem', borderTop: '0.05rem solid #ddd' }}>演员列表</p>
      <div style={{display:'block',overflow:'auto'}}>
        {basic ? basic.actors.map(item =>item.name?
        <dl key={item.actorId} style={{ width: '3.57rem', height: '3.7rem', float: 'left' }}>
          <dd><img src={item.img} style={{display:'block', width: '2.5rem', height: '2.7rem', borderRadius: '50%', margin: '0 auto' }}/></dd>
          <dt><p style={{ fontSize: '0.6rem', color: '#777', textAlign: 'center', width: '3.8rem' }}>{item.name}</p></dt>
        </dl>:''
        ) : "暂无数据"}
      </div>
    </div>
  )
}
