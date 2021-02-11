## stacks_intro_1

This lesson will introduce the stack abstract data structure and different ways to interact with it.

**Important**: If you haven't already followed the project [`Getting Started Guide`](../../guides/getting_started.md), please do that first.

---

### Concepts

![Stack Abstract Data Structure](assets/lifo_stack.png)

A stack is a list-type abstract data structure that limits interaction to one end of the list. It can be pictured as a vertical stack of values, where the sides are hidden and only the top value can be seen. A real-life example of a stack is a can of Pringles potato chips (where you can only grab one chip at a time).

Stacks have an interface that exposes at least two operations:
- `push(element)` - appends an `element` to the top of the stack.
- `pop()` - removes the top `element` from the stack and returns it.

Together, these facilitate last-in-first-out (LIFO) operations: the last thing `push`ed onto the stack is the first thing `pop`ed out.

Often, stacks add additional helper operations that make their use easier, such as `peek()`, which returns the top `element` on the stack without removing it.

#### Quiz

- How would you examine items below the top of a stack?
- How would you find out how many items are in a stack?

---

### The `Stack` class

These exercises use a `Stack` class that exposes `.push(element)`, `.pop()`, and `.peek()` methods as its interface. As with JavaScript's `Array` conventions, `.peek()` and `.pop()` will return `undefined` if the `Stack` is empty. Because of this, `Stack`s cannot hold `undefined` values and will throw an error if one is `.push()`ed. However, it _can_ hold other falsy values. For more details, please read the:
1. [Interface for the `Stack` class](../../structures/stack/interface.md)
1. [Tests that implementations must pass to meet the `Stack` interface](../../structures/stack/index.test.js)
1. [Simple `Stack` Implementation](../../structures/stack/simplified.js)

#### Usage Notes (or, "How do I use this thing?")

Now that you've read up on what a `Stack` _is_, let's talk a bit about how to _use_ it to accomplish other tasks.

First and foremost, here are some things that `Stack` does **not** have:
- A `.length` property
- Numeric indexing of the values it contains
- `.forEach`, `.map`, `.filter`, `.indexOf`, or other methods you'd normally find on `Array`s or `String`s.

That means many of the techniques you've become accustomed to while working with `Array`s or `String`s _won't work_ with `Stack`s. The _only_ ways to work with the values it contains are through its `.push()`, `.peek()`, and `.pop()` methods.

<details>
    <summary>How do I iterate through a Stack without these tools? (<b>Spoilers</b> ahead. Try to figure this out on your own first, only reading this if you get stuck.)</summary>
    <ol>
        <li>You can only see the top value of a Stack at any one time, so iteration through a Stack is accomplished by changing the top value. That means popping values off one-at-a-time until you're done.</li>
        <li>Since you don't know the number of values in the Stack ahead of time, the only way to know when you've reached the end is that the Stack has no values remaining on it. If (and only if) the Stack has no values, peeking or popping will return undefined.</li>
    </ol>
</details>

---

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before_each_exercise.md). Then navigate to the `exercises/stacks_intro_1` directory in your terminal.

---

### Exercise

Do the following exercises in their respective files. For all of these warm-up exercises, you will use a single `Stack`, which is given to you. Do not use any data structures outside of that. Constant-size primitives (`undefined`, `null`, boolean, numbers, single characters (`'g'`), & symbols) are ok. Following each exercise, run the `npm test` command (from within the `exercises/stacks_intro_1` directory) to verify it works.

_Note_: Given that these exercises are meant to a) build up familiarity with this data structure, and b) provide practice programming for high performance (the "Algorithms" in "Data Structures & Algorithms"), try to reduce any unnecessary steps the engine must execute, and please do not call any of your custom functions within these definitions.

#### Debugging Notes

While the test output generated by the `npm test` script describes how the exercises _should_ behave and the specific steps they're failing on, it may not tell you _exactly_ what's going on under the hood. To help with that, there are extra tools included to help with debugging:
- If you wish to experiment with either the provided data structures or your exercise solutions, the `npm run repl` script can be run within this directory to enter Node's interactive interpreter. It is the same interface you get when running the `node` command by itself (without specifying a file), except that the data structures and exercise exports are preloaded for you. That means you can jump straight into experimenting with them, without having to manually `require()` them first. However, anything that would cause the exercise scripts to crash (like syntax errors) needs to be fixed first.
- If you wish to see precisely why a test is failing, the `npm run test:debug` script can be run within this directory to enable breakpoints, statement-by-statement execution, and inspecting variables via VS Code's debugging environment (which is very similar to the Source tab on the Chrome inspector).

1. #### `getTop(stack)`
    In `get_top.js`, implement the `getTop(stack) -> value` function - With the given `stack`, get the top `value` without modifying the `stack`.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |

    | Return Value |
    | --- |
    | The top value of `stack`. `undefined` if `stack` is empty. |

    | Side Effect |
    | --- |
    | None: the `stack` should end up exactly how it started. |

    ##### Examples
    ```js
    getTop(new Stack()); // returns: undefined
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 5, 3, 86, 12
    getTop(filledStack); // returns: 12

    filledStack;
    // contains, from bottom to top: 5, 3, 86, 12
    ```

