# Some notes for set Angular 2 with webpack 2 project

As base was tacken create ToDo On Angular 2 lesson on youtube, then was reoved not needed files, so will have "clean" angular 2 app repo.

### Start to modfy:

1. existed _tsconfig.json_ remooved
2. by command ```bash tsc --init ``` was generated
3. added ```"exclude": ["node_modules"]``` section
4. Start checking on [webpack & Typescript](https://webpack.js.org/guides/webpack-and-typescript/) docs
    * installed loader ```bash npm install ts-loader --save-dev ```
    * created _webpack.config.js_ (based on [webpack & Typescript](https://webpack.js.org/guides/webpack-and-typescript/))
    * do some changes in _webpack.config.js_ by project structure
    * _errors...._ let's check loader _awesome-typescript-loader_ (see [Differences between ts-loader](https://github.com/s-panferov/awesome-typescript-loader#differences-between-ts-loader))
    * __error__ fix for Decorator error fixed by adding to the _tsconfig.json_ option ```"experimentalDecorators": true,```
    * __error__ fix for ```Cannot find name 'Set'; ... 'Promise'; ... 'Map'``` error fixed by adding to the _tsconfig.json_ option ```"lib": ["es2015","dom"]```
 
