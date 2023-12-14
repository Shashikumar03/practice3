const http = require("http");
const url = require("url");
const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Shashi</p>

  </body>
</html>`;
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const urlPath = parsedUrl.pathname;
  const id = parseInt(parsedUrl.query.id, 10);
  console.log(id);
  //   res.writeHead(200, { "Content-Type": "text/html" });

  //   res.end(htmlContent);
  //   server.close();

  switch (urlPath) {
    case "/":
      res.end("home");
      break;

    case "/about":
      res.end("about");
      break;

    // additional cases as needed
    case `/delay/${3}`:
      res.end("id chahiye");
      break;
    default:
      res.end("404 page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000");
});
