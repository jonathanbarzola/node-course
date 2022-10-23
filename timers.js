let i = 5;
setInterval(() => {
    if (i < 0) return
    console.log(i--);
}, 1000);

setTimeout(() => {
  console.log("Feliz Año Nuevo!");
}, 7000);
