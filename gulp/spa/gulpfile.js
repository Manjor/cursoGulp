const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default',()=>{
    if(util.env.production){
        //Sequence define a ordem de tasks a serem execeutadas
        //Isto porque, evita que o servidor inicie antes dos arquivos
        //css,js,html estiverem prontos
        sequence('deps','app')
        //gulp.start('deps','app')
    }else{
        sequence('deps','app','servidor')
        //gulp.start('deps','app','servidor')
    }
})
