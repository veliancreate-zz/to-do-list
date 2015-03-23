module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'spec/*.js', 'public/js/*.js']
    },

    watch: {
      jshint: {
        files: ['spec/*.js','public/js/*.js'],
        tasks: 'jshint'
      },
    },

    jasmine: {
      files: 'spec/back.spec.js',
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        files: ['spec/*.spec.js'],
        background: true,
        singleRun: false
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['jshint']);

};