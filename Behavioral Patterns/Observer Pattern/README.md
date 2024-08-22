# Observer Pattern

The Observer Pattern, also known as Publish/Subscribe (or PubSub), allows us to subscribe certain objects, called observers, to another object, known as the observable. Whenever an event occurs, the observable notifies all its observers!

## An observable object usually contains 3 important parts:

- **observers**: An array of observers that will get notified whenever a specific event occurs.

- **subscribe()**: A method to add observers to the observers list.

- **unsubscribe()**: A method to remove observers from the observers list.

- **notify()**: A method to notify all observers whenever a specific event occurs.
