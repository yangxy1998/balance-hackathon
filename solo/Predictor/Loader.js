const MLR=require("ml-regression-multivariate-linear");
module.exports = function (model) {
    let loader=this;
    this.model=model;
    this.mlr=MLR.load(model);
    this.predict=function (array) {
        return loader.mlr.predict(array);
    }
};