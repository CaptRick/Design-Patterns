# Abstract Factory Pattern
The Abstract Factory pattern allows us to produce families of related objects without specifying concrete classes. It's useful in situations where we need to create objects that share only some properties and methods.

The way it works is by presenting an abstract factory the client interacts with. That abstract factory calls the corresponding concrete factory given the corresponding logic. And that concrete factory is the one that returns the end object.

Basically it just adds an abstraction layer over the factory method pattern, so that we can create many different types of objects, but still interact with a single factory function or class.


Abstract Factory is about creating families of related or dependent products.

Abstract Factory exposes a family of related objects which may consist of these Factory methods.

Abstract Factory hides the construction of a family of related objects. Abstract factories are usually implemented using (a set of) factory methods.

Abstract Factory pattern is best utilized when your system has to create multiple families of products or you want to provide a library of products without exposing the implementation details.!