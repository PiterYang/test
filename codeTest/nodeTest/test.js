// const test = 1;
// const fs = require("fs");
// const readStream = fs.createReadStream("./test.jpeg");
// const writeStream = fs.createWriteStream("./test.html");
// readStream.pipe(writeStream);
// readStream
//     .on("data", chunck => {
//         console.log("读取数据", chunck.toString());
//     })
//     .on("error", err => {
//         console.log(err);
//     })
//     .on("end", () => {
//         console.log("end");
//     })
//     .on("close", () => {
//         console.log("close");
//     });
// fs.writeFile("nodeTest/test.html", "hello world", "utf8", err => {
//     console.log(err);
// });
// fs.writeFileSync("./test.html", "hello world 1111", "utf8");
// const writeStream = fs.createWriteStream("./test.html", "utf8");
// writeStream.on("close", () => {
//     console.log("关闭");
// });
// writeStream.write("hellow");
// writeStream.write("world 3333");
// writeStream.end("end");
// const dns = require("dns");
// dns.lookup("www.baidu.com", { all: true }, (err, address, family) => {
//     console.log("address", address);
//     console.log("family", family);
// });
// var http = require("http");
// var url = require("url");
// var querystring = require("querystring");

// var server = http.createServer(function(req, res) {
//     var body = "";
//     req.on("data", function(thunk) {
//         body += thunk;
//     });
//     req.on("end", function() {
//         console.log("post data is" + body);
//         res.end("ok");
//     });
// });
// server.listen(3600);

// var net = require("net");
// var port = 5000;
// var host = "127.0.0.1";

// var server = net.createServer(socket => {
//     console.log("服务端: 接收到来自客户端的请求");
//     socket.on("data", data => {
//         console.log("客户端数据为：" + data);
//         socket.write("你好，服务端");
//     });
//     socket.on("close", () => {
//         console.log("服务端，断开连接");
//     });
// });
// server.listen(port, host, () => {
//     console.log("服务端：开始监听来自客户端的请求");
//     console.log("server", server.address());
// });

// var client = net.createConnection(port, host);
// client.on("connect", () => {
//     console.log("客户端：已经建立与服务端的连接");
//     console.log("clinet", client.address());
// });

// client.on("data", data => {
//     console.log("客户端收到服务端数据：" + data);
// });

// client.on("close", () => {
//     console.log("客户端：断开连接");
// });

// client.end("你好，我是客户端");
// var port = 33333;
// var host = "127.0.0.1";

// var dgram = require("dgram");
// var server = dgram.createSocket("udp4");

// server.on("listening", function() {
//     var address = server.address();
//     console.log(address);
// });
// server.on("message", function(message, remote) {
//     console.log(remote.address + ":" + remote.port + "-" + message);
// });

// server.bind(port, host);

// var message = Buffer.from("My KungFu is Good");

// var client = dgram.createSocket("udp4");

// client.send(message, port, host, function(err, bytes) {
//     if (err) throw err;
//     console.log("UDP message sent to" + host + ":" + port);
// });

// var dgram = require("dgram");
// var server = dgram.createSocket("udp4");
// var port = 33333;
// server.on("message", function(message, rinfo) {
//     console.log("server got message from" + rinfo.address + ":" + rinfo.port);
// });
// server.bind(port);

// var port1 = 33333;

// var client = dgram.createSocket("udp4");
// var msg = Buffer.from("hello world");
// var host = "255.255.255.255";

// client.bind(function() {
//     client.setBroadcast(true);
//     client.send(msg, port1, host, function(err) {
//         if (err) throw err;
//         console.log("msg has been sent");
//         client.close();
//     });
// });
// console.log(Buffer.from("buffer"));

// var buf = Buffer.alloc(10, 1);
// var buf1 = Buffer.from([1, 2, 3]);
// console.log(buf1);
// const spawn = require("child_process").spawn;
// const ls = spawn("ls", ["-lh", "/usr"]);

