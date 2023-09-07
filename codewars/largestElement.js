function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
  }