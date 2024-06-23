# Template for Account Section(s).

## Usage

**Using Tailwindcss**

```html
<div className="grid items-center grid-cols-3 p-6">
  <div className="font-medium">mockup name</div>
  <div>
    <div>mockup action</div>
  </div>
  <div className="place-self-end">mockup more</div>
</div>
```

**Using Vanilla CSS**

```html
<div className="container__grid container__padding">
  <div className="container__title">mockup name</div>
  <div>
    <div>mockcup action</div>
  </div>
  <div className="conatiner__end">mockup more</div>
</div>
```

```css
.container__grid {
}

.container__padding {
}

/* 
  add to parent div of "mockup action" if the "mockup action" needs more space 
  and "mockup more" is not needed.
  
  instance: className="container__action__no_more"
*/
.container__action__no_more {
}

.container__title {
}

.container__end {
}
```

## Notes

1. The "mockup action parent div" can be made to span 2 columsn to accomodate more actions if necessary, please contact a senior on more knowledge.
2. If "mockup more div" is not needed it can be removed to make room for "mockup action parent div".
