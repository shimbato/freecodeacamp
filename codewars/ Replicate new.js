function nouveau (Constructor, ...args) {
    const obj = Object.create(Constructor.prototype)
     const alt = Constructor.apply(obj, args)
     return alt && (typeof alt === 'object' || typeof alt === 'function') ? alt : obj// Don't forget, unnamed arguments after Constructor may be passed in!
   
 }