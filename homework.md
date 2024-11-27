- Create a repository
- Initialize the repository
- what is node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- Difference between caret and tilde (^ vs ~)

-- problem when using "/" route:

    How app.use Works ?
    app.use(path, callback) is a middleware function that matches all requests starting with the specified path.
    If you use app.use("/", callback), it matches every request because all routes start with /.

        What Happens When You Add the Third Route?
        When you uncomment:

            javascript code:
                app.use("/", (req, res) => {
                    res.send("Namaste from the dashboard");
                });

            > This middleware matches every route (/, /hello, /hello2, etc.) because all URLs in your app start with /.
            > Since res.send ends the response and doesn't call next(), no subsequent middleware or route handler is executed.
            > As a result, "/hello2" and "/hello" are never reached because the "/" route handles the request first.

        Why It Works Without the Third Route?
        When you only have these two:

        javascript code:
            app.use("/hello2", (req, res) => {
                res.send("Hello2 from the server");
            });

            app.use("/hello", (req, res) => {
                res.send("Hello from the server");
            });

        Each app.use only matches its specific path (/hello or /hello2), so they work as expected.

    If you must use app.use and want / to only handle requests for the root path without blocking other routes, call next() after handling /:

    javascript code:
        app.use("/", (req, res, next) => {
            if (req.path === "/") {
                res.send("Namaste from the dashboard");
            } else {
                next(); // Pass control to the next middleware
            }
        });

        app.use("/hello2", (req, res) => {
            res.send("Hello2 from the server");
        });

        app.use("/hello", (req, res) => {
            res.send("Hello from the server");
        });
