module.exports = grunt => {
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['env'],
                plugins: ['transform-async-to-generator', 'transform-runtime']
            },
            app: {
                files: [
                    {
                        expand: true,
                        cwd: 'app',
                        src: ['**/*.js'],
                        dest: 'dist'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('release', ['babel:app']);
    grunt.registerTask('default', ['release'])
};

