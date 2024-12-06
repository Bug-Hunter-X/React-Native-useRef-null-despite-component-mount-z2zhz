# React Native useRef Null Bug

This repository demonstrates a common issue encountered when using the `useRef` hook in React Native: the `current` property unexpectedly being null, even after the component has mounted.  The solution provided addresses this by ensuring the ref is properly accessed after it's been assigned.

## Problem
The `useRef` hook in React Native doesn't always guarantee immediate access to its `current` property. Re-renders or asynchronous operations may cause access attempts before the ref is fully set up resulting in a null value.

## Solution
The solution provided uses useEffect hook to ensure the ref is accessed after it is attached to the DOM element.