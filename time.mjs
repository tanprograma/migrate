// const time1 = new Date("1/7/2023").valueOf();
// const time2 = new Date("1/8/2023").valueOf();
// const time3 = new Date("1/9/2023").valueOf();
// const time4 = new Date("1/10/2023").valueOf();
// const times = [time1, time2, time3, time4];
// times.forEach((item) => {
//   if (item <= time2) {
//     console.log(`item: ${item}`);
//   }
// });
// console.log(typeof time1);
async function getMedicines() {
  const medicinesRaw = await fetch(
    "https://tanprograma.github.io/tandbs/medicines.json"
  );
  const medicines = await medicinesRaw.json();
  console.log(medicines);
}

getMedicines();
