function Objects(){
};

var recipes = new Objects();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
    return delete Object.assign({}, object)[key];

}

function destructivelyUpdateObjectWithKeyAndValue(object, key){
  return delete object[key];
}
