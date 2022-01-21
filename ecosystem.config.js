module.exports = {
    apps: [
      {
        script: 'backend/index.js',
        cwd: 'backend/',
        name: 'Backend',
        watch: true
      },
      // {
      //   script: 'frontend/index.js',
      //   cwd: 'frontend/',
      //   name: 'Frontend',
      //   watch: true
      // }
    ]
  }
  