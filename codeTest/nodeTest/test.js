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

// var nick = "chyingp";
// var country = "China";

// var str = nick + " live in " + country;

// var logger = function(msg) {
//     console.log(msg); // 这里
//     console.log("这行会跳过"); // 跳过这行
// };

// logger(str); // 假设运行到这里，想要进入logger方法

// console.log(str);
// let net = require("net");

// // 创建一个net服务器
// const server = net.createServer();

// // 连接回调函数
// server.on("connection", conn => {
//     console.log("connection");
// });

// // 监听8080端口
// server.listen(8080);

// // 监听回调函数
// server.on("listening", () => {
//     console.log("listening");
// });
// const crypto = require("crypto");

// const md5 = crypto.createHash("md5");

// const message = "hello";

// const hash = md5.update(message, "utf8").digest("hex");

// console.log("hash", hash);

// const crypto = require("crypto");

// let hmac = crypto.createHmac("md5", "12345");

// let ret = hmac.update("hello").digest("hex");

// console.log("ret", ret);

// const crypto = require('crypto');

// const encrypt = (data, key) => {
//     return crypto.publicEncrypt(key, Buffer.from(data))
// }

// const decrypt = (encrypt, key) => {
//     return crypto.privateDecrypt(key, encrypt)
// }

// let publicKey = `-----BEGIN RSA PRIVATE KEY-----
// MIICXQIBAAKBgQDFWnl8fChyKI/Tgo1ILB+IlGr8ZECKnnO8XRDwttBbf5EmG0qV
// 8gs0aGkh649rb75I+tMu2JSNuVj61CncL/7Ct2kAZ6CZZo1vYgtzhlFnxd4V7Ra+
// aIwLZaXT/h3eE+/cFsL4VAJI5wXh4Mq4Vtu7uEjeogAOgXACaIqiFyrk3wIDAQAB
// AoGBAKdrunYlqfY2fNUVAqAAdnvaVOxqa+psw4g/d3iNzjJhBRTLwDl2TZUXImEZ
// QeEFueqVhoROTa/xVg/r3tshiD/QC71EfmPVBjBQJJIvJUbjtZJ/O+L2WxqzSvqe
// wzYaTm6Te3kZeG/cULNMIL+xU7XsUmslbGPAurYmHA1jNKFpAkEA48aUogSv8VFn
// R2QuYmilz20LkCzffK2aq2+9iSz1ZjCvo+iuFt71Y3+etWomzcZCuJ5sn0w7lcSx
// nqyzCFDspQJBAN3O2VdQF3gua0Q5VHmK9AvsoXLmCfRa1RiKuFOtrtC609RfX4DC
// FxDxH09UVu/8Hmdau8t6OFExcBriIYJQwDMCQQCZLjFDDHfuiFo2js8K62mnJ6SB
// H0xlIrND2+/RUuTuBov4ZUC+rM7GTUtEodDazhyM4C4Yq0HfJNp25Zm5XALpAkBG
// atLpO04YI3R+dkzxQUH1PyyKU6m5X9TjM7cNKcikD4wMkjK5p+S2xjYQc1AeZEYq
// vc187dJPRIi4oC3PN1+tAkBuW51/5vBj+zmd73mVcTt28OmSKOX6kU29F0lvEh8I
// oHiLOo285vG5ZtmXiY58tAiPVQXa7eU8hPQHTHWa9qp6
// -----END RSA PRIVATE KEY-----
// `

// let priveKey =

// let fs = require("fs");

// let zlib = require("zlib");

// let gzip = zlib.createGzip();

// let inFile = fs.createReadStream("./txt.txt");

// let out = fs.createWriteStream("./fileCompress.txt.gz");

// inFile.pipe(gzip).pipe(out);

// let fs = require("fs");

// let zlib = require("zlib");

// let gunzip = zlib.createGunzip();

// var inFile = fs.createReadStream("./fileCompress.txt.gz");

// var out = fs.createWriteStream("./file1.txt");

// inFile.pipe(gunzip).pipe(out);

// let http = require("http");

// let zlib = require("zlib");

// let fs = require("fs");

// let filepath = "./test.html";

