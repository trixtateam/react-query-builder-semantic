# react-query-builder-semantic

## Credits
This component was inspired by prior work from:

- [jQuery QueryBuilder](http://querybuilder.js.org/)
- [Angular QueryBuilder](https://github.com/mfauveau/angular-query-builder)

Thanks to [sapientglobalmarkets](https://github.com/sapientglobalmarkets/react-querybuilder) for providing us this component's code base <br/>
Thanks to [coryhouse](https://github.com/coryhouse/ps-react) for providing the medium for documentation and deployment

## Getting Started
```shell
npm install react-query-builder-semantic --save
```

## [Semantic UI React Integration](https://react.semantic-ui.com/)
- [Setting up Semantic](https://react.semantic-ui.com/usage)

## Documentation
[Component documentation](https://rebelopsys.github.io/react-query-builder-semantic/)

<details>
<summary>Query Builder Semantic API</summary>

## Usage

Import QueryBuilderSemantic with default styles.
```jsx
import 'semantic-ui-css/semantic.min.css';
import QueryBuilderSemantic from 'react-query-builder-semantic/lib/QueryBuilderSemantic';
```

Import QueryBuilderSemantic without styles.
```jsx
import 'semantic-ui-css/semantic.min.css';
import QueryBuilderSemantic from 'react-query-builder-semantic/lib/QueryBuilderSemantic/QueryBuilderSemantic';
```
## QueryBuilderSemantic

`<QueryBuilderSemantic />` is the only top-level component exposed from this library. It supports the following properties:

#### ruleSemanticProps *(Required)*
Semantic Props for valueEditor, fieldSelector, valueSelector, segment, deleteRuleButton on a rule. Default is :
```js
ruleSemanticProps: {
    segment: {
        size: 'tiny',
        padded: true,
        compact: true,
    },
    valueEditor: {
        size: 'tiny',
        type: "text"
    },
    fieldSelector: {
        scrolling: true,
        selection: true,
        search: true,
    },
    operatorSelector: {
        scrolling: true,
        selection: true,
        search: true,
    },
    deleteRuleButton: {
        size: 'tiny',
        compact: true,
        circular: true,
        floated: 'right',
        icon: 'remove'
    }
}

```

#### ruleGroupSemanticProps *(Required)*
Semantic Props for dropDown, addGroupButton, removeGroupButton, segment, addRuleButton on a group. Default is :
```js
ruleGroupSemanticProps: {
    dropDown: {
        button: true,
        attached: 'left',
        className: 'icon',
        size: 'tiny',
        labeled: true,
        scrolling: true,
        icon: 'filter'
    },
    segment: {
        size: 'tiny',
    },
    addGroupButton: {
        attached: true,
        size: 'tiny',
        compact: true,
        icon: 'plus'
    },
    removeGroupButton: {
        attached: 'right',
        size: 'tiny',
        compact: true,
        icon: 'minus'
    },
    addRuleButton: {
        attached: 'right',
        size: 'tiny',
        compact: true,
        icon: 'plus'
    },
}

```

#### fields *(Required)*
[ {value:String, text:String} ]

The array of fields that should be used. Each field should be an object with

`{value:String, text:String}`

#### values *(Optional)*
[ {value:String, text:String} ]

The array of values that should be used. Each value should be an object with

`{value:String, text:String}`

#### operators *(Optional)*
[ {value:String, text:String} ]

The array of operators that should be used. The default operators include:

```js
[
    { value: 'null', text: 'Is Null' },
    { value: 'notNull', text: 'Is Not Null' },
    { value: 'in', text: 'In' },
    { value: 'notIn', text: 'Not In' },
    { value: '=', text: '=' },
    { value: '!=', text: '!=' },
    { value: '<', text: '<' },
    { value: '>', text: '>' },
    { value: '<=', text: '<=' },
    { value: '>=', text: '>=' },
]
```

#### combinators *(Optional)*
[ {value:String, text:String},{content:any} ]

The array of combinators that should be used for RuleGroups.
The default set includes:

```js
[
    {
       text: 'AND',
       value: 'and',
       content: <Label color={'purple'} content='AND' circular />,
   },
   {
       text: 'OR',
       value: 'or',
       content: <Label color={'blue'} content='OR' circular />,
   }
]
```
#### combinatorColors
[ {color:String, combinator:String} ]

The array of combinator colors to use for the selected combinator that should be used for RuleGroups.
The default set includes:

```js
 combinatorColors: [
        { color: 'purple', combinator: 'and' },
        { color: 'blue', combinator: 'or' },
    ]
```

#### controlElements *(Optional)*
```js
React.PropTypes.shape({
  fieldSelector: React.PropTypes.func, //returns ReactClass
  operatorSelector: React.PropTypes.func, //returns ReactClass
  valueEditor: React.PropTypes.func //returns ReactClass
})
```

This is a custom controls object that allows you to override the control elements used.
The following control overrides are supported:
- `fieldSelector`: By default a `<Dropdown scrolling selection search />` is used. The following props are passed:

  ```js
  {
    /**
     * Semantic Props for fieldSelector on a rule
     */
    ruleSemanticProps: PropTypes.shape({
        /**
         * Semantic Dropdown props on a rule
         * https://react.semantic-ui.com/modules/dropdown/
         */
        fieldSelector: PropTypes.any,
    }),
    options: React.PropTypes.array.isRequired, //same as 'fields' passed into QueryBuilderSemantic
    value: React.PropTypes.string, //selected field from the existing query representation, if any
    className: React.PropTypes.string, //css classNames to be applied
    handleOnChange: React.PropTypes.func, //callback function to update query representation
  }
  ```
- `operatorSelector`: By default a `<<Dropdown scrolling selection search />` is used. The following props are passed:

  ```js
  {
    /**
    * Semantic Props for valueSelector on a rule
    */
   ruleSemanticProps: PropTypes.shape({
       /**
        * Semantic Dropdown props on a rule
        * https://react.semantic-ui.com/modules/dropdown/
        */
       operatorSelector: PropTypes.any,
   }),
   options: React.PropTypes.array.isRequired, //same as 'fields' passed into QueryBuilderSemantic
   value: React.PropTypes.string, //selected operator from the existing query representation, if any
   className: React.PropTypes.string, //css classNames to be applied
   handleOnChange: React.PropTypes.func, //callback function to update query representation
  }
  ```
- `valueEditor`: By default a `<Input type="text" />` is used. The following props are passed:

  ```js
  {
    /**
     * Semantic Props for valueEditor on a rule
     */
    ruleSemanticProps: PropTypes.shape({
        /**
         * Semantic Input props on a rule
         * https://react.semantic-ui.com/elements/input/
         */
        valueEditor: PropTypes.any,
    }),
    values: React.PropTypes.array //values corresponding to this Rule
    field: React.PropTypes.string, //field name corresponding to this Rule
    operator: React.PropTypes.string, //operator name corresponding to this Rule
    value: React.PropTypes.string, //value from the existing query representation, if any
    handleOnChange: React.PropTypes.func //callback function to update the query representation
  }
  ```

#### getOperators *(Optional)*
function(field):[]

This is a callback function invoked to get the list of allowed operators
for the given field

#### onQueryChange *(Optional)*
function(queryJSON):void

This is a notification that is invoked anytime the query configuration changes. The
query is provided as a JSON structure, as shown below:

```json
{
  "type": "group",
  "combinator": "and",
  "rules": [
    {
      "type": "rule",
      "field": "firstName",
      "operator": "null",
      "value": ""
    },
    {
      "type": "rule",
      "field": "lastName",
      "operator": "null",
      "value": ""
    },
    {
      "type": "group",
      "combinator": "and",
      "rules": [
        {
          "type": "rule",
          "field": "age",
          "operator": ">",
          "value": "30"
        }
      ]
    }
  ]
}
```

#### controlClassnames *(Optional)*
This can be used to assign specific `CSS` classes to various controls
that are created by the `<QueryBuilderSemantic />`. This is an object
with the following properties:

```js
{
     /**
    *Root <div> element
    */
   queryBuilder: PropTypes.string,
   /**
    *<Segment.Group> containing the RuleGroup
    */
   ruleGroup: PropTypes.string,
   /**
    *<Dropdown> control for combinators
    */
   combinators: PropTypes.string,
   /**
    *<Button> to add a Rule
    */
   addRule: PropTypes.string,
   /**
    *<Button> to add a RuleGroup
    */
   addGroup: PropTypes.string,
   /**
    *<Button> to remove a RuleGroup
    */
   removeGroup: PropTypes.string,
   /**
    *<Segment> containing the Rule
    */
   rule: PropTypes.string,
   /**
    *<Dropdown> control for fields
    */
   fields: PropTypes.string,
   /**
    *<Dropdown> control for operators
    */
   operators: PropTypes.string,
   /**
    *<Input> for the field value
    */
   value: PropTypes.string,
   /**
    *<Button> to remove a Rule
    */
   removeRule: PropTypes.string,
}
```

#### translations *(Optional)*
This can be used to override translatable texts applied to various controls
that are created by the `<QueryBuilderSemantic />`. This is an object
with the following properties:

```js
{
     fields: {
        title: "Fields",
    },
    operators: {
        title: "Operators",
    },
    value: {
        title: "Value",
    },
    removeRule: {
        title: "Remove rule",
    },
    removeGroup: {
        title: "Remove group",
    },
    addRule: {
        title: "Add rule",
    },
    addGroup: {
        title: "Add group",
    },
    combinators: {
        title: "Combinators",
    }
}
```
</details>



<details>
<summary>Query Builder API</summary>

## Usage

Import QueryBuilder with default styles.
```jsx
import QueryBuilder from 'react-query-builder-semantic/lib/QueryBuilder';
```

Import QueryBuilder without styles.
```jsx
import QueryBuilder from 'react-query-builder-semantic/lib/QueryBuilder/QueryBuilder';
```
## QueryBuilder

`<QueryBuilder />` is the only top-level component exposed from this library. It supports the following properties:

#### fields *(Required)*
[ {name:String, label:String, id:ID} ]

The array of fields that should be used. Each field should be an object with

`{name:String, label:String, id:ID}` |

The Id is optional, if you do not provide an id for a field then the name will be used


#### operators *(Optional)*
[ {name:String, label:String} ]

The array of operators that should be used. The default operators include:

```js
[
    {name: 'null', label: 'Is Null'},
    {name: 'notNull', label: 'Is Not Null'},
    {name: 'in', label: 'In'},
    {name: 'notIn', label: 'Not In'},
    {name: '=', label: '='},
    {name: '!=', label: '!='},
    {name: '<', label: '<'},
    {name: '>', label: '>'},
    {name: '<=', label: '<='},
    {name: '>=', label: '>='},
]
```

#### combinators *(Optional)*
[ {name:String, label:String} ]

The array of combinators that should be used for RuleGroups.
The default set includes:

```js
[
    {name: 'and', label: 'AND'},
    {name: 'or', label: 'OR'},
]
```

#### controlElements *(Optional)*
```js
React.PropTypes.shape({
  addGroupAction: React.PropTypes.func, //returns ReactClass
  removeGroupAction: React.PropTypes.func, //returns ReactClass
  addRuleAction: React.PropTypes.func, //returns ReactClass
  removeRuleAction: React.PropTypes.func, //returns ReactClass
  combinatorSelector: React.PropTypes.func, //returns ReactClass
  fieldSelector: React.PropTypes.func, //returns ReactClass
  operatorSelector: React.PropTypes.func, //returns ReactClass
  valueEditor: React.PropTypes.func //returns ReactClass
})
```

This is a custom controls object that allows you to override the control elements used.
The following control overrides are supported:
- `addGroupAction`: By default a `<button />` is used. The following props are passed:

  ```js
  {
    label: React.PropTypes.string, //"+Group"
    className: React.PropTypes.string, //css classNames to be applied
    handleOnClick: React.PropTypes.func, //callback function to invoke adding a <RuleGroup />
    rules: React.PropTypes.array, //Provides the number of rules already present for this group,
    level: React.PropTypes.number //The level of the current group
  }
  ```
- `removeGroupAction`: By default a `<button />` is used. The following props are passed:

  ```js
  {
    label: React.PropTypes.string, //"x"
    className: React.PropTypes.string, //css classNames to be applied
    handleOnClick: React.PropTypes.func, //callback function to invoke removing a <RuleGroup />
    rules: React.PropTypes.array, //Provides the number of rules already present for this group,
    level: React.PropTypes.number //The level of the current group
  }
  ```
- `addRuleAction`: By default a `<button />` is used. The following props are passed:

  ```js
  {
    label: React.PropTypes.string, //"+Rule"
    className: React.PropTypes.string, //css classNames to be applied
    handleOnClick: React.PropTypes.func, //callback function to invoke adding a <Rule />
    rules: React.PropTypes.array, //Provides the number of rules already present for this group,
    level: React.PropTypes.number //The level of the current group
  }
  ```
- `removeRuleAction`: By default a `<button />` is used. The following props are passed:

  ```js
  {
    label: React.PropTypes.string, //"x"
    className: React.PropTypes.string, //css classNames to be applied
    handleOnClick: React.PropTypes.func, //callback function to invoke removing a <Rule />
    level: React.PropTypes.number //The level of the current group
  }
  ```
- `combinatorSelector`: By default a `<select />` is used. The following props are passed:

  ```js
  {
    options: React.PropTypes.array.isRequired, //same as 'combinators' passed into QueryBuilder
    value: React.PropTypes.string, //selected combinator from the existing query representation, if any
    className: React.PropTypes.string, //css classNames to be applied
    handleOnChange: React.PropTypes.func, //callback function to update query representation
    rules: React.PropTypes.array, //Provides the number of rules already present for this group
    level: React.PropTypes.number //The level of the current group
  }
  ```
- `fieldSelector`: By default a `<select />` is used. The following props are passed:

  ```js
  {
    options: React.PropTypes.array.isRequired, //same as 'fields' passed into QueryBuilder
    value: React.PropTypes.string, //selected field from the existing query representation, if any
    className: React.PropTypes.string, //css classNames to be applied
    handleOnChange: React.PropTypes.func, //callback function to update query representation
    level: React.PropTypes.number //The level the group this rule belongs to
  }
  ```
- `operatorSelector`: By default a `<select />` is used. The following props are passed:

  ```js
  {
    field: React.PropTypes.string, //field name corresponding to this Rule
    options: React.PropTypes.array.isRequired, //return value of getOperators(field)
    value: React.PropTypes.string, //selected operator from the existing query representation, if any
    className: React.PropTypes.string, //css classNames to be applied
    handleOnChange: React.PropTypes.func //callback function to update query representation
    level: React.PropTypes.number //The level the group this rule belongs to
  }
  ```
- `valueEditor`: By default a `<input type="text" />` is used. The following props are passed:

  ```js
  {
    field: React.PropTypes.string, //field name corresponding to this Rule
    operator: React.PropTypes.string, //operator name corresponding to this Rule
    value: React.PropTypes.string, //value from the existing query representation, if any
    handleOnChange: React.PropTypes.func //callback function to update the query representation
    level: React.PropTypes.number //The level the group this rule belongs to
  }
  ```

#### getOperators *(Optional)*
function(field):[]

This is a callback function invoked to get the list of allowed operators
for the given field

#### onQueryChange *(Optional)*
function(queryJSON):void

This is a notification that is invoked anytime the query configuration changes. The
query is provided as a JSON structure, as shown below:

```json
{
  "type": "group",
  "combinator": "and",
  "rules": [
    {
      "type": "rule",
      "field": "firstName",
      "operator": "null",
      "value": ""
    },
    {
      "type": "rule",
      "field": "lastName",
      "operator": "null",
      "value": ""
    },
    {
      "type": "group",
      "combinator": "and",
      "rules": [
        {
          "type": "rule",
          "field": "age",
          "operator": ">",
          "value": "30"
        }
      ]
    }
  ]
}
```

#### controlClassnames *(Optional)*
This can be used to assign specific `CSS` classes to various controls
that are created by the `<QueryBuilder />`. This is an object
with the following properties:

```js
{
    /**
    *Root <div> element
    */
   queryBuilder: PropTypes.string,
   /**
    *<div> containing the RuleGroup
    */
   ruleGroup: PropTypes.string,
   /**
    *<select> control for combinators
    */
   combinators: PropTypes.string,
   /**
    *<button> to add a Rule
    */
   addRule: PropTypes.string,
   /**
    *<button> to add a RuleGroup
    */
   addGroup: PropTypes.string,
   /**
    *<button> to remove a RuleGroup
    */
   removeGroup: PropTypes.string,
   /**
    *<div> containing the Rule
    */
   rule: PropTypes.string,
   /**
    *<select> control for fields
    */
   fields: PropTypes.string,
   /**
    *<select> control for operators
    */
   operators: PropTypes.string,
   /**
    *<input> for the field value
    */
   value: PropTypes.string,
   /**
    *<button> to remove a Rule
    */
   removeRule: PropTypes.string,

}
```

#### translations *(Optional)*
This can be used to override translatable texts applied to various controls
that are created by the `<QueryBuilder />`. This is an object
with the following properties:

```js
{
    fields: {
        title: "Fields",
    },
    operators: {
        title: "Operators",
    },
    value: {
        title: "Value",
    },
    removeRule: {
        label: "x",
        title: "Remove rule",
    },
    removeGroup: {
        label: "x",
        title: "Remove group",
    },
    addRule: {
        label: "+Rule",
        title: "Add rule",
    },
    addGroup: {
        label: "+Group",
        title: "Add group",
    },
    combinators: {
        title: "Combinators",
    }
}
```
</details>
