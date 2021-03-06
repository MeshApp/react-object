# react-object
[![Build Status](https://travis-ci.org/philcockfield/react-object.svg?branch=master)](https://travis-ci.org/philcockfield/react-object)

Rich visual representation and editor of javascript objects and values.

![Example](https://cloud.githubusercontent.com/assets/185555/10372121/4667a0b2-6d9b-11e5-952f-7bc119b1b040.png)


#### Features
- Color highlighted pretty-printing of objects and primitive values.
- Expandable to drill into object and array hierarchy.
- Abbreviates large objects/arrays to prevent render slow-down.
- Rich date notation.
- Rich function notation (with parameter names).


## Getting Started

    npm install react-object

Render a complex object:

```js
import { Value } from "react-object";

const obj = { foo: 123, bar: { baz: "hello" }};

<Value
    label="foo"
    value={ obj }/>        
```

Will yield:

![Value](https://cloud.githubusercontent.com/assets/185555/10420913/2ec14578-70fa-11e5-92be-3f38a07e8e27.png)



## TODO
- editable


## Explore the API in the [UIHarness](http://uiharness.com/)
    git clone https://github.com/philcockfield/react-object.git
    cd react-object
    npm install
    npm start

![ui-harness](https://cloud.githubusercontent.com/assets/185555/10324272/3254e10c-6c3d-11e5-9ce6-6f9598461313.png)


---
### License: MIT
