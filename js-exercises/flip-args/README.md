# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function () {
  console.log(arguments);
});

flipped("a", "b", "c", "d");
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**

An application that provides service based on a first come first serve basis would do this. They will not have the limitation of joinees, so one of the way is to reverse the order of joinees and provide service one by one.

### **What test cases can you add to the test file?**

Check if the callback is invoked
Check if the arguments are reversed properly
Check with duplicates characters to ensure the arguments

# Restrictions

- Don't use any libraries
