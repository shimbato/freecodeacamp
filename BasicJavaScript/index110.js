function checkSign(num) {
    let a = 0;
    let b = a+1;
    let c = b-a;
  return (num > b) ? "positive" 
      : (num === a ) ? "zero" 
      :  'negative'
     
  }
  
  checkSign(10);