// let server = http.createServer(function(req, res) {
//     let acceptEncoding = req.headers["accept-encoding"];
//     let gzip;
//     if (acceptEncoding.indexOf("gzip") !== -1) {
//         gzip = zlib.createGzip();
//         res.writeHead(200, {
//             "Content-Encoding": "gzip"
//         });
//         fs.createReadStream(filepath)
//             .pipe(gzip)
//             .pipe(res);
//     } else {
//         fs.createReadStream(filepath).pipe(res);
//     }
// });

// server.listen(3000);

// var http = require("http");
// var zlib = require("zlib");
// var fs = require("fs");
// var filepath = "./test.html";

// var server = http.createServer(function(req, res) {
//     var acceptEncoding = req.headers["accept-encoding"];
//     var gzip;

//     if (acceptEncoding.indexOf("gzip") != -1) {
//         // 判断是否需要gzip压缩

//         gzip = zlib.createGzip();

//         // 记得响应 Content-Encoding，告诉浏览器：文件被 gzip 压缩过
//         res.writeHead(200, {
//             "Content-Encoding": "gzip"
//         });
//         fs.createReadStream(filepath)
//             .pipe(gzip)
//             .pipe(res);
//     } else {
//         fs.createReadStream(filepath).pipe(res);
//     }
// });

// server.listen("3000");

// let http = require("http");

// let zlib = require("zlib");

// let responseText = "hello world";

// let server = http.createServer((req, res) => {
//     let acceptEncoding = req.headers["accept-encoding"];
//     if (acceptEncoding.indexOf("gzip") !== -1) {
//         res.writeHead(200, { "accept-encoding": "gzip" });
//         res.end(zlib.gzipSync(responseText));
//     } else {
//         res.end(responseText);
//     }
// });

// server.listen("3000");

// let fs = require("fs");

// let data;

// try {
//     data = fs.readFileSync("./txt.txt", "utf-8");
//     console.log("文件内容", data);
// } catch (err) {
//     console.log("读取文件出错", err.message);
// }

// let fs = require("fs");

// fs.readFile("./txt.txt", "utf-8", function(err, data) {
//     if (err) {
//         return console.error("读取文件出错", err.message);
//     }
//     console.log("文件内容", data);
// });

// console.log(12121212121);

// let fs = require("fs");

// let readStream = fs.createReadStream("./txt.txt", "utf8");

// readStream
//     .on("data", function(chunk) {
//         console.log("读取数据", chunk);
//     })
//     .on("error", function(err) {
//         console.error("出错", err.message);
//     })
//     .on("end", function() {
//         console.log("没有数据了");
//     })
//     .on("close", function() {
//         console.log("已经关闭");
//     });

// let fs = require("fs");

// fs.writeFile("./test.txt", "hello world", "utf8", function(err) {
//     if (err) throw err;
//     console.log("写入成功");
// });
// console.log(2121212);

// let fs = require("fs");
// try {
//     fs.writeFileSync("./test1.txt", "hello world", "utf8");
//     console.log("写入成功");
// } catch (err) {
//     throw err;
// }
// console.log(23232);

//文件流写入

// let fs = require("fs");

// const writeStream = fs
//     .createWriteStream("./text2.txt", "utf8")
//     .on("close", function() {
//         console.log("已经关闭");
//     });

// writeStream.write("hello");
// writeStream.write("world");
// writeStream.end();

// let fs = require("fs");

// fs.access("./sdfsf.js", function(err) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("sdfsf.js  存在");
//     }
// });

// fs.access("./test.html", err => {
//     if (err) throw err;
//     console.log("file test.html  存在");
// });

// let fs = require("fs");

// fs.mkdir("./html", function(err) {
//     if (err) throw err;
//     console.log("创建成功");
// });

// let fs = require("fs");

// fs.mkdirSync("./html");
// console.log(111);

// let fs = require("fs");

// fs.mkdir("./html", function(err) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("创建成功");
//     }
// });
// console.log(121312);

// let fs = require("fs");

// fs.unlink("./html", function(err) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("删除成功");
//     }
// });

// let fs = require("fs");

// let path = require("path");

// const deleteDir = url => {
//     let files = [];
//     if (fs.existsSync(url)) {
//         files = fs.readdirSync(url);
//         files.forEach((file, index) => {
//             let curPath = path.join(url, file);
//             if (fs.statSync(curPath).isDirectory()) {
//                 deleteDir(curPath);
//             } else {
//                 fs.unlinkSync(curPath);
//             }
//         });
//         fs.rmdirSync(url);
//     } else {
//         console.log("给定的路径不存在啊");
//     }
// };

