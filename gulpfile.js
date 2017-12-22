const prefixer = require('autoprefixer')
const sync     = require('browser-sync')
const cssnano  = require('cssnano')
const del      = require('del')
const fs       = require('fs')
const gulp     = require('gulp')
const changed  = require('gulp-changed')
const include  = require('gulp-file-include')
const htmlmin  = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const plumber  = require('gulp-plumber')
const postcss  = require('gulp-postcss')
const sass     = require('gulp-sass')
const maps     = require('gulp-sourcemaps')
const notifier = require('node-notifier')
const rollup   = require('rollup')
const babel    = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve  = require('rollup-plugin-node-resolve')
const uglify   = require('rollup-plugin-uglify')
const rucksack = require('rucksack-css')

// error handler

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