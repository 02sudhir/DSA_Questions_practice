
function removeEL(){
let data=[30,20,45,76,20]
let position=3;
position=parseInt(position)

for(i=position;i<=data.length-1;i++)
    {
        data[i]=data[i+1]
       
    }
    data.length=data.length-1;
    console.log(data);
    

}

removeEL()