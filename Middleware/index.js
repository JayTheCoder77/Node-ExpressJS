import express from 'express';
import { Router } from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { EventEmitter } from 'events';
import morgan from 'morgan';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 5001;
const router = Router();
const logger = morgan("combined");
const upload = multer({ dest: "./public/uploads" });
const emitter = new EventEmitter();
emitter.setMaxListeners(20);  // Increase the max listeners to 20

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));

// App-level middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next();
};

app.use(loggerMiddleware);

// third party middleware
app.use(logger);
// Router-level middleware
app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
    const authStatus = true;
    if (authStatus) {
        console.log(`user auth status : ${authStatus}`);
        next();
    } else {
        next(new Error("user unauthorized"));
    }
};

const getUsers = (req, res) => {
    res.json({ message: "get all users" });
};

const createUser = (req, res) => {
    console.log("req body from client", req.body);
    res.json({ message: "create new user" });
};

router.use(fakeAuth);
router.route("/").get(getUsers).post(createUser);

// 404 handler
// app.all("*", (req, res, next) => {
//     res.status(404);
//     next(new Error("Route Not Found"));
// });

// Error handler middleware should be last
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    switch (statusCode) {
        case 401:
            res.json({ title: "unauthorized", message: err.message });
            break;
        case 404:
            res.json({ title: "not found", message: err.message });
            break;
        case 500:
            res.json({ title: "server error", message: err.message });
            break;
        default:
            break;
    }
};
app.post("/upload" , upload.single("image") , (req,res) => {
    console.log(req.file , req.body);
    res.send(req.file)
}) , (err , req , res , next) => {
    res.status(400).send({error : err.message})
}

// Error handler middleware should be last
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});