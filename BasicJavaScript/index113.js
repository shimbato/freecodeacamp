function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum){
      return [startNum];
    } else {
      var number = rangeOfNumbers(startNum, endNum - 1);
       number.push(endNum);
       return number;
    }
  };
  console.log(rangeOfNumbers(1,5))