// deleteDir("./html");

// let fs = require("fs");

// fs.mkdir("./html", err => {
//     if (err) throw err;
//     console.log("创建成功");
// });

// console.log(111);

// let fs = require("fs");

// fs.rmdir("./html", err => {
//     if (err) throw err;
//     console.log("删除成功");
// });

// let fs = require("fs");

// let path = require("path");

// let getFilesInDir = function(dir) {
//     let results = [path.resolve(dir)];
//     let files = fs.readdirSync(dir, "utf8");

//     files.forEach(file => {
//         file = path.resolve(dir, file);

//         let stats = fs.statSync(file);

//         if (stats.isFile()) {
//             results.push(file);
//         } else {
//             results = results.concat(getFilesInDir(file));
//         }
//     });
//     return results;
// };

// let fs = require("fs");

// let data;

// try {
//     data = fs.readFileSync("./test.txt");
//     console.log("文件内容", data.toString());
// } catch (err) {
//     console.log(err);
// }

// var fs = require("fs");

// fs.readFile("./test.txt", "utf8", function(err, data) {
//     if (err) {
//         return console.error("读取文件出错" + err.message);
//     }
//     console.log("文件内容" + data);
// });

// var fs = require("fs");

// var readStream = fs.createReadStream("./test.txt", "utf8");

// readStream
//     .on("data", function(chunk) {
//         console.log("读取数据" + chunk);
//     })
//     .on("error", function(err) {
//         console.log("err", err.message);
//     })
//     .on("end", function() {
//         console.log("end,没数据了");
//     })
//     .on("close", function() {
//         console.log("已经关闭");
//     });

// let fs = require("fs");

// // 同步写入

// try {
//     fs.writeFileSync("./text.txt", "hello", "utf8");
// } catch (err) {
//     console.log("err.me", err.message);
// }

// let fs = require("fs");

// fs.writeFile("./text.txt", "world", "utf8", function(err) {
//     if (err) {
//         console.log(err.message);
//     }
// });

// let fs = require("fs");

// let writeStream = fs.createWriteStream("./text.txt", "utf8");

// writeStream.on("close", function() {
//     console.log("关闭了");
// });

// writeStream.write("hello");

// writeStream.write("world");

// writeStream.end("");

// let fs = require("fs");

// // fs.access("./tx1.txt", function(err) {
// //     if (err) throw err;
// //     console.log("file  tx1.txt 存在");
// // });

// fs.access("./txt.txt", function(err) {
//     if (err) throw err;
//     console.log("file txt.txt 存在");
// });

// 创建 目录

// let fs = require("fs");

// fs.mkdir("./test", function(err) {
//     if (err) throw err;
//     console.log("创建成功");
// });

// fs.mkdirSync("./hello")

// let fs = require("fs");

// fs.unlink("./txt.txt", function(err) {
//     if (err) throw err;
//     console.log("删除成功");
// });

// fs.rmdir("./hello", function(err) {
//     if (err) throw err;
//     console.log("删除成功");
// });

// const deleteAll = path => {
//     let files = [];

//     if (fs.existsSync(path)) {
//         files = fs.readdirSync(path);
//         files.forEach((file, index) => {
//             const curPath = path + "/" + file;
//             if (fs.statSync(curPath).isDirectory()) {
//                 deleteAll(curPath);
//             } else {
//                 fs.unlinkSync(curPath);
//             }
//         });
//         fs.rmdirSync(path);
//     }
// };

// var fs = require("fs");

// stats = fs.statSync("./hello");

// console.log(stats);

// let fs = require("fs");

// fs.access("./text.txt", fs.constants.R_OK, function(err) {
//     console.log(err);
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log("可以访问");
//     }
// });

// let dns = require("dns");

// dns.lookup("www.baidu.com", { all: true }, function(err, address, family) {
//     if (err) throw err;
//     console.log("address", address);
//     console.log("family", family);
// });

// let net = require("net");

// net.createServer(socket => {
//     socket.on("data", data => {
//         console.log("data.", data);
//         console.log("address", socket.address);
//     });
// });

// let http = require("http");

// let server = http.createServer((req, res) => {
//     console.log(req.header);
//     res.end("ok");
// });

