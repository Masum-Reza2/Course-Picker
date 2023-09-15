# 3 Project features
1.This project is a so user friendly.
2.User can see what course they are buying immediatelty on the UI.
3.If mistakenly user click on select double on a the same course then he/she can easily see the sweet alert.
4.User can see selected course finish time immediately on the UI
5.User can look after his/her remaining credit hours.

# state management
I'm going to explain it in my own words.
state is just like a variable so called hook in react.
When i declere a state here the index[0] is variable and index[1] is a function which can update the value at index[0].
In this project i use more that 6 state and a function to manage different components.Also i show my own custom sweet alerts using state instead of alert. I just toggle the state from true to false and based on their value i conditionaly render custom sweet alerts.
Not only my custom alert message i used state to show the selected course name in ui. Just passed the function to the required component and get the required data from here. and using this data i process some operation and set the state to show in the UI.
we can pass  state from one component to another just like props drilling and can display in the UI.