module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles/scss',
        src: ['*.scss'],
        dest: 'styles/css/src',
        ext: '.css'
      }]
    }
  },
    concat: {
      options: {
        separator: ''
      },
      js: {
         src: ['js/src/jcarousel.js','js/src/script.js'],
         dest:'js/dist/script.main.js'
      },
      css: {
         src: ['styles/css/src/reset.css','styles/css/src/*.css'],
         dest:'styles/css/dist/style.main.css'
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
        src: ['styles/css/dist/style.main.css'],
        dest: 'styles/css/dist/style.main.min.css'
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['styles/scss/*.scss'],
        tasks: ['sass','concat','cssmin','uglify'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify','cssmin','sass']);

};