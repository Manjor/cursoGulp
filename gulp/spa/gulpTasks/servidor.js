const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')


gulp.task('monitorarMudancas',()=>{
    //Caso ocorram mudanças em html só será chamado o app.html
    watch('src/**/*.html',()=> gulp.start('app.html'))
    //Caso ocorram mudanças nos css, só será chamado o app.css
    watch('src/**/*.scss',()=> gulp.start('app.css'))
    //Caso ocorram mudanças nos .js, será chamado o app.js
    watch('src/assets/imgs/**/*.*',()=> gulp.start('app.js'))
    //Caso ocorram mudanças nos arquivos de imagens, será chamado o app.imgs
    watch('src/**/*.js',()=> gulp.start('app.imgs'))
})

gulp.task('servidor',['monitorarMudancas'],()=>{
    return gulp.src('build').pipe(webserver({
        //Reload automático na página
        livereload: true,
        port: 8080,
        //Abre o Browser automaticamente
        open: true
    }))
})