1. #### `addToTop(stack, value)`
    In `add_to_top.js`, implement the `addToTop(stack, value)` function - Add the given `value` to the top of `stack`.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |
    | `value` | Any value. |

    | Return Value |
    | --- |
    | (none) |

    | Side Effect |
    | --- |
    | `value` is added to top of `stack`. |

    ##### Examples
    ```js
    const stack = new Stack();

    stack;
    // contains no values

    addToTop(stack, 5);
    addToTop(stack, 3);
    addToTop(stack, 11);

    stack;
    // contains, from bottom to top: 5, 3, 11
    ```

1. #### `takeTop(stack)`
    In `take_top.js`, implement the `takeTop(stack) -> value` function - Remove and return the top value from `stack`.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |

    | Return Value |
    | --- |
    | The top `value` of `stack`. `undefined` if `stack` was empty. |

    | Side Effect |
    | --- |
    | `value` is removed from the top of `stack`. |

    ##### Examples
    ```js
    const emptyStack = new Stack();

    emptyStack;
    // contains nothing
    takeTop(emptyStack); // returns: undefined
    emptyStack;
    // contains nothing
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 54, 23, 43, 25
    takeTop(filledStack); // returns 25
    filledStack;
    // contains, from bottom to top: 54, 23, 43
    ```

1. #### `isEmpty(stack)`
    In `is_empty.js`, implement the `isEmpty(stack) -> boolean` function - Test whether or not the given `stack` is empty.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |

    | Context | Return Value |
    | --- | -- |
    | `stack` is empty | `true` |
    | `stack` is not empty | `false` |

    | Side Effect |
    | --- |
    | None: the `stack` should end up exactly how it started. |

    ##### Examples
    ```js
    isEmpty(new Stack()); // returns: true
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 3, 6, 3
    isEmpty(filledStack); // returns: false

    filledStack;
    // contains, from bottom to top: 3, 6, 3
    ```

1. #### `replaceTop(stack, newValue)`
    In `replace_top.js`, implement the `replaceTop(stack, newValue) -> oldValue` function - Replace the top value of `stack` with `newValue`, returning the old top value.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |
    | `newValue` | Any value. |

    | Return Value |
    | --- |
    | The value previously on top of `stack`. `undefined` if `stack` was empty. |

    | Side Effect |
    | --- |
    | The top value of `stack` is replaced with `newValue`. If `stack` was empty, does nothing. |

    ##### Examples
    ```js
    emptyStack;
    // contains no values

    replaceTop(emptyStack, 12); // returns: undefined

    emptyStack;
    // contains no values
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 75, 35, 24

    replaceTop(filledStack, 54); // returns: 24

    filledStack;
    // contains, from bottom to top: 75, 35, 54
    ```

1. #### `get2ndFromTop(stack)`
    In `get_2nd_from_top.js`, implement the `get2ndFromTop(stack) -> value` function - Get the value underneath the top of `stack`, returning `stack` to its original state.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |

    | Return Value |
    | --- |
    | The value underneath the top value of `stack`. `undefined` if `stack` doesn't have at least two values. |

    | Side Effect |
    | --- |
    | None: `stack` should end up exactly how it started. |

    ##### Examples
    ```js
    get2ndFromTop(emptyStack); // returns: undefined
    ```

    ```js
    get2ndFromTop(singleItemStack); // returns: undefined
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 75, 35, 24

    get2ndFromTop(filledStack); // returns: 35

    filledStack;
    // contains, from bottom to top: 75, 35, 24
    ```

1. #### `insertUnderTop(stack, value)`
    In `insert_under_top.js`, implement the `insertUnderTop(stack, value)` function - Insert `value` underneath the top value of `stack`. If `stack` doesn't have any values, it shouldn't do anything.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |
    | `value` | Any value. |

    | Return Value |
    | --- |
    | (none) |

    | Side Effect |
    | --- |
    | If `stack` has at least one value, inserts `value` underneath top value. |

    ##### Examples
    ```js
    insertUnderTop(emptyStack, 8);

    emptyStack;
    // contains no values
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 75, 35, 24

    insertUnderTop(filledStack, 54);

    filledStack;
    // contains, from bottom to top: 75, 35, 54, 24
    ```

