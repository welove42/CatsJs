let cat = {
  key: 0,
  level: 0,
  attr: {},
};
let obstacle = 1;
setInterval(() => {
  obstacle += Math.random() * 100;
  cat.key += Math.random() * 100;
  if (cat.key >= obstacle) {
    cat.level += 1;
    console.log("level up!");
  } else {
    console.log(cat);
  }
}, 3000);
