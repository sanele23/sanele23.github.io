// function - get response when sending request from home page

const awesomeFunction = ('/', (req, res, next) => {
    res.json('Thobeka Dvuba');
});

module.exports = {awesomeFunction};