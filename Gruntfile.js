module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
              'css/main.css': 'nem/main.sass'
                }
            }
        }
      });
    
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'nem/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'nem/wynik/'
            }]
        }
    }
    
    watch: {
    scripts: {
        files: ['nem/*.sass'],
        tasks: ['sass'],
            options: {
                spawn: false,
            },
        } 
    }
        
    sync: {
        dev: {
            bsFiles: {
                src : 'style.css'
            },
            options: {
                watchTask: true
            }
        }
    },
        
  // Load the plugins tasks 
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'watch', 'sync']);
};