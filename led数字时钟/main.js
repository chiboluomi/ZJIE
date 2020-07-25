        
var obj = {
    zero:[0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0],

    one:[0, 0, 0, 1, 0, 0,
        0, 0, 1, 1, 0, 0,
        0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 1, 1],

   two:[0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0],

    three:[0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0],

    four:[0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0],

    five:[0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0],

    six:[0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0],

    seven:[0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0],

    eight:[0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0],

    night:[0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 0]
    
};

// 补零函数
function zeros (n){
   
        if (n < 10) {
            return "0" + n;
        } else {
            return String(n);
        }
    
}
var arr=["zero","one","two","three","four","five","six","seven","eight","night"];
setInterval(function(){
    var arr2 =[];
    var d = new Date();
    var H = zeros(d.getHours());
    var M = zeros(d.getMinutes());
    var S = zeros(d.getSeconds());
    arr2=arr2.concat(H.split(""));
    arr2=arr2.concat(M.split(""));
    arr2=arr2.concat(S.split(""));
    // console.log(arr);
    var num = document.querySelectorAll(".num");
    var dot = document.querySelectorAll(".dot");
    var dot_li=document.querySelectorAll(".dot li");
    var dot2_li=document.querySelectorAll(".dot2 li");
    for(var i=0;i<dot_li.length;i++){
        dot_li[4].style.backgroundColor="red";
        dot_li[7].style.backgroundColor="red";
        dot_li[13].style.backgroundColor="red";
        dot_li[16].style.backgroundColor="red";

    }
    for(var i=0;i<dot2_li.length;i++){
        dot2_li[4].style.backgroundColor="red";
        dot2_li[7].style.backgroundColor="red";
        dot2_li[13].style.backgroundColor="red";
        dot2_li[16].style.backgroundColor="red";
    }
    arr2.forEach(function(element,index){
        var _index=index;
        
       obj[arr[parseInt(element)]].forEach(function(element,index){
        var lis = num[_index].querySelectorAll("li");
           if(element==1){
           lis[index].classList.add("active");
           }else{
               lis[index].classList.remove("active")
           }  
       })
    })
    
    
},1000)