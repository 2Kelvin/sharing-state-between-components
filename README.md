# sharing-state-between-components

In this read, I learnt:

- sharing state between components is called `lifting state up`
- sharing the state means that the components' `state will always change together`
- to share the state between two components, lift the state up to their `nearest common parent` and then `pass it down to both components as a prop`
- that, you lift state up in 3 steps:
  - [x] removing the state from the child's component
  - [x] passing hardcorded state data from the common parent
  - [x] adding state to the common parent then passing it down with the event handlers
- once you lift up the state, `the component no longer has control over its state but its parent does`
- the parent becomes the `source of truth` for both components' states
- lifting state uo often changes the nature / what your state variable holds
- the parent component has to explicitly allow its child components to change state by passing down an event handler to them as a prop
- about `uncontrolled components`: components with their own local state which their parents can't write / access
- `controlled components`: components whose state is fully controlled by their parents. They get their state passed down to them via props. They do not have local state because their state is stored up in their parent component.
- controlled components are used when you want to coordinate components together. e.g. form inputs.
