let data = [10, 15, 46, 10, 3, 15, 2, 95, 100];
let temp;
function reverArrayRecurse(data,start, end) {
   
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reverArrayRecurse(data, data[start] + 1, data[end] - 1);

  }
  console.log(data);
}

reverArrayRecurse(data, 0, data.length - 1);
