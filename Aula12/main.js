const {Pessoa} = require ("./Pessoa")
const {Aluno} = require ("./Aluno")
const {Professor} = require ("./Professor")

let pessoa = new Pessoa ("Thalles", "17")
let aluno = new Aluno ("Thalles", "17", "12", "TecnologiaTI" )
let professor = new Professor ("Joel", "30", "32", "TecnologiaTi", "12")

console.log(pessoa, aluno, professor)
