var recipes = {
  cereal: ["milk", "cherrios"], 
  soup: ["chicken", "chicken broth"], 
  frenchToast: ["bread", "butter", "eggs"]
};

function updateObjectWithKeyAndValue(obj, key, value) {
 return Object.assign({}, obj, { [key]: value });
}