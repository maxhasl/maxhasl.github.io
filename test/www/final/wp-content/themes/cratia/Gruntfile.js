module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		less:{
			production:{
				options:{
					paths:['/less']

				},
				files:{
					"css/bootstrap.css":["less/bootstrap.less"],
					// "css/forum.css":["less/forum.less"],
				}
			}
			
		},
		watch:{
				development:{
					files:['less/*.less'],
                    tasks:['less']
				}

			}
	});

	 grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['less','watch']);
}