# Stock ticker

A simple service for get stock ticker prices.

# Installation

`npm install`

# Running

`npm start` will start the application at
[http://localhost:8080](http://localhost:8080) (set environment variable `PORT`
to change the port).

Service to add symbols:
```
URL: http://localhost:8080/stock/addSymbol
Request Body:
{
    "symbol":["AMZN","NFLX"]
}
```

Get Stock ticker prices for added symbols:
```
URL: http://localhost:8080/stock/ticker
```

# Testing

Tests can be run with `npm test`. A `watch` mode is configured for
interactive sessions, using `npm run test:watch`.


In-process API tests can be found in [app.spec.js](./src/app.spec.js). You do
not need to run the application separately to run any tests.

# Docker Image

Build docker image
```
docker build -t modusbox/stock-ticker . 
```
Run the image
```
docker run -p 8080:8080 -d sunil/stock-ticker 
```

# Debugging

To run with a debugger listening, run `npm run start:dev`.
You will see the following output:

```
$ nodemon --inspect=9230 bin/www
[nodemon] 1.12.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node --inspect=9230 bin/www`
Debugger listening on ws://127.0.0.1:9230/044e7ad8-e365-46b2-bd15-2182d25c9ebf
For help see https://nodejs.org/en/docs/inspector
Started application on port 8080
```

To attach a debugger, open up [chrome://inspect](chrome://inspect) in Chrome or
Chromium, click `Open dedicated DevTools for Node`, add `localhost:9230` to the
list of remote targets if it is not already there, and then select the remote
target that shows up.
