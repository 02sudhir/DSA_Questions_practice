function mergeArray(){
    let data=[10,65,89,13,79,35,89];
    let data2=[80,75,99,6,76,49,56];
    let data3=[];
    for(let i=0;i < data.length;i++)
        {
            data3[i]=data[i];
        }
    for(let i=0;i < data2.length;i++)
       
        {
            data3[data.length + i]=data2[i];
        }
        console.log(data3);

}

mergeArray()