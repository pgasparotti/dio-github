/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/



interface Funcionario { 
    codigo: number;
    nome: string;
}

const funcionarioEntrada: Funcionario = {
    codigo: 10,
    nome: 'João'
}