// ls.stdout.on("data", data => {
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on("data", data => {
//     console.log(`stderr: ${data}`);
// });

// ls.on("close", code => {
//     console.log(`child process exited with code ${code}`);
// });

// var exec = require("child_process").exec;

// exec("ls hello.txt", function(err, stdout, stderr) {
//     if (err) throw err;
//     console.log("stdout", stdout);
//     console.log("stderr", typeof stderr);
// });

// var child_process = require("child_process");
// child_process.execFile("node", ["--version"], function(err, stdout, stderr) {
//     if (err) throw err;
//     console.log("stdout", stdout);
// });

// var execFile = require("child_process").execFile;

// execFile("ls -al .", function(err, stdout, stderr) {
//     if (err) throw err;
//     console.log("stdout", stdout);
// });
// process.stdin.on("data", data => {
//     console.log("process data", data.toString());
// });

// process.on("close", cede => {
//     console.log("code", cede);
// });

// var child_process = require("child_process");

// child_process.fork("./child.js");

// child_process.fork("./silentChild.js", {
//     silent: true
// });

// var child = child_process.fork("./anotherSilentChild.js", {
//     silent: true
// });

// child.stdout.setEncoding("utf8");

// child.stdout.on("data", function(data) {
//     console.log(data);
// });

// const { spawn } = require("child_process");
// const child = spawn("wc");

// process.stdin.pipe(child.stdin);
// console.log(1111);
// child.stdout.on("data", data => {
//     console.log(`child stdout: ${data}`);
// });
// child.on("error", err => {
//     console.log(err);
// });
// const { spawn } = require("child_process");
// const find = spawn("find", [".", "-type", "f"]);
// const wc = spawn("wc", ["-l"]);
// find.stdout.pipe(wc.stdin);
// wc.stdout.on("data", data => {
//     console.log(`Number of files ${data}`);
// });
// var child_process = require("child_process");

// 例子一：会打印出 output from the child
// 默认情况，silent 为 false，子进程的 stdout 等
// 从父进程继承
// child_process.execFile("./slientChild.js");
// var child_process = require("child_process");

// var child = child_process.fork("./child.js");

// child.on("message", msg => {
//     console.log("message from child:" + JSON.stringify(msg));
// });

// child.send({ from: "parent" });
// var child_process = require("child_process");

// console.log("parent.execArgv", process.execArgv);

// child_process.fork("./child.js", {
//     execArgv: ["--inspect"]
// });
// var spawn = require("child_process").spawn;
// var ls = spawn("ls", ["-al"]);

// ls.stdout.on("data", data => {
//     console.log("data from child:", data.toString());
// });

// ls.stderr.on("data", data => {
//     console.log("error form child:", data.toString());
// });

// ls.on("close", code => {
//     console.log("child exists with code:", code);
// });
// var spawn = require("child_process").spawn;

// var child = spawn("bad_command");

// child.on("error", err => {
//     console.log("Failed to start child process1");
//     console.log("err", err);
// });

// var child2 = spawn("ls", ["noneexistFile"]);

// child2.stderr.on("data", data => {
//     console.log("Error msg from precess2:" + data);
// });

// child2.on("error", err => {
//     console.log("failed to start child precess2");
// });
// var spawn = require("child_process").spawn;
// var grep = spawn("grep", ["nodejs"]);

// setTimeout(() => {
//     grep.stdin.write("hello noejs \n hello javescript");
//     grep.stdin.end();
// }, 2000);

// grep.stdout.on("data", data => {
//     console.log("data from grep: " + data);
// });

// grep.on("close", code => {
//     console.log("grep exists with code: " + code);
// });
// grep.on("error", err => {
//     console.log("err", err);
// });

// grep.stderr.on("data", err => {
//     console.log("errdata", err);
// });
// if (process.env.NODE_ENV == "production") {
//     console.log("生产环境");
// } else {
//     console.log("非生产环境");
// }
// console.log("precess.argv", process.argv);
// console.log(process.cwd());
// process.chdir("../");
// console.log(process.cwd());
// var child_process = require("child_process");

// child_process.fork("./child.js", {
//     stdio: "inherit"
// });
// process.stdin.setEncoding("utf8");

// process.stdin.on("readable", () => {
//     var chunk = process.stdin.read();
//     if (chunk !== null) {
//         process.stdout.write(`data: ${chunk}`);
//     }
// });

// process.stdin.on("end", () => {
//     process.stdout.write("end");
// });

// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });

// console.log("precess.geteuid", process.geteuid());
// console.log("proces.getgid()", process.getgid());

// console.log("process.getegid()", process.getegid());
// console.log("process.getgroups", process.getgroups());

// console.log("process.pid", process.pid);

// console.log("process.title", process.title);
// console.log("process.uptime(", process.uptime());
// console.log("process.memoryUsage", process.memoryUsage());

// console.log("process.cpuUsage", process.cpuUsage());
// console.log("node.release", process.release);
// process.emitWarning("something happened!");

// process.emitWarning("Something Happened!");

// process.on("warning", warn => {
//     console.log(warn.name);
//     console.log(warn.message);
//     console.log("stack", warn.stack);
// });

// var cluster = require("cluster");
// var cpuNums = require("os").cpus().length;
// var http = require("http");

// if (cluster.isMaster) {
//     for (var i = 0; i < cpuNums; i++) {
//         cluster.fork();
//     }
// } else {
//     http.createServer((req, res) => {
//         res.end(`response from worker ${process.pid}`);
//     }).listen(5000);
// }

// var EventEmiter = require("events");

// class Man extends EventEmiter {}

// var man = new Man();

// man.on("wakeup", function() {
//     console.log("event test");
// });

// man.emit("wakeup");

// var EventEmiter = require("events");

// class Man extends EventEmiter {}
// var man = new Man();
// man.on("wakeup", function(e) {
//     console.log("e", e);
// });
// man.on("wakeup", function(e) {
//     console.log("e2", e);
// });

// man.emit("wakeup", "test");

// var EventEmiter = require("events");

// class Man extends EventEmiter {}

// var man = new Man();

// man.on("wakeup", function() {
//     console.log(111);
// });

// man.once("wakeup", function() {
//     console.log(2222);
// });

// man.emit("wakeup");

// man.emit("wakeup");

// var EventEmiter = require("events");

// class Man extends EventEmiter {}

// var man = new Man();

// man.emit("wakeup");

// man.on("wakeup", function() {
//     console.log(111);
// });

// man.emit("wakeup");

// var EventEmiter = require("events");

// class Man extends EventEmiter {}

// var man = new Man();

// man.on("wakeup", function() {
//     console.log(222);
// });

// man.emit("wakeup");

// console.log(7777777);

// var EventEmiter = require("events");

// class Man extends EventEmiter {}

// var man = new Man();
// function wakeup() {
//     console.log(111);
// }
// man.on("wakeup", wakeup);

// man.emit("wakeup");

// man.removeListener("wakeup", wakeup);

// man.emit("wakeup");

// var path = require("path");

// var pathfile = "/test/test1/test.html";

// console.log("dir", path.dirname(pathfile));

// console.log("base", path.basename(pathfile));

// console.log("extname", path.extname(pathfile));

// var path = require("path");

// var pathfile = "test/test/demo/tes.js";

// console.log(path.basename(pathfile));

// var pathfile1 = "test/test/demo";

// console.log(path.basename(pathfile1));

// console.log(path.basename(pathfile, ".js"));

// var path = require("path");

// var pathfile = "/tst/test/demo/test.js";

// console.log(path.extname(pathfile));

// var path = require("path");

// console.log(path.join("/test/", "bar", "hah", "html//"));

// var path = require("path");

// var pathfile = path.resolve("..");

// console.log(pathfile);

// var path = require("path");

// console.log(path.resolve("/foo/bar", "../baz"));

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("please input a word", function(answer) {
//     console.log("you have entered [%s]", answer.toUpperCase());
// });

// const readline = require("readline");
// const fs = require("fs");

// const rl = readline.createInterface({
//     input: fs.createReadStream("./txt.txt")
// });

// rl.on("line", line => {
//     console.log(line);
// });

// const readline = require("readline");

// const fs = require("fs");

// function completer(line) {
//     const command = "npm";
//     const subCommands = ["help", "init", "install"];

//     if (line.length < command.length) {
//         return [command.indexOf(line) === 0 ? [command] : [], line];
//     }

//     let hits = subCommands.filter(subCommand => {
//         const lineTrippedCommand = line.replace(command, "").trim();
//         return (
//             lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0
//         );
//     });

//     if (hits.length === 1) {
//         hits = hits.map(hit => {
//             return [command, hit].join(" ");
//         });
//     }

//     return [hits.length ? hits : subCommands, line];
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     completer: completer
// });

// rl.prompt();

// const util = require("util");
// logger = util.debuglog("foo");

// logger("hello");

// const util = require("util");

// var obj = {};

// Object.defineProperty(obj, "nick", {
//     enumerable: false,
//     value: "chyingp"
// });

// console.log(util.inspect(obj, { showHidden: false }));

// const fs = require("fs");

// fs.readFile("./txt.txt", (err, content) => {
//     console.log("文件读取完成，文件内容是 %s", content);
// });

// var fs = require("fs");

// var readStream = fs.createReadStream("./txt.txt");

// var content = "";

// readStream.setEncoding("utf8");

// readStream.on("data", chunk => {
//     content += chunk;
// });

// readStream.on("end", () => {
//     console.log("文件内容是", content);
// });

// const fs = require("fs");

// fs.createReadStream("./txt.txt").pipe(process.stdout);

// var net = require("net");

// var opt = {
//     host: "127.0.0.1",
//     port: "4000"
// };

// var server = net.createServer(socket => {
//     socket.on("data", data => {
//         console.log("client send message", data.toString());
//     });

//     socket.write("hello client");
// });

// server.listen(opt.port, opt.host, () => {
//     console.log(server.address());
// });

// var client = net.connect(opt, () => {
//     client.write("msg from client");
// });

// client.on("data", data => {
//     console.log("client: get reply from server", data);
//     client.end();
// });

// var fs = require("fs");

// var zlib = require("zlib");

// var gzip = zlib.createGzip();

// var infile = fs.createReadStream("./txt.txt");

// var out = fs.createWriteStream("./file.txt.gz");

// infile.pipe(gzip).pipe(out);

// const StringDecoder = require("string_decoder").StringDecoder;

// const decoder = new StringDecoder("utf8");

// const str = decoder.write(Buffer.from([0xe4, 0xbd, 0xa0]));

// console.log(str);

// const StringDecoder = require("string_decoder").StringDecoder;

// const decoder = new StringDecoder("utf8");

// let str = decoder.write(Buffer.from([0xe4, 0xbd, 0xa0, 0xe5, 0xa5]));

// console.log(str);

// str = decoder.end(Buffer.from([0xbd]));

// console.log(str);

// const StringDecoder = require("string_decoder").StringDecoder;
// const decoder = new StringDecoder("utf8");

// // Buffer.from('你好') => <Buffer e4 bd a0 e5 a5 bd>
// let str = decoder.write(Buffer.from([0xe4, 0xbd, 0xa0, 0xe5, 0xa5]));
// console.log(str); // 你

// str = decoder.end(Buffer.from([0xbd]));
// console.log(str); // 好
// const StringDecoder = require("string_decoder").StringDecoder;

// let decoder = new StringDecoder("utf8");

// let str = decoder.end(Buffer.from([0xe5]));

// console.log(str);

// console.log(Buffer.from(str));

// var crypto = require("crypto");

// var md5 = crypto.createHash("md5");

// var result = md5.update("a").digest("hex");

// console.log(result);

// var crypto = require("crypto");

// function cryptoPwd(password) {
//     var md5 = crypto.createHash("md5");
//     return md5.update(password).digest("hex");
// }

// var password = "123456";

// var cryptoPassword = cryptoPwd(password);

// console.log(cryptoPassword);

// var crypto = require("crypto");

// function cryptPwd(password, salt) {
//     var saltPassword = password + ":" + salt;

//     var md5 = crypto.createHash("md5");

//     var result = md5.update(saltPassword).digest("hex");
//     console.log("resutl", result);
// }
// cryptPwd(123456, "abc");

// cryptPwd(123456, "efg");

// var crypto = require("crypto");

// function getRandomSalt() {
//     return Math.random()
//         .toString()
//         .slice(2, 5);
// }

// function cryptPwd(password, salt) {
//     var saltPassword = password + ":" + salt;
//     var md5 = crypto.createHash("md5");
//     var result = md5.update(saltPassword).digest("hex");
//     console.log("result", result);
// }

// cryptPwd(123456, getRandomSalt());
// cryptPwd(123456, getRandomSalt());

// var http = require("http");
// var arr = 1;

// var options = {
//     hostname: "127.0.0.1",
//     port: "5000",
//     path: "/test",
//     method: "POST",
//     headers: {
//         "Content-Type": "text/plain",
//         "Content-Encoding": "identity"
//     }
// };

// var client = http.request(options, res => {
//     res.pipe(process.stdout);
// });

// console.log("client.path", client.path);

// client.end("tao.yang1111");
// debugger;
// var parsePostBody = function(res, done) {
//     var arr = [];
//     var chunks;

//     res.on("data", chunk => {
//         arr.push(chunk);
//     });

//     res.on("end", () => {
//         chunks = Buffer.concat(arr);
//         done(chunks);
//     });
// };

// var server = http.createServer((req, res) => {
//     parsePostBody(req, chunks => {
//         var body = chunks.toString();
//         console.log("body", body);
//         res.end(`You nick is ${body}`);
//     });
// });

// server.listen(5000);

var nick = "chyingp";
var country = "China";

var str = nick + " live in " + country;

var logger = function(msg) {
    console.log(msg); // 这里
    console.log("这行会跳过"); // 跳过这行
};

logger(str); // 假设运行到这里，想要进入logger方法

console.log(str);
