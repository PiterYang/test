// process.on("message", msg => {
//     console.log("message from parent:" + JSON.stringify(msg));
// });
// process.send({ from: "child" });
// console.log("child execArgv", process.execArgv);
console.log("precess.connected", process.connected);
process.disconnect();
console.log("process.connected", process.connected);
