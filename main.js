// setTimeout(function(){
//   $('.images>img:nth-child(1)').css({
//     transform:'translateX(-100%)'
//   })
//   $('.images>img:nth-child(2)').css({
//     transform:'translateX(-100%)'
//   })
//   $('.images>img:nth-child(1)').one('transitionend',function(e){
//     $(e.currentTarget).addClass('right').css({transform:'none'} )    
//   })
// },3000)
// setTimeout(function(){
//   $('.images>img:nth-child(2)').css({
//     transform:'translateX(-200%)'
//   })
//   $('.images>img:nth-child(3)').css({
//     transform:'translateX(-100%)'
//   })
//   $('.images>img:nth-child(2)').one('transitionend',function(e){
//     $(e.currentTarget).addClass('right').css({transform:'none'})
//   })
// },6000)
// setTimeout(function(){
//   $('.images>img:nth-child(3)').css({
//     transform:'translateX(-200%)'
//   })
//   $('.images>img:nth-child(1)').css({
//     transform:'translateX(-100%)'
//   })
//   $('.images>img:nth-child(3)').one('transitionend',function(e){
//     $(e.currentTarget).addClass('right').css({transform:'none'})
//   })
// },9000)
// setTimeout(function(){
//   $('.images>img:nth-child(1)').css({
//     transform:'translateX(-200%)'
//   })
//   $('.images>img:nth-child(2)').css({
//     transform:'translateX(-100%)'
//   })
//   $('.images>img:nth-child(1)').one('transitionend',function(e){
//     $(e.currentTarget).addClass('right').css({transform:'none'})
//   })
// },12000)



init();
let n = 1;
let timer = setInterval(()=>{
  makeLeave(getImage(n))  // 函数那边如果不传回node  这里返回undefined
  .one('transitionend',(e)=>{
    // let 当前元素 = e.currentTarget
    makeEnter($(e.currentTarget))
  })
  console.log(n);
  // makeLeave($(`.images > img:nth-child(${x(n)})`))  // 函数那边如果不传回node  这里返回undefined
  // .one('transitionend',(e)=>{
  //   makeEnter($(e.currentTarget))
  // })
  // $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
  // .one('transitionend',(e)=>{
  //   $(e.currentTarget).removeClass('leave').addClass('enter')
  // })
  // makeCurrent($(`.images > img:nth-child(${x(n+1)}`))
  makeCurrent(getImage(n+1));
  // $(`.images > img:nth-child(${x(n+1)}`).removeClass('enter').addClass('current');
  n = n+1;
  // console.log(n);
  
},3000)

document.addEventListener('visibilitychange',function(){
  console.log(document.hidden);
  if(document.hidden){
    window.clearInterval(timer);
  }else{
    timer = setInterval(()=>{
      makeLeave(getImage(n)) 
      .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
      })
      console.log(n);
      makeCurrent(getImage(n+1));
      n = n+1;
    },3000)
  }
})




function getImage(n){
  return $(`.images > img:nth-child(${x(n+1)})`);
}

function x(n){
  if(n > 3){
    n = n % 3
    if(n === 0){
      n = 3;
    }
  }
  return n;
}


function init(){
   var n = 1;
  $(`.images > img:nth-child(${n})`).addClass('current')
  .siblings().addClass('enter');
}
// 状态机
function makeCurrent($node){
  $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
  $node.removeClass('enter current').addClass('leave')
  return $node;
}
function makeEnter($node){
  $node.removeClass('current leave').addClass('enter')
}
// setTimeout(()=>{
//   $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
//   .one('transitionend',(e)=>{
//     $(e.currentTarget).removeClass('leave').addClass('enter')
//   })
//   $('.images > img:nth-child(2)').removeClass('enter').addClass('current');
// },3000)

// setTimeout(()=>{
//   $('.images > img:nth-child(2)').removeClass('current').addClass('leave')
//   .one('transitionend',(e)=>{
//     $(e.currentTarget).removeClass('leave').addClass('enter')
//   })
//   $('.images > img:nth-child(3)').removeClass('enter').addClass('current');
// },6000)

// setTimeout(()=>{
//   $('.images > img:nth-child(3)').removeClass('current').addClass('leave')
//   .one('transitionend',(e)=>{
//     $(e.currentTarget).removeClass('leave').addClass('enter')
//   })
//   $('.images > img:nth-child(1)').removeClass('enter').addClass('current');
// },9000)

// setTimeout(()=>{
//   $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
//   .one('transitionend',(e)=>{
//     $(e.currentTarget).removeClass('leave').addClass('enter')
//   })
//   $('.images > img:nth-child(2)').removeClass('enter').addClass('current');
// },12000)