/* eslint-disable no-undef */

const path = require("path");                                        
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {                                      
    entry: "./src/render/index.js",                            
    output: {                                           // bundled compiled 파일
        path: path.join(__dirname, "/dist"),            //__dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
        filename: "bundle.js"
    },
    // resolve: {
    //     extensions: ["js","jsx"]    // import할때 확장자를 안붙여줘도됨 
    // },
    module: {                                           // javascript 모듈을 생성할 규칙을 지정 (node_module을 제외한.js 파일을 babel-loader로 불러와 모듈을 생성
        rules: [
            {
                test: /\.(js|jsx)$/,                          // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
                exclude: /node_module/,                 // node module 폴더는 babel 컴파일에서 제외
                use:{
                    loader: "babel-loader"				// babel loader가 파이프를 통해 js 코드를 불러옴
                }
            },
            
            // CSS Module ([filename].module.css)
            {
                test: /\.module\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                ],
            },  
            // style-loader, css-loader 구성
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [ '.js', '.jsx'],  // import할때 확장자를 안붙여줘도됨 
    },
    // ...
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"              
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash:8].css',
            chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
        }),
    ]
};
