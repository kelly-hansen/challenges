const { resolve } = require('path');

require(resolve(__dirname, 'get_front.test'));

require(resolve(__dirname, 'add_to_back.test'));

require(resolve(__dirname, 'take_front.test'));

require(resolve(__dirname, 'is_empty.test'));

require(resolve(__dirname, 'postpone.test'));

require(resolve(__dirname, 'take_2nd.test'));

require(resolve(__dirname, 'take_smaller.test'));

require(resolve(__dirname, 'take_value_at_index.test'));

require(resolve(__dirname, 'take_next_smallest.test'));
