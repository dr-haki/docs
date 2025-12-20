---
title: A functional Interface
description: Containing exactly one abstract method.
timestamp: 2025-11-25T01:35:00
type:
  - Concept Log
system: Java
icon: Usb
tags:
  - programming
  - java
---

> [!abstract] info
> A functional interface is an interface that contains exactly one abstract method. It may contain zero or more default methods and/or static methods.

```java 
 interface Predicate<T> {  
    boolean test(T t);  
}
```

### Why functional interfaces are cool? 

A functional interface 
comes super handy 
since having only one 
abstract method is enough for 
the [[java compiler]] to know that 
when a Simplified Lambda Expressions 
is called, the method being used is that one. 

---