var arr1=[];
var arr2=[];
$('#create').click(function(){
   var k=0;
 for(var i=0;i<5;i++){
    for(var j=0;j<5;j++){
        
        $('.move').eq(k).css({
               
    backgroundImage:"url(images/1.jpg)",
        backgroundPosition:(960- j * 192) + 'px ' + (800 - i * 160) + 'px'
    })
        arr1.push(960- j * 192);
        arr2.push(800 - i * 160);
        k++;
}
}     
})
//console.log(arr1);

$('#sample,.moveend').sortable({
    connectWith:'#sample,.moveend',
    cursor:'move',
   
    
})


var arr=[]
  var check=0;

$("#mix").click(function(){
    if(check==0){
        check=1;
  arr=[3,4,0,1,24,17,18,9,23,6,11,12,16,2,10,13,20,5,7,8,14,15,19,22,21];
        
    }else
     if(check==1){
  arr=[3,15,23,0,12,22,6,16,21,24,17,7,9,18,10,19,5,8,14,13,1,2,4,11,20];
        check++;
    }else
     if(check==2){
  arr=[24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
        check++;
    }else
    if(check==3){
   arr=[0,1,2,10,11,12,20,21,22,3,4,5,13,14,15,23,24,6,7,8,9,16,17,18,19];
        check++;
    }else
      if(check==4){
    arr=[4,5,6,7,21,22,23,20,0,1,2,3,8,9,10,11,24,16,17,18,19,12,13,14,15];
        check=0;
    }
    
 var z;
   var k=0;
 for(var i=0;i<5;i++){
    for(var j=0;j<5;j++){
         z=arr[k];
        $('.move').eq(k).css({
               
    backgroundImage:"url(images/1.jpg)",
        backgroundPosition:arr1[z] + 'px ' + arr2[z] + 'px'
    })
        
        k++;
}
 }
 
})
    


$('#rezult').click(function(){
    var kil=0;  
for(var a=0;a<25;a++){
    if($('.moveend').eq(a)==arr[a]){
        kil++
    }
}    
   if(kil==25)alert("you win") 
      
})





    
    
    
    
    
    
    
    
    
