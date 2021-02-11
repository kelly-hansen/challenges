const { resolve } = require('path');

require(resolve(__dirname, 'count.test'));

require(resolve(__dirname, 'take_back.test'));

require(resolve(__dirname, 'take_smallest.test'));

require(resolve(__dirname, 'sanitize_digits.test'));

require(resolve(__dirname, 'snake_case.test'));

require(resolve(__dirname, 'collapse_whitespace.test'));

require(resolve(__dirname, 'unzip.test'));

require(resolve(__dirname, 'zip.test'));
