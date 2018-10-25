const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default',()=>{
    //irá pegar todos os arquivos .js da pasta e subpastas
    return gulp.src('src/**/*.js')
    .pipe(babel({
        //minified:true elimina a necessidade do uglify
        //minified: true,
        //comments; false elimina os comentários do código
        comments: false,
        presets: ["env"]
    }))
    .pipe(uglify())
    .on('error',function(err){console.log(err)})
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))

    //pipe(uglify serve para minimizar todo o codigo para o arquivo gulp.dest)
    //pipe(concat determina o nome do arquivo onde será distribuído o código)
})