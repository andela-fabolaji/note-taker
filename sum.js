module.exports = function(x, y) {
    if(typeof(x) === 'string' || typeof(y) === 'string') return 'Strings are not valid input';
    return x + y;
}