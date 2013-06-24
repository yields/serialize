
# serialize

  serialize forms.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/serialize

## Example

```html
<input type='text' name='foo' value='baz'>
<input type='text' name='baz' value='foo'>
<select name='select'>
  <option value='1'></option>
</select>

<script>
  serialize(document.forms[0]);
  assert('foo=baz&baz=foo&select=1' == serialize(two));
</script>
```

## License

  MIT
