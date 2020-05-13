import _ from 'lodash';

export function join(a, b) {
    // return a + ' ' + b;
    return _.join([a, b], ' ');  // 改用 lodash 拼接
}