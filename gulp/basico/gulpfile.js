const gulp = require('gulp')

//Task são definidas com funções.

//task default é necessária para executar
gulp.task('default',() => {
    gulp.start('copiar','fim')
})

//nome da task: copiar
//Só será executada após executar as dependencias
//Dependencias: antes1 , antes2
gulp.task('copiar',['antes1','antes2'],() =>{
    console.log('Copiar...')
    //src urá buscar os arquivos necessários para a execução da task
    //pipe é utilizado para definir os filtros de arquivos de entrada, para startar servidor web e etc.
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    //.pipe(transformacao1())
    //.pipe(transformacao2())
    .pipe(gulp.dest('pastaB'))
    //dest define o destino da operacao

    //ao final desta instrução, será copiado os arquivos da pastaA
    //para a bastaB,esta que será criada caso não exista
})
//Task antes1
gulp.task('antes1',()=>{
    console.log('Antes1')
})

//Task antes2
gulp.task('antes2',()=>{
    console.log('Antes1')
})
//Task fim
gulp.task('fim', ['fim1','fim2'],()=>{
    console.log('Fim')
})
gulp.task('fim1',()=>{
    console.log('Fim1')
})
gulp.task('fim2',()=>{
    console.log('Fim2')
})