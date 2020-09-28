#### Description
A drop in react component that can be used to tranverse and render a tree of blocks from WordPress's `parse_blocks` function.


#### Installation
`yarn add block-renderer`


#### Usage
```
import BlockRenderer, { Fragment } from 'block-renderer';

const blockMap = {
    // Base wrapping block used to wrap the start of the tree
    fragment: Fragment,
    'my-plugin/mail-form': (props: Record<string, string>): JSX.Element => (
        <MailForm {...props} />
    )
}

// Example content pulled from WordPress rest api by calling `parse_blocks`
const content = [
  {
    "blockName": "core/paragraph",
    "attrs": [],
    "innerBlocks": [],
    "innerHTML": "\n<p> Lorem ipsum </p>\n",
    "innerContent": [
      "\n<p> Lorem Ipsum </p>\n"
    ]
  }
]

return <>
  <BlockRenderer
   blockMap={blocksMap}
   innerBlocks={content}
   blocksUtilizingSubtree={[]}
   />
</>

```


#### Props

|name  | blockMap  |  innerBlocks |  blocksUtilizingSubtree
|---|---|---|---|---|
| type  | Record<string, string>  | Array of blocks  | Array of strings  |
| description  | Mapping of all the blocks available to the renderer. When a match is found the renderer will use this component  | The array of blocks that WordPress provides when using `parse_blocks`   | An array of block names, that when provided will be given to the block. Useful for things like Table of Contents, or dynamic tables.        |
|   |   |   | 