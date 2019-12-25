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



