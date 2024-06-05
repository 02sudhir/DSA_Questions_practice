function searchel(){
    let data=[10,30,50,80,45,65,99]
    let item=80;
    let index=undefined
    for(i=0;i<data.length-1;i++)
        {
            if(data[i]===item)
                {
                    index=i;
                    break;
                }
        }
        console.log();
}
searchel()