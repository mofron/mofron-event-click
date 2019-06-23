# mofron-event-click
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

click event for mofron component.

event hander when component is clicked.

# Install

```
npm install mofron mofron-event-click
```

# Sample

```html
<require>
    <tag module="mofron-comp-text">Text</tag>
    <tag module="mofron-event-click">Click</tag>
</require>

<script run=init>
let clk = () => { alert("click"); }
</script>

<Text event=Click(clk)>Click</Text>
```

# Parameter

| Simple<br>Param | Parameter Name     | Type                   |    Description                             |
|:---------------:|:-------------------|:-----------------------|:-------------------------------------------|
| 　     ◯        | handler            | array (function,mixed) | event function                             |
|                 | pointer            | boolean                | true: mouse-in cursor is pointer (default) |
|                 |                    |                        | false: mouse-in coursor is default          |
