#react快速开始

    1. npm init 
    2. 安装依赖
    sudo npm install react react-dom babelify babel-preset-react babel-preset-es2015 --save
    3. 安装webpack
     sudo npm install webpack -g
     sudo npm install webpack-dev-server -g
     sudo npm install webpack --save
     
 #webpack

运行 webpack 报错 

    ERROR in Entry module not found: Error: Can't resolve 'babel-loader' in '/Users/huangmengying/Desktop/react/src'
    
    sudo npm install babel-loader --save
    
    
webpack @1.0.0 热更新

    webpack-dev-server --contentbase src --inline --hot
    
webpack全局安装
    
    npm install webpack -g
    npm install webpack-dev-server -g
    
webpack当前项目安装

    npm install webpack --save
    npm install webpack-dev-server --save
    
初始化配置文件
```
   var webpack = require('webpack');
   var path = require('path');
   export.modules = {
    context: __dirname + "/src",
    entry: "./js/index.js",
    module: {
        loaders: [{
            test: /.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react','es2015']
            }
        }]
    },
    output: {
        path: __dirname + "/src/",
        filename: 'bundle.js'
    }
  }
    
```
  
webpack 打包

    webpack-dev-server --content-base src --inline --hot  后访问localhost：8080 

webpack配置文件文档

    http://webpack.github.io/docs/configuration.html
    
react调试插件 

    react Developer Tools

#开发工具  ATOM（github）

    atom-trenjs
    atom-beautify
    open-in-browser
    emmet
    file-icons
    highlight-line
    highlight-selected
    
#学习地址    
    
    es6学习站点
        
    http://babeljs.io  
    兼容性     
    http://kangax.github.io/compat-table/es5/

##react组件
1.return函数返回的必须是一个HTML节点
2.暴露组件
```
class BodyIndex extends React.Component {   }
export default BodyIndex;

```

3.入口定义

```
ReactDom.render(
    <Index/>,
    document.getElementById("app")
)
 
```   

4.组件也可以通过参数的形式传递
5.{/注释/}

##state
1.state相对于模块属于自身属性.
2.初始化 this.state={'username': 'marry'}
3.初始化可以放在构造函数constructor里面
4.state的作用于只属于当前的类，不污染其他模块

##props
1.props相对于模块属于外来属性
2.用this.props.username 接受


###refs是访问组件内部DOM节点唯一可靠的方法
   不要在render或render之前对组件进行调用
   不要滥用refs 
