// TO STRING

// Число к строке
let value = 0;
console.log(value);
console.log(typeof value);

// 1й способ
let toString = String(value);
console.log(`${value}, через конструктор STRING():`, toString);
console.log(
  `тип данных ${value}, через конструктор STRING():`,
  typeof toString
);

// 2й способ
toString = value + "";
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

value = 1;

toString = String(value);
console.log(`${value}, через String():`, toString);
console.log(`тип данных ${value}, через String():`, typeof toString);

toString = value + "";
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип ${value} через конкатенацию:`, typeof toString);

//значение бесконечности к СТРОКЕ
value = Infinity;

toString = String(value);
console.log(`${value}, через String():`, toString);
console.log(`тип данных ${value}, через String():`, typeof toString);

toString = value + "";
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип ${value} через конкатенацию:`, typeof toString);

//Не число к СТРОКЕ
value = NaN;

toString = String(value);
console.log(`${value}, через String():`, toString);
console.log(`тип данных ${value}, через String():`, typeof toString);

toString = value + "";
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип ${value} через конкатенацию:`, typeof toString);

//Булевое (логическое)true к СТРОКЕ
value = true;

toString = String(value);
console.log(`${value}, через String():`, toString);
console.log(`тип данных ${value}, через String():`, typeof toString);

toString = value + "";
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип ${value} через конкатенацию:`, typeof toString);

//Булевое (логическое) false к СТРОКЕ
value = false;

toString = String(value);
console.log(`${value}, через String():`, toString);
console.log(`тип данных ${value}, через String():`, typeof toString);

toString = value + "";
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип ${value} через конкатенацию:`, typeof toString);

//undefined к СТРОКЕ
value = undefined;

toString = String(value);
console.log(`${value}, через String():`, toString);
console.log(`тип данных ${value}, через String():`, typeof toString);

toString = value + "";
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип ${value} через конкатенацию:`, typeof toString);

// null к СТРОКЕ
value = null;

toString = String(value);
console.log(`${value}, через String():`, toString);
console.log(`тип данных ${value}, через String():`, typeof toString);

toString = value + "";
console.log(`${value} через конкатенацию:`, toString);
console.log(`тип ${value} через конкатенацию:`, typeof toString);
