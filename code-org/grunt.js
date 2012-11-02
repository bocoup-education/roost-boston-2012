/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      files: ['grunt.js', 'www/**/*.js', 'test/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    uglify: {},
    requirejs: {
      compile: {
        options: {
          baseUrl: 'www/js/',
          modules : [ { name: 'main' } ],
          dir: 'build/'
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

};