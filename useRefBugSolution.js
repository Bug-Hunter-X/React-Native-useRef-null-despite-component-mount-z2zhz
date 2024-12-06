In the provided solution, useEffect is used to ensure the ref is accessed only after the component is mounted and the DOM element has been assigned to the ref. The useEffect hook runs after the render cycle and ensures that the ref is populated before you access its `current` property.  If you need to access the ref immediately during the render phase, you'll likely need to refactor your approach to avoid immediate dependency on the ref's value.