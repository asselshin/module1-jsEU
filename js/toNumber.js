// TO NUMBER

//любое строчное значение к Числу
let value = "bghjg ghjg ghjg";
console.log(value);
console.log(typeof value);

//1й способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber
);

//2й способ
toNumber = +value;
console.log(`${value}, через унарный + :`, toNumber);
console.log(`тип данных ${value}, через унарный + :`, typeof toNumber);

// строчное число к ЧИСЛУ
value = "123";

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber
);

toNumber = +value;
console.log(`${value}, через унарный + :`, toNumber);
console.log(`тип данных ${value}, через унарный + :`, typeof toNumber);

//пустая строка к Числу
value = "";

toNumber = Number(value);
console.log(`пустая строка${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных пустой строки ${value}, через конструктор Number():`,
  typeof toNumber
);

toNumber = +value;
console.log(`пустая строка ${value}, через унарный + :`, toNumber);
console.log(
  `тип данных пустой строки ${value}, через унарный + :`,
  typeof toNumber
);

//строка с пробелом к Числу
value = " ";

toNumber = Number(value);
console.log(`строка с пробелом${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных строки с пробелом ${value}, через конструктор Number():`,
  typeof toNumber
);

toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный + :`, toNumber);
console.log(
  `тип данных строки с пробелом ${value}, через унарный + :`,
  typeof toNumber
);

//Булевое (логическое)true к Числу
value = true;

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber
);

toNumber = +value;
console.log(`${value} через унарный + :`, toNumber);
console.log(`тип ${value} через унарный + :`, typeof toNumber);

//Булевое (логическое) false к ЧИСЛУ
value = false;

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber
);

toNumber = +value;
console.log(`${value} через унарный + :`, toNumber);
console.log(`тип ${value} через унарный + :`, typeof toNumber);

//undefined к ЧИСЛУ
value = undefined;

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber
);

toNumber = +value;
console.log(`${value} через унарный + :`, toNumber);
console.log(`тип ${value} через унарный + :`, typeof toNumber);

// null к Числу
value = null;

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber
);

toNumber = +value;
console.log(`${value} через унарный + :`, toNumber);
console.log(`тип ${value} через унарный + :`, typeof toNumber);
