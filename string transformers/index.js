const input = document.getElementById('input-text');

input.addEventListener('input', () => {
  const text = input.value;

  document.getElementById('lower').innerText  = toLower(text);
  
  document.getElementById('upper').innerText  = toUpper(text);

  document.getElementById('pascal').innerText  = toPascal(text);
  
  document.getElementById('snake').innerText  = toSnake(text);
  
  document.getElementById('kebab').innerText  = toKebab(text);
  
  document.getElementById('camel').innerText  = toCamel(text);
  
  document.getElementById('trim').innerText  = toTrim(text);

});
function getWords(str) {
    return str
    .trim()
    .toLowerCase()
    .split(" ")
    .filter(word => word !== "");

}

function toLower(str) {
    return str.toLowerCase();
}

function toUpper(str) {
    return str.toUpperCase();
}

function toCamel(str) {
const words = getWords(str)

    return words
    .map((word, index) => 
        index === 0
        ? word
        : word.charAt(0).toUpperCase() +  word.slice(1)
        )
        .join('')
}

function toPascal(str) {
    return getWords(str)
    .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('')
}

function toSnake(str) {
    return getWords(str).join("_")
}

function toKebab(str) {
    return getWords(str).join("-")
}

function toTrim(str) {
    return getWords(str).join('')
}