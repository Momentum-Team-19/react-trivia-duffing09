# React Trivia Game

For this project, you will use React to build a trivia game powered by [the Open Trivia Database](https://opentdb.com/).

This project does not include any wireframes: you will have to design the game yourself.

One way to implement this is to present the user with a list of categories. A user can choose a category, and then answer questions within that category. That's not the only way you could do this; you're welcome to be creative.

## Skills you're building in this project

Doing this project, you will...

- Plan and build an application that needs multiple components
- Gain more experience using state in React
- Fetch data from a third-party API and use it in your React application
- Understand React data flow

## Definition of Done: what the project should do and look like when it is finished

This list is not necessarily in the order in which you should build these parts of the application.

- When the application loads, a user can see a list of possible trivia categories so that they can choose one to start a quiz in that category.
- A user can select a category and start a quiz in that category. A quiz should have at least 10 questions in it.
- A quiz shows the user one question at a time, with its possible answers shown in a random order so that the correct answer isn't in the same place every time.
- A user can select an answer to a question and can see some visual feedback that they selected an answer.
- The user progresses through each question in the category, choosing their answer, until they reach the end of the questions.
- After a user has answered all the questions in a category, they can see how many questions they answered correctly, or some kind of score. Optionally, show them which questions they got right and which ones they got wrong.
- A user can go back to the list of categories and start a new quiz in a different category.

## Project Requirements

- The application makes use of 3 or more components.
- The application has two or more "screens." In a traditional web application, we'd think of these as different pages.
- The application uses React's state to manage data.
- The application uses the Open Trivia Database API.
- The application is styled in a way that enhances its usability and functionality.
- The application includes at least one one spicy option from the list.
- You can explain how your application works and why you made the design decisions you did.

## How to start

### Thoroughly investigate the API you're using

You will need to spend time understanding the [Open Trivia Database API](https://opentdb.com/) to see what kind of data you are working with and the different options that the API gives you. This might give you some ideas for things you want to do in your application. 

[Read the Open Trivia API documentation](https://opentdb.com/api_config.php).

Notice that there are different URLs (in an API we refer to these as _endpoints_) that return different kinds of data. You'll need to make at least two API requests for this project.

You will find it helpful to use a tool like [Insomnia](https://insomnia.rest/) to make requests to the API to see what kind of data you get back.

### Sketch out the application

[Wireframe](https://balsamiq.com/learn/articles/what-are-wireframes) your design before you start building. Wireframing is about organization and functionality, not about styling; it's a sketch that helps you start breaking down the project into separate parts that you need to build. When you sketch, start with what the user will see on the page at different points in their interaction with your application. Then, consider how your user will interact with your application.

### Plan components

Figuring out what you want the user to see and do will help you plan the components you need. Things that change on the page as a result of fetching data or user interaction are things that belong in state in React. 

You may want to start with one big component that you then break down into smaller ones. A good way to think about this: each component should have one job.

You should outline this on paper (or a Google doc, or whatever) before you start writing code.

### Scaffold the application with Vite

Create a new React application using [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). 

When you are ready to write code, **your first task should be getting categories to show up on the page**.

Then, when you have a list of categories showing, give your user a way to select a category. When a category is selected, a user should see questions for that category.

At each step, think about what the user wants to do. After they select a category, what will they see and do? How will the application respond to their interactions?

## Minimum Progress Benchmarks

 The following lists are provided as a guide to help you stay on track. Your pace may be slightly different, but you will find it hard to finish the project on time if you are significantly behind these benchmarks.

### Day One Goals

#### Set up

- [ ] Wireframe your application
- [ ] Plan your components
- [ ] Scaffold your application with Vite

#### Build features

- [ ] A user can see a list of categories from the API on the page.

### Day Two Goals

#### Build features, test features, and debug

- [ ] A user can select a category to start a quiz in that category.
- [ ] A user can see a series of trivia questions in the selected category, one at a time.
- [ ] A user can see a multiple-choice list of answer options for a given question.

### Day Three-Four Goals

#### Build features, test features, and debug

- [ ] A user can select an answer to a question, and can see some visual feedback that they selected an answer.
- [ ] When a user selects an answer, they are shown the next question in the category, either automatically or by clicking a button to advance.
- [ ] A user sees the possible answers for a question in a random order so that the correct answer isn't in the same place every time.

#### Styling the UI

- [ ] Get basic styles in place so that the application is usable.

### Day Five-Six Goals

#### Build features, test features, and debug

- [ ] A user can see their score after they answer all of the questions in a category.
- [ ] A user can start a new quiz after they finish one.

#### Styling the UI

- [ ] Style the application so that it is usable and looks good.

## 😈 Extra Tricky Option: Jeopardy-Style Questions

Using the data from [this Jeopardy-inspired API](http://jservice.io/), which provides content from Jeopardy, will require a different approach. You won't be able to provide multiple choice questions, but instead will need to allow the user to type an answer and check if the answer matches the correct answer text. We have not covered forms in React yet, so you will have to do some advance reading to figure out how to do this.

You can design this quiz however you like, from replicating Jeopardy-style gameplay to something completely different. You should provide the same kind of feedback to the user that you would for a multiple choice quiz: show them how many questions they got right or some kind of score. 

## 🌶️ Spicy Options

Once you have the minimum functionality, you should implement as many spicy options as you have time for. You're also welcome to implement something not on this list.

- Add a [loading indicator](https://uxplanet.org/progress-indicators-4-common-styles-91a12b86060c) so that your UI shows something other than a blank screen while your data is being retreived from an AJAX request.
- Allow users to customize their quiz by choosing how many questions they want to answer and/or choosing a difficulty level.
- Consider using [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store scores so that they will still be there if the page is reloaded.
- Create a win condition and some way to indicate that a user has won. You could consider using animations or something delightful like [react-confetti](https://github.com/alampros/react-confetti) to celebrate wins.
- Use animations for interactions and/or transitions. There are many different React animation libraries you could try, but here are a few of the most widely used: [React Framer Motion](https://github.com/framer/motion), [React Spring](https://github.com/pmndrs/react-spring), [React TsParticles](https://github.com/matteobruni/tsparticles), [React Motion](https://github.com/chenglou/react-motion), [React Transition Group](https://reactcommunity.org/react-transition-group/)
- Integrate a timer into your trivia application. For example, you could impose a time limit on answering questions and mark a question wrong if there is no guess before the timer runs out. Or, you could see how many questions your user can answer in a certain amount of time. Consider using local storage to store times and show the user their personal best times.
- Show users their average score for each category, or a an average score for all categories. You will need a place to store scores for each category. You can use local storage for this. 
- When a user correctly answers all the questions in a category, they earn a badge that is displayed somewhere on the screen. The badge could be a simple image, or a font icon, or something from a CSS library. Or you could award badges for achievements like a win streak or a high score. You can be creative with this idea.
- Implement a social share feature so your user can easily share their score on social media. This could be as fancy or straightforward as you want it to be.
- Use any React library that looks interesting to you. [Here are some things to browse through](https://github.com/enaqx/awesome-react). [Here are some more](https://github.com/brillout/awesome-react-components).

## About the API

You can learn about the Open Trivia Database API at [this API config page](https://opentdb.com/api_config.php).

Some things you are likely to want to do:

- Get list of categories: https://opentdb.com/api_category.php
- Get 10 questions: https://opentdb.com/api.php?amount=10
- If you add a session token you won't receive the same question twice
    - Get a token: https://opentdb.com/api_token.php?command=request
    - Add a token to a request: `&token=YOURTOKENHERE`
