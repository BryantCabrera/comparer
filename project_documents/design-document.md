# The Comparer App

This is the design document. I will write down my design decisions for each phase and any findings I had not considered.

## Language and tooling

I will be using React for this project because it has been around for a while and it can do a lot. I know it a little bit
so I can progress in it relatively faster. I will also use React hooks because they are new and I want to use them. 

I will also use Typescript, just because I never had and want to get exposed to it.

I will use Nextjs because it is just what I need for an easy static server that takes away the drama of webpack from me.

## Design

### Phase I

*Requirement*: Make a one by one table and a simple slider. When the slider dial is moved, the table value should change.

*Designed Implementation*
For the table I will go with a row oriented one in a Javascript object. I will also keep a second object of column names to be able
to associate array indices with column names, like so:

```
const rows = {'sample': [3]}
const columns = {'dimension1': 0}
```
so I can do something like:

```
rows['sample'][columns['dimension1']]
>>> 3
```

For now I will just use a simple slider input.

*Actual Implementation*
I had tried to implement this by keeping the state in a `TableModel` and `SliderModel`. To keep the states and update. But this just 
seems like a roundabout way to use class components. So I deleted those. I also opted not to use the Context API for now, given that what I need to do is simple, and I do not need to get ahead of myself. Phase I is done. There is a simple slider and a simple table, if you can call it that, whose value changes with the slider.

### Phase II

*Requirement*: Let the table have five dimensions now with the same functionality

*Designed Implementation*:
We need five dimensions with the same functionality. I will hardcode five dimensions in the App and pass an object of `[value, setValues]` to the `Table` and `Slider`s

*Actual Implementation*
As designed

### Phase III
*Requirements*:

Make a slider with multiple dials

*Designed Implementation*:
I will add another sample to be able to test the multiple dials on the slider. I am planning on searching what there is online for a multi dial slider and reuse that.

*Actual Implementation*:
Found this really awesome librar `react-compound-slider` [here](https://github.com/sghall/react-compound-slider). I have used it that.

### Phase IV
*Requirements*:

Implement the ability to add and remove samples

*Designed Implementation*:
My data structure is column oriented. So I will add `Add` and `Remove` buttons that will, on click, push or pop one sample per column.Some code DRY-ing is in order. I will DRY up after Phase V that will also use some of this logic.

