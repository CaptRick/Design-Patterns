# Command pattern
The Command Pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all the information about the request. This object can then be passed around, stored, and executed independently. 

In our example we have a calculator with 4 basic operations: add, subtract, multiply and divide. Each operation is encapsulated by a Command object.

The Calculator maintains a stack of commands. Each new command is executed and pushed onto the stack. When an undo request arrives, it simply pops the last command from the stack and executes the reverse action.