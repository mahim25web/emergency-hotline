
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 


getElementById('id') : It selects the first element with the given id, it returns A single element (or null if not found),
                        it works fastest, but works only with ID.

getElementsByClassName('class') : It selects all elements with the given class, it returns Live HTMLCollection, 
                                  it need looping to access each element.

 querySelector('selector') : It selects the first element that matches a CSS selector (like .class, #id, div > p),
                             it returns a single element (or null), it is very flexible, supports complex selectors.

querySelectorAll('selector') : It selects all elements matching a CSS selector, it returns static NodeList but does
                              not auto-update when DOM changes, it can be used forEach directly on it.                                                       


2. How do you create and insert a new element into the DOM?

Answer step by step:

1.Create an element document.createElement('div')

2.Set attributes or content element.textContent = "Hello"

3.Insert into DOM use methods like:

4.parent.appendChild(child)  add at the end

5.parent.insertBefore(newEl, existingEl)  insert before a node

6.parent.prepend(child)  add at the start

7.element.insertAdjacentHTML('beforeend', '<p>Hello</p>')  insert HTML relative to element



3. What is Event Bubbling and how does it work?

Answer:

Event Bubbling is when an event occurs on a child element, it “bubbles up” the DOM tree, triggering the same event on its parents.


4. What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation = attaching a single event listener to a parent element to handle events for multiple child elements (using event bubbling).
Instead of attaching click listeners to every button in a list, it attach one listener to the parent and check the event target.

5. Difference between preventDefault() and stopPropagation()

Answer:

preventDefault() :	Stops the default action of an event (e.g., prevent form submission, stop a link from navigating).

stopPropagation() :	Stops the event from bubbling up (or trickling down, in capture phase). It prevents parent handlers from firing.