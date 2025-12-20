---
title: Auto-boxing and Un-boxing
description: Systems for parsing between java types
timestamp: 2025-11-25T01:35:00
type:
  - Concept Log
system: Java
icon: Box
tags:
  - programming
  - java
---

### Autoboxing
The automatic conversion of primitive types to the object of their corresponding wrapper classes is known as autoboxing. 
For example: conversion of int to Integer, long to Long, double to Double, etc.

### Unboxing
It is just the reverse process of autoboxing. 
Automatically converting an object of a wrapper class to its corresponding primitive type is known as unboxing. 
For example, conversion of Integer to int, Long to long, Double to double, etc.

We can think of wrappers such as Boolean wrappers as boxes that contain primitive types as if they were little gifts.

Given that these wrappers are created with Java's eight in-built primitive data types in mind, there is no data loss.

However, there is a performance cost when using wrappers. 
The [[Heap Space]] has to create one more object, 
and therefore the [[Garbage Collector]] will have a little more 
work to do than if we used primitive types.

### Method Overloading on auto-boxing 

There are cases where the [[java compiler]] will have to think a little about which method to use depending on the type of argument that is passed.

> [!warning] Widening and Boxing is forbidden
> If the [[java compiler]] has a Compiler monkey mind, it does not know how to do two things at once in primitives. It cannot do a widening and then an auto-boxing, such as [[byte]] -> int and then from int to `Integer`. That is too much.

###  Resources 

- #article  [Method overloading and widening on Java](https://www.geeksforgeeks.org/java/method-overloading-autoboxing-widening-java/)


---