# The Comparer App

## Motivation

Having gone through multiple unsuccessful relationships, I sat down one day to try and find what is common in my exes, and 
what it is that I am looking for. Why is it that I did not like or I did like each of them. This led to a table with my exes
as rows and the dimensions that I cared about as columns, things like common interests, enjoyable conversation, attraction and 
intimacy et cetera. 

The plan was to assign a score to each row's column. But I soon realize that I assigning scores on an arbitrary scale is 
somewhat difficult on a spreadsheet: I need to keep adjusting different rows column-value everytime my opinion changes. I 
realized it is way easier for me to qualitatively say which is better by how much, than to quantitatively assigning scores to them.

This is a bigger problem when I wanted to explore a new dimension to see how that works. Then I needed to go through the ordeal again.

So I imagined that it would be very nice to have a tool, that will allow me to do that: compare multiple data points of a kind
across an arbitrary number of dimension qualitatively, and then report back the numbers.

I also thought about fancy stuff like dynamic radar charts. But TBD.

## What

As a user, I need to be able to compare multiple data points of a kind across an arbitrary number of dimensions qualitatvily
and be able to view the result quantitatively.

The approach I have decided to take, is to start with a table of a single sample and a single dimension. There will also 
be a slider somewhere on the page. The slider is titled after the dimension. The slider has a dial which is positioned on
the value the user is assigning to the dimension for the sample represented by the slider.

The user should be able to add a sample to the table and when they do that, then a new dial pops up on the slider, which
they can then adjust to show the score they are assigning to that sample for that dimension.

The user should also be able to add new dimensions, in which case a new slider will pop up with number of dials equal to the
current number of samples. The user may then adjust each dial accordingly and see the corresponding numeric values change
in the table.

### User Stories
* As a user, I can add a new samples to the table
* As a user, I can remove the latest sample from the table
* As a user, I can add a new dimension to the table
* As a user, I can remove the latest dimension from the table
* As a user, I can update the values of a single sample's dimension by adjusting the dial on a slider for that dimension.
* As a user, I can see one dial per sample, and one slider per dimension.
* As a user, when I adjust the dial, I see the numbers change to the corresponding numeric value on the table.
* As a user, I cannot write to the table

The project will be done in multiple phases.

### Phase I

Make a one by one table and a simple slider. When the slider dial is moved the table value should change

### Phase II

Let the table have five dimensions now with the same functionality

### Phase III

Make a slider with multiple dials

### Phase IV

Implement the ability to add and remove samples

### Phase V

Implement the ability to add and remove dimensions

## Future work

A dynamic radar chart for this will be super cool. If after a while, a user can lock down the dimensions they are looking for in the
class of objects under investigation, then they can get visual idea of what a fit or unfit looks like, sort of like a constelation or
symbol for that thing.
