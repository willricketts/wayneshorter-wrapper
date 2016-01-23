# WayneShorter API Wrapper [![Build Status](https://travis-ci.org/willricketts/wayneshorter-wrapper.svg?branch=master)](https://travis-ci.org/willricketts/wayneshorter-wrapper)

Simple library for using the [WayneShorter](http://shrtr.in) API to generate shortened URLs.

## Installation
```
npm install wayneshorter --save
```

## Usage
```
var wayneShorter = require('wayneShorter');
wayneShorter.shorten('http://google.com', function(err, result) {
  // PARSED RESULT OBJECT
});
```

## Example Output

```
{
  payload: "http://google.com",
  identifier: "4krJVcnux",
  shortlink: "http://shrtr.in/4krJVcnux"}  
}
```