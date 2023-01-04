
var links={
    setColor:function(color){
        var alist=document.querySelectorAll('a');
        var i=0;
        while(i<alist.length){
        alist[i].style.color=color;
        i+=1;
        } 
    }
}
var Body={
    setColor:function(color){
        document.querySelector('body').style.color=color;
    },
    setbackColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}
function nightdayhandler(self){
   var target=document.querySelector('body');
    if(self.value==='night'){
        Body.setbackColor('black');
        Body.setColor('white');
        self.value='day';

        links.setColor('green');
        
    } else {
        Body.setbackColor('white');
        Body.setColor('black');
        self.value='night';

        links.setColor('blue');
    }
} 
