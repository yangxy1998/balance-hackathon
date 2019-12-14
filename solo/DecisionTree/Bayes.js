import { GaussianNB } from 'ml-naivebayes';
let model = new GaussianNB();
model.train(Xtrain, Ytrain);

var predictions = model.predict(Xtest);