# Select-Input
该组件是基于bootstrap的封装组件，使用前请先安装bootstrap

```npm install bootstrap```

或在html文件中引入

```<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.2.3/css/bootstrap.css" rel="stylesheet">```

详细可看https://getbootstrap.com/docs/5.3/getting-started/download/

引用组件
```
  import SelectInput from 'select-input/select-input
  import 'select-input/select-input.css
```
## API
|  Property      |  type   |  Default   |  Description   |
| -----------    | ------- | ---------- | -------------- |
|  placeholder   | string  | -          | 描述一些简短的提示|
| btnValue | string | 查找 | 自定义button的value值 |
|  dataList | array | - | 将请求得到的数据传入Selected |
|  data | string | - | 具体数据对应的键传入option |
| setKey | string | - | 给每个option的key属性赋值 |
| searchFunction(inputValue) | function | - | 当点击button后将执行的函数,参数为input的e.target.value |
## Example
```
import React from "react";
import SelectInput from 'select-input/select-input
import 'select-input/select-input.css

const Example = () => {

  const dataDemo = [
      {
        id: 0,
        data: 'option one'
      },{
        id: 1,
        data: 'option two'
      },{
        id: 2,
        data: 'option three'
      },{
        id: 3,
        data: 'option four'
      },
  ]

  const onClick = (e) => {
    console.log(e)
  }

return (
    <SelectInput
      palceholder = '请输入关键字'
      btnValue = '搜索'
      dataList = {dataDemo}
      data = 'data'
      setKey = 'id'
      searchFunction = {onClick}
    />
