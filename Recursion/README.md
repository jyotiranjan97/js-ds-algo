### Recursion

1. **Should have a Base case.**
2. **Should return the correct callBack function with parameter(increment/decrement value).**
3. **Base case return value should be correct.**

---

#### Helper Method Recursion

> It uses another function to do the recursion and manipulates an outer variable and returns.

        // Example
        const outer = (input) => {

            let outerScopedVariable = []

            const helper = (helperInput) => {
                // modify the outerScopedVariable
                helper(helperInput--)
            }

            helper(input)

            return outerScopedVariable;

        }

> See [HelperMethodRecursion.js](HelperMethodRecursion.js) for implementation.

#### Pure Method Recursion

> The function itself acts as recursive function and manipulated the input parameter.
>
> See [PureMethodRecursion.js](PureMethodRecursion.js) for implementation.
