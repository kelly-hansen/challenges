const { resolve } = require('path');

require(resolve(__dirname, 'count.test'));

require(resolve(__dirname, 'take_bottom.test'));

require(resolve(__dirname, 'get_max.test'));

require(resolve(__dirname, 'take_value_at_index.test'));

require(resolve(__dirname, 'push_index_to_bottom.test'));

require(resolve(__dirname, 'push_max_to_bottom.test'));

require(resolve(__dirname, 'take_min.test'));

require(resolve(__dirname, 'reverse_top.test'));
