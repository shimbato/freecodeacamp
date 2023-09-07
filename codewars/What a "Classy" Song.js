class Song{
    title = ''
    artist = ''
    names = []
    constructor(title, artist){
      this.title = title
      this.artist = artist
    }
    howMany(names){
      names = [...new Set(names.map(v=>v.toLowerCase()))]
      let count = 0
      names.map(v=>this.names.includes(v)?count+=0:count+=1)
      this.names = [...new Set([...this.names, ...names])]
      return count
    }
  }