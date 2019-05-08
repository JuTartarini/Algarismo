const romanNumerals = {
  // Unidade
  0: [
    '' // 0
    , 'I' // 1
    , 'II' // 2
    , 'III' // 3
    , 'IV' // 4
    , 'V' // 5
    , 'VI' // 6
    , 'VII' // 7
    , 'VIII' // 8
    , 'IX' // 9				
  ]
  // Dezena
  ,
  1: [
    '' // 10
    , 'X' // 10
    , 'XX' // 20
    , 'XXX' // 30
    , 'XL' // 40
    , 'L' // 50
    , 'LX' // 60
    , 'LXX' // 70
    , 'LXXX' // 80
    , 'XC' // 90
  ],
  2: [
    '' // C
    , 'C' // 100
    , 'CC' // 200
    , 'CCC' // 300				
    , 'CD' // 400
    , 'D' // 500
    , 'DC' // 600
    , 'DCC' // 700
    , 'DCCC' // 800
    , 'CM' // 900
  ],
  3: [
    '' // M
    , 'M' // 1000
    , 'MM' // 2000
    , 'MMM' // 3000 
  ]
};
// Obs número maximo é 3999
const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romans = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V',
  'IV',
  'I'
];

function romanValidNumbers(value) {
  return (value === 'I' || value === 'V' || value === 'X' || value === 'L' || value === 'C' || value === 'D' || value === 'M');
}


function compareLength(value1, value2) {
  return (value1.length === value2.length ? true : false);
}

function transformRomanToInt(input) {
  let result = 0;
  integers.map((x, idx) => {
    while (input.indexOf(romans[idx]) === 0) {
      result += integers[idx];
      input = input.replace(romans[idx], '');
    }
  });   
  return parseInt(result) ;
}

function romanToInt(input) {
  return (input.length > 0 && compareLength(input.split(''), input.split('').filter(romanValidNumbers))) ? parseInt(transformRomanToInt(input)) : false;
}

function intToRoman(input) {
  input = input.toString().replace(/[^0-9]/, '');
  let number = (parseInt(input) > 3999 && parseInt(input) > 0 ? false :
    input.split('').reverse().map((x, idx) => romanNumerals[idx][x]).reverse().join(''));
  return number;
}

module.exports = romanToInt;
module.exports = intToRoman;