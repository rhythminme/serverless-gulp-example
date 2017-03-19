const gulp = require('gulp');
const serverlessGulp = require('serverless-gulp');
const util = require('gulp-util');

const paths = {
  serverless: ['./**/serverless.yml', '!node_modules/**/serverless.yml']
};

gulp.task('deploy', () => {
  gulp.src(paths.serverless)
      .pipe(serverlessGulp.exec('deploy', { stage: 'dev' }));
});

gulp.task('remove', () => {
  gulp.src(paths.serverless)
    .pipe(serverlessGulp.exec('remove', { stage: 'dev' }));
});

gulp.task('setup', () => {
  gulp.src(paths.serverless)
      .pipe(serverlessGulp.install());
});

