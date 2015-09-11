'use strict';

module.exports = function babel(grunt) {

    grunt.loadNpmTasks('grunt-babel');

    return {
        options: {
            sourceMap: false
        },
        all: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['**/*.js'],
                dest: '.dist'              
            }]
        }
    };
};
