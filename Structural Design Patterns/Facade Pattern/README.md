# Facade Pattern
Facade is a structural design pattern that provides a simplified interface to a complex subsystem or a set of classes. The Facade pattern acts as a "front-end" or a "wrapper" that hides the complexities of the underlying system and provides a unified and easier-to-use interface for the client.

The idea of the facade pattern is to create your own API that hides away complex or repetitive code so that you are left with a clean and easy to use API. The benefits of this is not only clean code that is easy and fun to work with, but your code is also much easier to refactor when the complex code behind your facade needs to change.

Consider a home automation system with various subsystems like lights, air conditioning, security systems, and entertainment systems. A Facade could provide a simple interface like turnOnAllSystems() and turnOffAllSystems(), which internally calls the respective methods in the different subsystems to perform these actions.

The goal of the Facade pattern is to make a complex system easier to use by providing a simple interface that encapsulates the complexity.