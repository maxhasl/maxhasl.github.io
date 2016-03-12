module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
  grunt.initConfig({
    babel: {
        options: {
            sourceMap: false,
            presets: ['es2015']
        },
        dist: {
            files: [{
              expand: true,
              cwd: 'js/src',
              src: ['script.ES6.js'],
              dest: 'js/src',
              ext: '.js',
              extDot: 'first'  
            }]
        }
    },
    concat: {
      options: {
        separator: ''
      },
      js: {
         src: ['js/src/template.js','js/src/script.js'],
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
    }    
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['babel','concat', 'uglify','cssmin']);

};