// this is not working, as we ruined the pointer and now 'module.exports' = {}
// exports = function() {
//     console.log('done');
// }

// this code is ok
module.exports = function() {
        console.log(require.main.filename);
    }

// and this
// exports.fn = function() {
//     console.log('done');
// }