// 404 Error Handler
const fourOFourHanlder = (req, res, next) => {
    const err = new Error('Oops, page not found');
    err.status = 404;
    next(err);
};

// Global error Handler
const globalHandler = (err, req, res, next) => {
    console.log(err);
    res.status(err.status);
    res.render('error', { err });
};

module.exports = { fourOFourHanlder, globalHandler };