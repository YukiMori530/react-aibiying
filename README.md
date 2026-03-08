# **React - 爱彼迎订房网**

## 项目介绍

**项目核心学习、掌握的知识点：**

- 技术栈：React18, React Router, ReduxToolKit(RTK), axios, AntDesign, Material

  UI, styled-components, Jenkins, Nginx

- 对于第一个React项目，我的核心是对前面所学知识进行练习、实战；

- 掌握React开发的流程、模式、项目架构，项目中会有很多组件、工具等封装、抽取、复用思想；

- 最重要的是学习React开发的模式和编程的思想


## **项目规范**



**项目规范：项目中有一些开发规范和代码风格**

1. 文件夹、文件名称统一小写、多个单词以连接符（-）连接；

2. JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；

3. CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）;

4. 整个项目不再使用class组件，统一使用函数式组件，并且全面拥抱Hooks；

5. 组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；

7. 函数组件内部基本按照如下顺序编写代码：

- 组件内部state管理；

- redux的hooks代码；

- 其他hooks相关代码（比如自定义hooks）；

- 其他逻辑代码；
- 返回JSX代码；

8. redux代码规范如下：

- 每个模块有自己独立的reducer或者slice，之后合并在一起；
- redux中会存在共享的状态、从服务器获取到的数据状态；

9. 网络请求采用axios

- 对axios进行二次封装；

- 所有的模块请求会放到一个请求文件中单独管理；
