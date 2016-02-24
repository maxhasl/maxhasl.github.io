module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      js: {
         src: ['js/src/jquery.jcarousel-core.js','js/src/jquery.jcarousel-control.js','js/src/jquery.jcarousel-pagination.js','js/src/jquery.jcarousel-autoscroll.js','js/src/script.js'],
         dest:'js/dist/script.main.js'
      },
      css: {
         src: ['css/src/reset.css','css/src/*.css'],
         dest:'css/dist/style.main.css'
      }
    },
    uglify:{
      dist: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js',
      }
    },
    cssmin:{
      dist: {
        src: ['css/dist/style.main.css'],
        dest: 'css/dist/style.main.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify','cssmin']);

};