// server.listen(3000);

// http.get("http://127.0.0.1:3000", function(res) {
//     console.log(res);
// });

// let http = require("http");

// let server = http.createServer((req, res) => {
//     console.log("header", JSON.stringify(req.headers));
//     console.log("url", req.url);
//     console.log("method", req.method);
//     res.end("ok");
// });
// server.listen(4001);

// let http = require("http");
// let url = require("url");
// let querystring = require("querystring");

// let server = http.createServer((req, res) => {
//     let urlObj = url.parse(req.url);
//     let query = urlObj.query;
//     let queryObj = querystring.parse(query);
//     console.log("queryOjb", JSON.stringify(queryObj));
//     res.setHeader("Content-type", "text/html;charset=utf8");
//     res.end("请求成功了");
// });
// server.listen(4001);

// 扁平化数组

// let arr = [[1, 2, 3], [4, 5, [6, 7, [8]], 9], 10];
// let result = [];
// const flat = arr => {
//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             flat(element);
//         } else {
//             result.push(element);
//         }
//     });
// };
// flat(arr);
// console.log("result", result);

// 使用 reduce

// let arr = [[1, 2, 3], [4, 5, [6, 7, [8]], 9], 10];

// let flat = arr => {
//     return arr.reduce((accu, curr) => {
//         return accu.concat(Array.isArray(curr) ? flat(curr) : curr);
//     }, []);
// };

// console.log(flat(arr));

// 数组去重

// let arr = [1, 2, 1, 23, 1, 4, 3, 3, 2, 1, 3, 5, 4, 3, 2];

// Set 数据结构方法

// let arr1 = [...new Set(arr)];
// console.log("arr1", arr1);

// indexOf includes

// let arr1 = [];

// arr.forEach(item => {
//     if (arr1.indexOf(item) === -1) {
//         arr1.push(item);
//     }
// });

// console.log("arr1", arr1);

// 防抖

// const debounce = (fn, time) => {
//     let timer;
//     return function() {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.call(this);
//         }, time);
//     };
// };

// // 节流

// const throttle = (fn, time) => {
//     let flag = true
//     return function () {
//         if (!flag) return
//         flag = false
//         setTimeout(() => {
//             fn.call(this, arguments)
//             flag = true
//         })
//     }
// }

// 函数柯里化  add(1,2,3)(4)(5) = 15

// const add = function() {
//     const args = [...arguments];
//     const num = args.reduce((accu, cur) => accu + cur);
//     console.log("num", num);
//     return function() {
//         return add(num, ...arguments);
//     };
// };
// console.log("add", add(1, 2, 3)(4, 5, 6)(7, 8, 9));

// 模拟 new 操作

// function myNew(cFn) {
//     const obj = Object.create(cFn.prototype);
//     const ret = cFn.call(obj, ...arguments);
//     return typeof ret === "object" ? ret : obj;
// }

// 模拟 instanceof

// function Persion() {
//     this.name = "person";
// }
// Persion.prototype = { test: 1 };

// function Man() {
//     this.name = "man";
// }

// Man.prototype = new Persion();

// function Women() {
//     this.name = "women";
// }

// Women.prototype = new Persion();
// const man = new Man();
// const women = new Women();
// function myInstanceof(item, constro) {
//     let flag = false;
//     let prot = item.__proto__;

//     console.log(
//         "constro.prototype",
//         constro.prototype === item.__proto__.__proto__
//     );
//     while (prot) {
//         console.log(prot);
//         if (prot === constro.prototype) {
//             console.log(22323);
//             flag = true;
//             return flag;
//         }
//         prot = prot.__proto__;
//     }
//     return flag;
// }

// var obj = {};

// console.log(myInstanceof(man, Persion));
// console.log("test", man instanceof Persion);

// 原型继承

// function createObj(constr) {
//     const fn = function() {};
//     fn.prototype = constr.prototype;

//     fn.prototype.constroctor = fn;
//     return fn;
// }

// 寄生组合继承

// function Parent() {

// }
// Parent.prototype = { test: 1 }

// function Child() {
//     Parent.call(this)
// }

// Child.prototype = Object.create(Parent.prototype)

// Child.prototype.constroctor = Child

// 模拟 Object.is()

