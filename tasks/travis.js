module.exports = function(grunt) {
  grunt.registerTask("travis", ["lint", "build", "test"]);
};
