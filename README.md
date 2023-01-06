# Життевий цикл компонента

## componentDidUpdate

використовуется для запису змін стейта в localStorage

```js
 componentDidUpdate(prevProps, prevstSate) {
    console.log("componentDidUpdate");
    if (this.state.todos !== prevstSate.todos) {
      console.log("обновилось поле todos");
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }
```

setState можна використовувати тільки через умову

## componentDidMount

використовуется для считування данних з localStorage або backend

```js
 componentDidMount() {
    console.log("componentDidMount");

    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }


```

для навешивания слушателей

```js
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
```

## componentWillMount

метод очистки слущателей, запросов и тд.

```js
  componentWillUnmount() {
   window.removeEventListener("keydown", this.handleKeyDown);
  }
```

## shouldComponentUpdate

должен ли комронент обновится

```js
shouldComponentUpdate(nextProp, nextState){
return nextState.index!== this.state.index
}
```

лучше не использовать.

альтернатива чистьій компонент:

```js
import React, { PureComponent } from "react";

class Modal extends PureComponent {
  render() {
    return;
  }
}

export default Modal;
```