// function myIs(value1, value2) {
//     if (value1 === value2) {
//         if (value1 === 0 && value2 === 0 && (1 / value1) * (1 / value2) < 0) {
//             return false;
//         } else {
//             return true;
//         }
//     } else {
//         if (isNaN(value1) && isNaN(value2)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// 模拟 object.assign()

// function myAssing(target, ...args) {
//     if (typeof target !== "object") {
//         return target;
//     }
//     // console.log("args", args);
//     return args.reduce((accu, cur) => {
//         let keys = Object.keys(cur);
//         keys.forEach(v => (accu[v] = cur[v]));
//         return accu;
//     }, target);
// }

// console.log(
//     myAssing(
//         {},
//         { test1: 1, hh33: 5 },
//         { test: 2 },
//         { hahh: "tset", test1: "copy" }
//     )
// );

// 深拷贝

// const deepCopy = (obj, cache = new WeakMap()) => {
//     if (typeof obj !== "object" || obj === null) {
//         return obj;
//     }
//     if (cache.has(obj)) {
//         return cache.get(obj);
//     }

//     let copy = Array.isArray(obj) ? [] : {};

//     cache.set(obj, copy);
//     for (let i in obj) {
//         if (typeof obj[i] === "object" || obj[i] === null) {
//             copy[i] = deepCopy(obj[i], cache);
//         } else {
//             copy[i] = obj[i];
//         }
//     }
// };

// promise 模拟

// const promise = new Promise((resolve, reject) => {
//     console.log(111);
//     resolve("hhh");
// });

// promise.then(res => {});

// const MyPromise = function(successBack, failBack) {
//     this.state = "pendding";
//     this.value = "";
//     this.error = "";
//     this.onSuccessList = [];
//     this.onFailList = [];
//     this.resolve = function(res) {
//         this.state = "success";
//         this.value = res;
//     };
//     this.reject = function(err) {
//         this.state = "failed";
//         this.error = err;
//     };
//     successBack(this.resolve, this.reject);
// };
// MyPromise.prototype = {
//     then(successBack, failBack) {
//         if (this.state === "pendding") {
//             this.onSuccessList.push(successBack);
//         } else if (this.state === "failed") {
//             this.onFailList.push(failBack);
//         } else {
//         }
//         return new MyPromise((resove, reject) => {});
//     }
// };

// const PENDING = "PENDING"; // 进行中
// const FULFILLED = "FULFILLED"; // 已成功
// const REJECTED = "REJECTED"; // 已失败

// class Promise {
//     constructor(exector) {
//         // 初始化状态
//         this.status = PENDING;
//         // 将成功、失败结果放在this上，便于then、catch访问
//         this.value = undefined;
//         this.reason = undefined;
//         // 成功态回调函数队列
//         this.onFulfilledCallbacks = [];
//         // 失败态回调函数队列
//         this.onRejectedCallbacks = [];

