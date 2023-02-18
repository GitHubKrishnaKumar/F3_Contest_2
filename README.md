

# Project Title

### Objective:

To create a website for a restaurant that includes 5 functions to handle various tasks such as getting the menu, taking orders, order preparation, payment, and displaying a thank you message.

Function 1: getMenu()

This function will fetch the food items from an API and display them to the user when the screen loads.
API URL: 

https://free-food-menus-api-production.up.railway.app/burgers

	Steps:
	Call the API using the fetch() method.
	Parse the JSON response.
	Display the food items to the user.
	
Function 2: takeOrder()

This function will simulate the user placing an order. It will randomly select 3 burgers, add them to an object, and then return a Promise that resolves after 2500 milliseconds.

	Steps:
        Create a Promise.
        Use a setTimeout() function to wait for 2500 milliseconds.
        Select 3 burgers randomly.
        Add the burgers to an object.
        Resolve the Promise with the object.

Function 3: orderPrep()

This function will simulate the order preparation process. It will return a Promise that resolves after 1500 milliseconds with the object {order_status:true, paid:false}.

	Steps:
        Create a Promise.
        Use a setTimeout() function to wait for 1500 milliseconds.
        Create an object with the order status and payment status.
        Resolve the Promise with the object.

Function 4: payOrder()

This function will simulate the payment process. It will return a Promise that resolves after 1000 milliseconds with the object {order_status:true, paid:true}.

	Steps:
        Create a Promise.
        Use a setTimeout() function to wait for 1000 milliseconds.
        Create an object with the order status and payment status.
        Resolve the Promise with the object.
	
Function 5: thankyouFnc()

This function will display a thank you message once the payment is received. It will be called after the payOrder() function is resolved and the paid status is true.

Steps:

	Display a thank you message using an alert() function.


## Marking Scheme:

- getMenu() function: 15 marks
- takeOrder() function: 20 marks
- orderPrep() function: 15 marks
- payOrder() function: 20 marks
- thankyouFnc() function: 20 marks
- Deployment : 10 marks Total: 100 marks



## Demo

Project Demo Link :-
https://githubkrishnakumar.github.io/F3_Contest_2/