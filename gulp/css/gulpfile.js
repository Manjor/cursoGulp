const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


gulp.task('default',['copiarHtml'],()=>{

    //Somente o arquivo index.scss, pois nele contem o import de todos
    //os outros .scss
    gulp.src('src/sass/index.scss')
    .pipe(sass().on('error',sass.logError))
    //Reduz os comentários, uglyComments:true
    .pipe(uglifycss({"uglyComments":true}))
    //Seta o nome do arquivo a receber as alterações
    .pipe(concat('estilo.min.css'))
    //Define o destino do arquivo
    .pipe(gulp.dest('build/css'))

})

//Task que irá copiar o arquivo html para a pasta build
gulp.task('copiarHtml',()=>{
    gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
})