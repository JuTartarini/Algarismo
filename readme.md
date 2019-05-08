# Converdor números Inteiros para Romanos 

Está biblioteca se destina a converter algarismos arábicos para algarimos romano, e vice-versa

## Como instalar:

```zsh
$  npm install labcpf
```

## Como utilizar:
* Formato de entrada da função: string.
* Insira apenas os números do cpf, não insira pontos, traços, letras ou vírgulas.


Exemplo:

```node
const cpfValidator = require("labcpf");

console.log(cpfValidator("10695297619"));
// return true

console.log(cpfValidator("106.952.976-19"));
// return "false"
```
