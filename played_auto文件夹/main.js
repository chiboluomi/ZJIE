var playList = [
    {
        id: 169185,
        name: "认真的雪",
        artists: "薛之谦",
        picUrl:
            "https://p2.music.126.net/yWtj0UXRJBCT9YI7csmAcw==/109951164190741294.jpg",
        playSrc: "https://music.163.com/song/media/outer/url?id=id.mp3",
    },
    {
        id: 5253734,
        name: "恋爱达人",
        artists: "罗志祥",
        picUrl:
            "https://p1.music.126.net/n4YTVSO7QK1VRQMCEeOPqA==/80264348845281.jpg",
        playSrc: "https://music.163.com/song/media/outer/url?id=id.mp3",
    },
    {
        id: 277302,
        name: "爱",
        artists: "莫文蔚",
        picUrl:
            "https://p1.music.126.net/hcY73QYZt36DeGf91euboQ==/18921495602636668.jpg",
        playSrc: "https://music.163.com/song/media/outer/url?id=id.mp3",
    },
];
 
var list = document.querySelector('.list');
var h4 = document.querySelector('h4');
var p = document.querySelector('p');
var inner = document.querySelector('.inner img');
var mask = document.querySelector('.mask');
playList.forEach(function(element,index){
    var node=document.createElement('li');
    // var small_node = document.querySelector('i');

    // 为i添加类名iconfont  
    // small_node.setAttribute('class','iconfont');
    // small_node.classList.add('icon-volume');

    
    node.innerText=element.name;
    node.title = element.artists;
    node.dataset.id = element.id;
    node.style.color='#a8a8a8';
    node.style.listStyle="none";
    node.style.fontSize="14px";
    node.style.marginLeft="20px"
    // node.appendChild(small_node);
    
    
    list.appendChild(node);
    // 点击node，切换背景图片和旋转的图片
    node.addEventListener('click',function(){
        var dataset_id = this.dataset.id;
        h4.innerText = node.innerText;
        p.innerText = node.title;
        audio.src = "https://music.163.com/song/media/outer/url?id="+this.dataset.id+".mp3";
        var _this=this.dataset.id;
        var n = playList.filter(function(element,index){
            return element.id == _this;
        })
        console.log(n);
        mask.style.backgroundImage = 'url('+"'"+n[0].picUrl+"'"+")";
        inner.src = n[0].picUrl;
    })
})
var audio = document.querySelector('audio');
var slider = document.querySelector('.progress .slider')
var progress = document.querySelector('.progress input');
var time_max = document.querySelectorAll('.time .right ul li');
var current_time=document.querySelectorAll('.time .left ul li');
// 获取拖动条最大时长
audio.addEventListener('durationchange',function(){
    console.log(this.duration);
    progress.max = this.duration;
    // 设置时间
    var value= Math.floor(this.duration);
    time_max[1].innerText=Math.floor(value/60);
    time_max[3].innerText=Math.floor(value%60/10);
    time_max[4].innerText=Math.floor(value%60%10);

})
// 根据input的value值改变滑块的长度
progress.addEventListener('input',function(){
    // console.log(this.value);
    slider.style.width = (this.value/this.max)*100 + '%';
    console.log(slider.style.width)
})
// 根据input的值改变音频播放的位置
progress.addEventListener('input',function(){
    audio.currentTime = this.value;
    // console.log(audio.currentTime);
})
// 将音频的播放进度与input vaule值关联起来
audio.addEventListener('timeupdate',function(){
    CurrentTime=Math.floor(this.currentTime/1);
    progress.value =CurrentTime;
    slider.style.width = (CurrentTime/progress.max)*100 + '%';

    current_time[1].innerText=Math.floor(CurrentTime/60);
    current_time[3].innerText=Math.floor(CurrentTime%60/10);
    current_time[4].innerText=Math.floor(CurrentTime%60%10);
})

