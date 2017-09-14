function Objects(){
};

var recipes = new Objects();

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = object;
  newObj[key] = value;
  return newObj;
}
