const fs = require("fs"); // 文件模块
const path = require("path"); // 系统路径模块

const express = require("express"); // node.js Web 应用框架
const bodyParser = require("body-parser"); // node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据

const app = express();
app.use(bodyParser.json()); // 返回一个只解析 json 的中间件，最后保存的数据都存放在 request.body 对象上
app.use(
  bodyParser.urlencoded({
    extended: true
  })
); // 返回的对象为任意类型

// 设置跨域访问
app.all("*", function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*"); // 设置跨域的域名，* 代表允许任意域名跨域
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  response.header(
    "Access-Control-Allow-Methods",
    "PUT,POST,GET,DELETE,OPTIONS"
  );
  response.header("X-Powered-By", " 3.2.1");
  response.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// get 首页数据
app.get("/api/index.json", (request, response) => {
  request.statusCode = 200;
  const file = path.join(__dirname, "./api/index.json");
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      response.send("文件读取失败！");
    } else {
      response.send(data);
    }
  });
});

// get 城市列表数据
app.get("/api/city.json", (request, response) => {
  request.statusCode = 200;
  const file = path.join(__dirname, "./api/city.json");
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      response.send("文件读取失败！");
    } else {
      response.send(data);
    }
  });
});

// get 详情页数据
app.get("/api/detail.json", (request, response) => {
  request.statusCode = 200;
  const file = path.join(__dirname, "./api/detail.json");
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      response.send("文件读取失败！");
    } else {
      response.send(data);
    }
  });
});

// 配置服务端口

const hostname = "localhost";
const port = 8082;
const server = app.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`);
});

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = app.listen(port,hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}`);
// });
