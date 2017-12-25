const prefixer = require('autoprefixer')
const cssnano  = require('cssnano')
const del      = require('del')
const gulp     = require('gulp')
const plumber  = require('gulp-plumber')
const postcss  = require('gulp-postcss')
const sass     = require('gulp-sass')
const maps     = require('gulp-sourcemaps')
const notifier = require('node-notifier')
const rucksack = require('rucksack-css')
const shell = require('gulp-shell')


// error handler
// dumb comment

const onError = function(error) {
  notifier.notify({
    'title': 'Error',
    'message': 'Compilation failure.'
  })

  console.log(error)
  this.emit('end')
}

// clean

gulp.task('clean', () => {
  del('build')
})

// sass

const processors = [
  rucksack({ inputPseudo: false, quantityQueries: false }),
  prefixer({ browsers: 'last 2 versions' }),
  cssnano({ safe: true })
]


gulp.task('sass', () => {
  return gulp.src('src/sass/style.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(maps.init())
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('src/css'))
})

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']); 
})

gulp.task('develop', ['watch', 'run-server'])

gulp.task('upload', shell.task([
  'git push',
  'ssh jcristol@104.131.175.14 "cd ~/apps/jcristol.com && git pull && rm -rf build && npm run build && pm2 restart all"',
]))

gulp.task('run-server', shell.task([
  'npm start'
]))