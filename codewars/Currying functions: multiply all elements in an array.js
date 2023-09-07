function multiplyAll(arr) {
    return function(num) {
      return arr.map(v => v * num);
    };
  }