//         const resolve = value => {
//             // 只有进行中状态才能更改状态
//             if (this.status === PENDING) {
//                 this.status = FULFILLED;
//                 this.value = value;
//                 // 成功态函数依次执行
//                 // console.log("this.onFulFilledCall", this.onFulfilledCallbacks);
//                 this.onFulfilledCallbacks.forEach(fn => {
//                     console.log("fn", fn.toString());
//                     console.log("thsi.value", this.value);
//                     console.log("this", this);
//                     fn(this.value);
//                 });
//             }
//         };
//         const reject = reason => {
//             // 只有进行中状态才能更改状态
//             if (this.status === PENDING) {
//                 this.status = REJECTED;
//                 this.reason = reason;
//                 // 失败态函数依次执行
//                 this.onRejectedCallbacks.forEach(fn => fn(this.reason));
//             }
//         };
//         try {
//             // 立即执行executor
//             // 把内部的resolve和reject传入executor，用户可调用resolve和reject
//             exector(resolve, reject);
//         } catch (e) {
//             // executor执行出错，将错误内容reject抛出去
//             reject(e);
//         }
//     }
//     then(onFulfilled, onRejected) {
//         onFulfilled =
//             typeof onFulfilled === "function" ? onFulfilled : value => value;
//         onRejected =
//             typeof onRejected === "function"
//                 ? onRejected
//                 : reason => {
//                       throw new Error(
//                           reason instanceof Error ? reason.message : reason
//                       );
//                   };
//         // 保存this
//         const self = this;
//         return new Promise((resolve, reject) => {
//             if (self.status === PENDING) {
//                 self.onFulfilledCallbacks.push(() => {
//                     // try捕获错误
//                     try {
//                         // 模拟微任务
//                         setTimeout(() => {
//                             const result = onFulfilled(self.value);
//                             // 分两种情况：
//                             // 1. 回调函数返回值是Promise，执行then操作
//                             // 2. 如果不是Promise，调用新Promise的resolve函数
//                             result instanceof Promise
//                                 ? result.then(resolve, reject)
//                                 : resolve(result);
//                         });
//                     } catch (e) {
//                         reject(e);
//                     }
//                 });
//                 self.onRejectedCallbacks.push(() => {
//                     // 以下同理
//                     try {
//                         setTimeout(() => {
//                             const result = onRejected(self.reason);
//                             // 不同点：此时是reject
//                             result instanceof Promise
//                                 ? result.then(resolve, reject)
//                                 : reject(result);
//                         });
//                     } catch (e) {
//                         reject(e);
//                     }
//                 });
//             } else if (self.status === FULFILLED) {
//                 try {
//                     setTimeout(() => {
//                         const result = onFulfilled(self.value);
//                         result instanceof Promise
//                             ? result.then(resolve, reject)
//                             : resolve(result);
//                     });
//                 } catch (e) {
//                     reject(e);
//                 }
//             } else if (self.status === REJECTED) {
//                 try {
//                     setTimeout(() => {
//                         const result = onRejected(self.reason);
//                         result instanceof Promise
//                             ? result.then(resolve, reject)
//                             : reject(result);
//                     });
//                 } catch (e) {
//                     reject(e);
//                 }
//             }
//         });
//     }
//     catch(onRejected) {
//         return this.then(null, onRejected);
//     }
//     static resolve(value) {
//         if (value instanceof Promise) {
//             // 如果是Promise实例，直接返回
//             return value;
//         } else {
//             // 如果不是Promise实例，返回一个新的Promise对象，状态为FULFILLED
//             return new Promise((resolve, reject) => resolve(value));
//         }
//     }
//     static reject(reason) {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     }
// }

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// });

// p.then(() => {
//     return 2;
// })
//     .then(() => {
//         return 3;
//     })
//     .then(() => {
//         return 4;
//     })
//     .then(() => {
//         return 5;
//     })
//     .then(() => {
//         return 6;
//     });

// const STATUS = {
//     PENDING: "PENDING",
//     FULFILLED: "FULFILLED",
//     REJECTED: "REJECTED"
// };
// class Deferred {
//     constructor(callback) {
//         this.value = undefined;
//         this.status = STATUS.PENDING;

//         this.rejectQueue = [];
//         this.resolveQueue = [];

//         let called; // 用于判断状态是否被修改
//         const resolve = value => {
//             if (called) return;
//             called = true;
//             // 异步调用
//             setTimeout(() => {
//                 this.value = value;
//                 // 修改状态
//                 this.status = STATUS.FULFILLED;
//                 // 调用回调
//                 console.log("this.resolveQueue", this.resolveQueue);
//                 for (const fn of this.resolveQueue) {
//                     fn(this.value);
//                 }
//             });
//         };
//         const reject = reason => {
//             if (called) return;
//             called = true;
//             // 异步调用
//             setTimeout(() => {
//                 this.value = reason;
//                 // 修改状态
//                 this.status = STATUS.REJECTED;
//                 // 调用回调
//                 for (const fn of this.rejectQueue) {
//                     fn(this.value);
//                 }
//             });
//         };
//         try {
//             callback(resolve, reject);
//         } catch (error) {
//             // 出现异常直接进行 reject
//             reject(error);
//         }
//     }