var cd_tou = document.querySelector('.cd_tou');
var Play = document.querySelector('.play_pause .play');
var pause = document.querySelector('.play_pause .pause');
var play_pause = document.querySelector('.play_pause');
// 设置播放时，cd头摆放位置和内部图片是否旋转
audio.addEventListener('play',function(){
    cd_tou.classList.add('playing');
    inner.classList.add('playing');
    Play.style.display = 'none';
    pause.style.display = "block";
})
audio.addEventListener('pause',function(){
    cd_tou.classList.remove('playing');
    inner.classList.remove('playing');
    Play.style.display = 'block';
    pause.style.display = "none";
})

//  暂停与播放
play_pause.onclick = function(){
    if(pause.style.display == "block"){
        audio.pause();
        Play.style.display = 'block';
        pause.style.display == "none"
       
    }else{
        audio.play();
        pause.style.display = "none";
        Play.style.display = 'block';
    }
}

// 设置音量
var volume_progress=document.querySelector('.progress2 input');
var slider2 = document.querySelector('.progress2 .slider2');
audio.addEventListener('volumechange',function(){
    console.log(this.volume);
    max_value=this.volume; 
    volume_progress.value = this.volume;
    slider2.style.width =this.value*100 + '%';
    
})
volume_progress.addEventListener('input',function(){
    audio.volume = this.value;
    console.log('volume',audio.volume);
    slider2.style.width =(this.value/this.max)*100 + '%';
    console.log(slider2.style.width);
})

// 静音状态与非静音状态

var muted_volume = document.querySelector('.muted_volume');
var Volume = document.querySelector('.muted_volume .volume');
var Muted = document.querySelector('.muted_volume .muted');
muted_volume.onclick=function(){
    console.log(333)
    if(Volume.style.display=="block"){
        audio.volume=0;
        Volume.style.display = "none";
        Muted.style.display = "block";
    }else{
        audio.volume=volume_progress.value;
        Volume.style.display = "block";
        Muted.style.display = "none";
    }
}


// 定义切换函数
var lis = document.querySelectorAll('ul li');
function changemusic(index){
    h4.innerText =playList[index].name;
    p.innerText=playList[index].artists;
    audio.src = "https://music.163.com/song/media/outer/url?id="+playList[index].id+".mp3";
    mask.style.backgroundImage = 'url('+"'"+playList[index].picUrl+"'"+")";
    inner.src = playList[index].picUrl;

}
// 下一首播放
var next = document.querySelector('.controls .left span .next');
var prev =document.querySelector('.controls .left span .prev')
var lis = document.querySelectorAll('ul li');
var index = 0;
next.onclick = function(){
    index++;
    if(index>2){
        index=0;
    }else{
        index = index;
    }
    changemusic(index);
}
prev.onclick = function(){
    index--;
    if(index<0){
        index=2;
    }else{
        index=index;
    }
    changemusic(index);
}
var loop_ran_cycle = document.querySelector('.loop_ran_cycle');
var loop=document.querySelector('.loop');
var cycle = document.querySelector('.cycle');
var random = document.querySelector('.random')
loop_ran_cycle.addEventListener('click',function(){
    if(loop.style.display=='none'&&cycle.style.display=='block'&&random.style.display=="none"){
        cycle.style.display='none';
        loop.style.display='block';
        random.style.display=='none'
        
    }else if(loop.style.display=='block'&&cycle.style.display=='none'&&random.style.display=="none"){
        cycle.style.display='none'
        loop.style.display='none';
        random.style.display="block";
        
    }else{
        cycle.style.display='block';
        random.style.display="none";
        loop.style.display="none"
      
    }
})
// 随机播放  单曲循环
audio.addEventListener('ended',function(){
    if(cycle.style.display=='block'){
        audio.loop=true;
        audio.play()
    }
    if(loop.style.display=='block'){
        audio.loop=false;
        next.onclick();
        audio.play()
    }
    if(random.style.display=="block"){
        audio.loop=false;
        var random_index = Math.floor(Math.random()*(2-0+1)+0);
        changemusic(random_index);
        audio.play()
    }
   
})
// 设置显示时间











