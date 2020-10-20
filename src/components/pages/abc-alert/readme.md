# abc-alert



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type      | Default     |
| --------- | --------- | ----------- | --------- | ----------- |
| `content` | `content` |             | `string`  | `undefined` |
| `opened`  | `opened`  |             | `boolean` | `undefined` |
| `title`   | `title`   |             | `string`  | `undefined` |
| `type`    | `type`    |             | `string`  | `undefined` |


## Methods

### `open() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [abc-title](../abc-title)
- [abc-paragraph](../abc-paragraph)
- [abc-icon](../abc-icon)

### Graph
```mermaid
graph TD;
  abc-alert --> abc-title
  abc-alert --> abc-paragraph
  abc-alert --> abc-icon
  style abc-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
