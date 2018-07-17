koa 用 mongoose 连接数据库

# 第一步
database文件夹，用来存放和数据库操作有关的文件。
/database/init.js   用来作数据库的连接和一些初始化的事情。

# 第二步
在index.js里加入立即执行函数，在使用前记得require进行引入connect

# 第三步 
定于Schema，相当于数据库的一个映射，Scheama是一种以文件形式存储的数据模型骨架

# 第四部
载入Schema和插入数据 在init.js里

引入glob 和resolve
    global: node的glob模块允许你使用*等符号，来写一个glob规则。
    resolve： 将一系列路经或端路经解析为绝对路经


先后端打通 使用api接口的形式可以互相同通讯和传递数据

koa-bodyparse 先我们要接到前端发过来的请求，这时候需要安装koa-bodyparser中间件