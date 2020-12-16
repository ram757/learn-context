/*--Allow all of the CORS -- Don't do this in real life...plz--*/
module.exports.corsInterceptor = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  ); //Add other headers used in your requests

  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

/*--Send generic response when entity is not found--*/
module.exports.notFoundInterceptor = function (req, res, next) {
  res.status(404);
  res.json({
    url: req.protocol + '://' + req.get('host') + req.originalUrl,
    message:
      "ERROR (NOT FOUND): '" + req.originalUrl + "' route does not exist.",
  });
};

/*--Last resort for catching unaccounted runtime errors - hopefully this is never seen--*/
module.exports.errorCatchInterceptor = function (err, req, res, next) {
  console.error('ERROR (Internal Server Error): \n' + err.stack);
  res.status(500);
  res.send({
    message:
      'ERROR (Internal Server Error): There was an issue processing the request.  Ensure that the request is well formatted and try again.',
  });
};
