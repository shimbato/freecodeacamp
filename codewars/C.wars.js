function initials(n) {
    const arr = (
      n
        .split(" ")
        .map(v => v[0].toUpperCase())
        .slice(0, -1) +
      "." +
      n
        .split(" ")
        .slice(-1)
        .map(v => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    ).replace(/,/g, ".");
    return arr;
  }