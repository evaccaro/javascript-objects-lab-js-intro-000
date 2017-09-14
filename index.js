function Objects(){
};

var recipes = new Objects();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, {key: value});
}
