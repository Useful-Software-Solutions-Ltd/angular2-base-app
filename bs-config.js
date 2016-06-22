//to add back in logging comment out the middleware override
module.exports = {
    logLevel: "silent",
    browser: "chrome",
    startPath: "app/index.html",
    server: {
        middleware: {
            0: null
        }
    }
};