//     then(onResolve, onReject) {
//         if (this.status === STATUS.PENDING) {
//             // 将回调放入队列中
//             const rejectQueue = this.rejectQueue;
//             const resolveQueue = this.resolveQueue;
//             return new Deferred((resolve, reject) => {
//                 // 暂存到成功回调等待调用
//                 resolveQueue.push(function(innerValue) {
//                     try {
//                         const value = onResolve(innerValue);
//                         // 改变当前 promise 的状态
//                         resolve(value);
//                     } catch (error) {
//                         reject(error);
//                     }
//                 });
//                 // 暂存到失败回调等待调用
//                 rejectQueue.push(function(innerValue) {
//                     try {
//                         const value = onReject(innerValue);
//                         // 改变当前 promise 的状态
//                         resolve(value);
//                     } catch (error) {
//                         reject(error);
//                     }
//                 });
//             });
//         } else {
//             const innerValue = this.value;
//             const isFulfilled = this.status === STATUS.FULFILLED;
//             return new Deferred((resolve, reject) => {
//                 try {
//                     const value = isFulfilled
//                         ? onResolve(innerValue) // 成功状态调用 onResolve
//                         : onReject(innerValue); // 失败状态调用 onReject
//                     resolve(value); // 返回结果给后面的 then
//                 } catch (error) {
//                     reject(error);
//                 }
//             });
//         }
//     }
// }

// new Deferred(resolve => {
//     setTimeout(() => {
//         resolve(1);
//     }, 3000);
// })
//     .then(val1 => {
//         console.log("val1", val1);
//         return val1 * 2;
//     })
//     .then(val2 => {
//         console.log("val2", val2);
//         return val2;
//     });

// promise 模拟

// const STATUS = {
//     PENDDING: "PENDDING",
//     FULFILLED: "FULFILLED",
//     REJECTED: "REJECTED"
// };

// class Deferred {
//     constructor(executor) {
//         this.value = "";
//         this.status = STATUS.PENDDING;
//         this.reason = "";
//         this.resolveQueue = [];
//         this.rejectQueue = [];
//         const resolve = res => {
//             setTimeout(() => {
//                 if (this.status === STATUS.PENDDING) {
//                     this.resolveQueue.forEach(fn => fn(res));
//                     this.status = STATUS.FULFILLED;
//                     this.value = res;
//                 }
//             });
//         };

//         const reject = reason => {
//             setTimeout(() => {
//                 if (this.status === STATUS.PENDDING) {
//                     this.rejectQueue.forEach(fn => fn(reason));
//                     this.status = STATUS.REJECTED;
//                     this.reason = reason;
//                 }
//             });
//         };

//         try {
//             executor(resolve, reject);
//         } catch (e) {
//             reject(e);
//         }
//     }

//     then(onFulfilled, onReject) {
//         onFulfilled =
//             typeof onFulfilled === "function"
//                 ? onFulfilled
//                 : onFulfilled => onFulfilled;
//         onReject =
//             typeof onReject === "function"
//                 ? onReject
//                 : onReject => {
//                       throw new Error(onReject);
//                   };

//         if (this.status === STATUS.PENDDING) {
//             return (newDeferred = new Deferred((resolve, reject) => {
//                 this.resolveQueue.push(value => {
//                     try {
//                         let x = onFulfilled(value);
//                         resolvePromise(newDeferred, x, resolve, reject);
//                     } catch (e) {
//                         reject(e);
//                     }
//                 });
//                 this.rejectQueue.push(v => {
//                     try {
//                         let x = onReject(v);
//                         resolvePromise(newDeferred, x, resolve, reject);
//                     } catch (e) {
//                         reject(e);
//                     }
//                 });
//             }));
//         } else if (this.status === STATUS.FULFILLED) {
//             return (newDeferred = new Deferred((resolve, reject) => {
//                 setTimeout(() => {
//                     try {
//                         let x = onFulfilled(this.value);
//                         resolvePromise(newDeferred, x, resolve, reject);
//                     } catch (e) {
//                         reject(e);
//                     }
//                 });
//             }));
//         } else {
//             return (newDeferred = new Deferred((resolve, reject) => {
//                 setTimeout(() => {
//                     try {
//                         let x = onReject(this.reason);
//                         resolvePromise(newDeferred, x, resolve, reject);
//                     } catch (e) {
//                         reject(e);
//                     }
//                 });
//             }));
//         }
//     }

//     resolve(p) {
//         if (p instanceof Deferred) {
//             return p;
//         }
//         return new Deferred((resolve, reject) => {
//             resolve(p);
//         });
//     }

//     reject(p) {
//         return new Deferred((resolve, reject) => {
//             reject(p);
//         });
//     }

