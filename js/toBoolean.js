// TO BOOLEAN

//любое строчное значение к БУЛЮ
let value = "bnmb bnmb bnmb";

//1й способ
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
);

//2й способ
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);

//любое строчное число к БУЛЮ
value = "123";

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);

//пустая строка к БУЛЮ
value = "";

toBoolean = Boolean(value);
console.log(`пустая строка${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных пустой строки${value}, через конструктор Boolean():`,
  typeof toBoolean
);

toBoolean = !!value;
console.log(`пустая строка ${value}, через !!:`, toBoolean);
console.log(`тип данных пустой строки ${value}, через !!:`, typeof toBoolean);


//строка  с пробелом к БУЛЮ
value = " ";

toBoolean = Boolean(value);
console.log(
  `строка с пробелом ${value}, через конструктор Boolean():`,
  toBoolean
);
console.log(
  `тип данных строки с пробелом${value}, через конструктор Boolean():`,
  typeof toBoolean
);

toBoolean = !!value;
console.log(`строка с пробелом ${value}, через !!:`, toBoolean);
console.log(
  `тип данных строки с пробелом ${value}, через !!:`,
  typeof toBoolean
);


//число 0 к БУЛЮ
value = 0;

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);


//число к БУЛЮ
value = 1;

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);


//NaN к БУЛЮ
value = NaN;

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);


//Infinity к БУЛЮ
value = Infinity;

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);


//undefined к БУЛЮ
value = undefined;

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);

//null к БУЛЮ
value = null;

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
);

toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);
