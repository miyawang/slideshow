init();
let n = 1;
setInterval(()=>{
  makeLeave(getImage(n))  // 函数那边如果不传回node  这里返回undefined
  .one('transitionend',(e)=>{
    // let 当前元素 = e.currentTarget
    makeEnter($(e.currentTarget))
  })
  console.log(n);
  makeCurrent(getImage(n+1));
  n = n+1;
},3000)

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