//     all(promiseArr) {
//         let count = promiseArr.length;
//         let i = 0;
//         let result = [];
//         return new Deferred((resolve, reject) => {
//             promiseArr.forEach(v => {
//                 Deferred.resolve(v).then(
//                     res => {
//                         i + 1;
//                         result.push(v);
//                         if (i === count) {
//                             resolve(reuslt);
//                         }
//                     },
//                     err => {
//                         reject(err);
//                     }
//                 );
//             });
//         });
//     }

//     race(promiseArr) {
//         return new Deferred((resolve, reject) => {
//             promiseArr.forEach(v => {
//                 Deferred.resolve(v).then(
//                     res => {
//                         resolve(res);
//                     },
//                     err => {
//                         reject(result);
//                     }
//                 );
//             });
//         });
//     }

//     finally(cb) {
//         return this.then(
//             val => Deferred.resolve(cb()).then(() => val),
//             err => Deferred.reject(cb()).then(() => err)
//         );
//     }
// }

// function resolvePromise(promise1, x, resolve, reject) {
//     if (promise1 === x) {
//         throw new Error({ msg: "不能相同" });
//     }

//     if (x instanceof Deferred) {
//         try {
//             if (x.status === STATUS.PENDDING) {
//                 x.then(
//                     y => {
//                         resolvePromise(promise1, y, resolve, reject);
//                     },
//                     err => reject(err)
//                 );
//             } else {
//                 x.then(resolve, reject);
//             }
//         } catch (e) {
//             reject(e);
//         }
//     } else if (typeof x === "function" || typeof x === "object") {
//         try {
//             let then = x.then;
//             if (typeof then === "function") {
//                 then.call(x, val => resolve(val), err => reject(err));
//             } else {
//                 resolve(x);
//             }
//         } catch (e) {
//             reject(e);
//         }
//     } else {
//         resolve(x);
//     }
// }

// 回溯算法

// 全排列
// function replaceAt(str, index, replacement) {
//     return (
//         str.substr(0, index) +
//         replacement +
//         str.substr(index + replacement.length)
//     );
// }
// let letterCasePermutation = function(S, start, result) {
//     let index = S.length;
//     result = result || [];

//     for (let i = start || 0; i < index; i++) {
//         if (isNaN(S[i])) {
//             let sbustr = replaceAt(S, i, S[i].toLowerCase());
//             letterCasePermutation(sbustr, i + 1, result);
//             !result.includes(sbustr) && result.push(sbustr);

//             let substr2 = replaceAt(S, i, S[i].toUpperCase());
//             letterCasePermutation(substr2, i + 1, result);
//             !result.includes(substr2) && result.push(substr2);
//         } else {
//             letterCasePermutation(S[i], i + 1, result);
//             !result.includes(S) && result.push(S);
//         }
//     }
//     return result;
// };
// console.log(letterCasePermutation("Jw"));

// 子集

// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。

// var subsets = function(nums) {
//     let subArr = (arr, result) => {
//         result = result || [];
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 result.push(arr[i]);
//             } else {
//                 result.push([arr[i]]);
//             }

//             let arr1 = arr.slice(i + 1);
//             // console.log("arr112", arr1);
//             let arr2 = arr1.map(v => {
//                 a = Array.isArray(arr[i]) ? arr[i] : [arr[i]];
//                 b = Array.isArray(v) ? v : [v];
//                 let arr3 = [];
//                 arr3.push(...a, ...b);
//                 return arr3;
//             });
//             subArr(arr2, result);
//         }

//         return result;
//     };
//     let arr = subArr(nums);
//     arr.push([]);
//     return arr;
// };
// console.log("result", subsets([1, 2, 3, 4]));

// 回溯算法

// const subset = function(num) {
//     let res = [];
//     const fn = function(index, list) {
//         // console.log("前面index", index);

//         if (index === num.length) {
//             // console.log("符合的List", list);
//             // console.log("");

//             return res.push(list.slice());
//         }

//         list.push(num[index]);
//         // console.log("前面List", list);

//         fn(index + 1, list);

//         list.pop();
//         // console.log("后面List", list);
//         // console.log("后面index", index);
//         fn(index + 1, list);
//     };

//     fn(0, []);

//     return res;
// };
// console.log("subset", subset([1, 2, 3, 4]));
// 哈希算法

// 求一个字符串的最长不含重复元素的子字符串

const hash = str => {
    let window = [str[0], str[0]];
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!map.get(str[i])) {
            map.set(str[i], i);
            window[1] = str[i];
        } else {
        }
    }
};
