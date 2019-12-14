const MLR=require("ml-regression-multivariate-linear");
const fs=require('fs');
module.exports = function () {
    let predictor=this;
    this.keys=[];
    this.setKey=(key)=>{predictor.keys.push(key)};
    this.values=[];
    this.setValue=(value)=>{predictor.values.push(value)};
    this.pushMap=(key,value)=>{
        predictor.setKey(key);
        predictor.setValue(value);
    };
    this.mlr=null;
    this.initMLR=function () {
        predictor.mlr=new MLR(predictor.keys,predictor.values);
    };
    this.predict=function (keys) {
        return predictor.mlr.predict(keys);
    };
    this.save=function () {
        fs.writeFileSync(`${__dirname}/../modules/predictor/predictor.json`,JSON.stringify(predictor.mlr.toJSON()));
    };
    this.getWeights=function () {
        return predictor.mlr.toJSON().weights;
    };
};
