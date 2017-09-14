function Objects(){
};

var recipes = new Objects();

function updateObjectWithKeyAndValue(object, key, value){
  var newKey = key;
  return Object.assign(object, {[key]: value});
}