1. #### `take2ndFromTop(stack)`
    In `take_2nd_from_top.js`, implement the `take2ndFromTop(stack) -> value` function - Remove and return the 2nd from the top value from `stack`.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |

    | Return Value |
    | --- |
    | The 2nd from the top value of `stack`. `undefined` if `stack` doesn't have at least two values. |

    | Side Effect |
    | --- |
    | The 2nd from the top value is removed from `stack`, if it exists. |

    ##### Examples
    ```js
    take2ndFromTop(emptyStack); // returns: undefined

    emptyStack;
    // contains no values
    ```

    ```js
    singleValueStack;
    // contains, from bottom to top: 83
    take2ndFromTop(singleValueStack); // returns: undefined

    singleValueStack;
    // contains, from bottom to top: 83
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 75, 35, 24

    take2ndFromTop(filledStack); // returns: 35

    filledStack;
    // contains, from bottom to top: 75, 24
    ```

1. #### `swapTopTwo(stack)`
    In `swap_top_two.js`, implement the `swapTopTwo(stack)` function - Swap the top two values of `stack`. If `stack` doesn't have at least two values, does nothing.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |

    | Return Value |
    | --- |
    | (none) |

    | Side Effect |
    | --- |
    | The top and 2nd-from-top values of `stack` are swapped. |

    ##### Examples
    ```js
    swapTopTwo(emptyStack);

    emptyStack;
    // contains no values
    ```

    ```js
    singleValueStack;
    // contains, from bottom to top: 63
    swapTopTwo(singleValueStack);

    singleValueStack;
    // contains, from bottom to top: 63
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 75, 35, 24

    swapTopTwo(filledStack);

    filledStack;
    // contains, from bottom to top: 75, 24, 35
    ```

1. #### `count(stack)`
    In `count.js`, implement the `count(stack) -> total` function - Count the number of values in `stack`.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |

    | Return Value |
    | --- |
    | The number of values in `stack`. |

    | Side Effect |
    | --- |
    | `stack` is disposable: it may be mutated in any way. |

    ##### Examples
    ```js
    count(emptyStack); // returns: 0
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 75, 35, 24

    count(filledStack); // returns: 3
    ```

1. #### `takeBottom(stack)`
    In `take_bottom.js`, implement the `takeBottom(stack) -> value` function - Remove and return the bottom value from `stack`.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |

    | Return Value |
    | --- |
    | The bottom value of `stack`. `undefined` if `stack` doesn't have at least one value. |

    | Side Effect |
    | --- |
    | `stack` is disposable: it may be mutated in any way. |

    ##### Examples
    ```js
    takeBottom(emptyStack); // returns: undefined
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 74, 36, 37, 52

    takeBottom(filledStack); // returns: 74
    ```

1. #### `sum(numberStack)`
    In `sum.js`, implement the `sum(numberStack) -> total` function - Add up the values in `numberStack` and return the total.

    | Parameter | Argument |
    | --- | --- |
    | `numberStack` | An instance of `Stack` containing only numbers. |

    | Return Value |
    | --- |
    | The total of all the values in `numberStack`. |

    | Side Effect |
    | --- |
    | `numberStack` is disposable: it may be mutated in any way. |

    ##### Examples
    ```js
    sum(emptyStack); // returns: 0
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 74, 36, 37, 52

    sum(filledStack); // returns: 199
    ```

1. #### `max(numberStack)`
    In `max.js`, implement the `max(numberStack) -> value` function - Get the maximum value from `numberStack`.

    | Parameter | Argument |
    | --- | --- |
    | `numberStack` | An instance of `Stack` containing only numbers. |

    | Return Value |
    | --- |
    | The largest value in `numberStack`. `-Infinity` if `numberStack` is empty. |

    | Side Effect |
    | --- |
    | `numberStack` is disposable: it may be mutated in any way. |

    ##### Examples
    ```js
    max(emptyStack); // returns: -Infinity
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 23, 54, 2, 64, 52, 35

    sum(filledStack); // returns: 64
    ```

1. #### `takeValueAtIndex(stack, index)`
    In `take_value_at_index.js`, implement the `takeValueAtIndex(stack, index) -> value` function - Remove and return the value located `index` from the top of `stack`. If there is no value at `index`, return `undefined`.

    | Parameter | Argument |
    | --- | --- |
    | `stack` | An instance of `Stack`. |
    | `index` | A non-negative integer. |

    | Return Value |
    | --- |
    | The value at `index` values from the top of `stack`. `undefined` if there is no value at `index`. |

    | Side Effect |
    | --- |
    | `stack` is disposable: it may be mutated in any way. |

    ##### Examples
    ```js
    filledStack;
    // contains, from bottom to top: 32, 42, 73, 72, 77, 35, 4, 65, 66

    takeValueAtIndex(filledStack, 6); // returns: 73
    ```

    ```js
    filledStack;
    // contains, from bottom to top: 23, 6, 84, 67, 29, 34

    takeValueAtIndex(filledStack, 6); // returns: undefined
    ```

---

### Submitting Your Solution

When your solution is complete, return to the root of your `data_structures_lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after_each_exercise.md).

### Next Steps

Start working on the [`stacks_intro_2` exercises](../stacks_intro_2/README.md) while waiting for feedback on your pull request.