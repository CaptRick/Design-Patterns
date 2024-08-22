# Adapter Pattern
Allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces.

This pattern involves a single class which is responsible to join functionalities of independent or incompatible interfaces. 

1. A real life example could be a case of card reader which acts as an adapter between memory card and a laptop. You plugin the memory card into card reader and card reader into the laptop so that memory card can be read via laptop.

2. An example of this is with the new cellphones. Normally most of the phones have a universal port (3.5mm) for headphones. So their connection is made directly.
With the new cellphones, the companies decided to remove the headphone port, leaving only the charging port.

Here is where the adapter comes into play. Companies made an adapter so you can still use the 3.5mm headphones using the charging port.


# The Adapter pattern consists of three main components:

1. # Target Interface: 
This represents the interface that the client code expects to work with. It defines the methods and properties that the client code will use.

2. # Adaptee: 
This refers to the existing object or component that needs to be integrated into the client code. It has an incompatible interface that cannot be directly used by the client.

3. # Adapter: 
The Adapter acts as a bridge between the Target Interface and the Adaptee. It implements the Target Interface and internally handles the communication and translation of requests between the client and the Adaptee.