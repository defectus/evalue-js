module.exports = function (grunt) {

   grunt.initConfig({
      pkg   : grunt.file.readJSON('package.json'),
      bower : {
         install: {
            options: {
               copy: false,
               targetDir: './bower_components',
               layout: 'byComponent',
               install: true,
               verbose: false,
               prune: false,
               cleanTargetDir: false,
               cleanBowerDir: false,
               bowerOptions: {}
            }
         }
      },
      jshint: {
         jshint: {
            src    : ['Gruntfile.js', '*.js', 'static/js/**/*.js', 'test/**/*.js'],
            options: {
               reporter: require('jshint-stylish'),
               globals : {}
            }
         }
      },
      run   : {
         options: {},
         app    : {
            cmd : 'node',
            args: [
               'index.js'
            ]
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-run');
   grunt.loadNpmTasks('grunt-bower-task');

   grunt.registerTask('default', ['bower:install', 'jshint', 'run:app']);
};
