const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})



// const path = require('path')

// module.exports = {
//   outputDir: path.resolve(__dirname,'../backend/public'),
//   devServer: {
//     proxy: {
//       '/api':{
//         target:'http:localhost:5000/tutor'
//       }
//     }
//   }
// }