# react-responsive-hooks ![alt text](https://img.shields.io/npm/v/react-responsive-hooks) ![alt text](https://img.shields.io/github/repo-size/madein83/react-responsive-hooks) ![alt text](https://img.shields.io/npm/dw/react-responsive-hooks)

This package allows your component to conditionally display another component(s) according the current size of the screen.

## installation

```bash
$ npm i react-responsive-hooks
```

## importing library

```js
import { useBreakpoints } from "react-responsive-hooks";
```

## play with

```js
const App = () => {
  const { isXS } = useBreakpoints();

  return (
    <header>
      {isXS && <MenuMobile />}
      {!isXS && <MenuDesktop />}
    </header>
  );
};

export default App;
```

## hooks API

### default breakpoints

- `XS`: < 575
- `SM`: > 575 && < 767
- `MD`: > 768 && < 991
- `MD`: > 992 && < 1199
- `LG`: > 1200 && < 1599
- `XL`: > 1600

### returned data

`useBreakpoints` returns following data:

- `viewportWidth`: number - the current viewport width
- `isXS`: boolean
- `isSM`: boolean
- `isMD`: boolean
- `isLG`: boolean
- `isXL`: boolean
- `isXXL`: boolean
