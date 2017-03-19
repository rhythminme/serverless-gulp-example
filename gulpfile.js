const gulp = require('gulp');
const serverlessGulp = require('serverless-gulp')
const util = require('gulp-util');

const paths = {
  serverless: ['./**/serverless.yml', '!node_modules/**/serverless.yml']
}

gulp.task('deploy', () => {
  gulp.src(paths.serverless)
      .pipe(serverlessGulp('deploy', { stage: 'dev' }))
})

gulp.task('remove', () => {
  gulp.src(paths.serverless)
    .pipe(serverlessGulp('remove', { stage: 'dev' }))
})

