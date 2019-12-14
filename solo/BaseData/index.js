const Generator = require('./Generator');

module.exports = function(trainTime,testTime){
        let generator=new Generator();
        generator.createDataSet(trainTime,testTime);
};