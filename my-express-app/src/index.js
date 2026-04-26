// const express = require('express');

// const userRouter = require("./routes/user.router");
// const postRouter = require("./routes/post.router");
// const app = express();
// // const port = 3010

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })

// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

// app.use("/api/users", userRouter);
// app.use("/api/posts", postRouter);

// app.listen(process.env.SERVER_PORT || 3010, () => {
//   console.log("Server Running");
// });



// const path = require("path");

// require("dotenv").config({ path: path.join(__dirname, "../.env") });

// const express = require("express");
// const userRouter = require("./routes/user.router");
// const postRouter = require("./routes/post.router");

// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use("/api/users", userRouter);
// app.use("/api/posts", postRouter);

// app.listen(process.env.SERVER_PORT || 3010, () => {
//   console.log("Server Running");
// });







const express = require("express");
const app = express();
const port = 3000;
const postRouter = require ('./routes/post.router');

app.use(express.json());
app.get('/sapaan', (req,res) => {
  res.send ("hello, world")
}
)

app.use ("/api/posts", postRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



