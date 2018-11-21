# Serverless Ipsum Generator

The main purpose of this project is just getting some practise with [Serverless framework](https://serverless.com), [React](https://reactjs.org), [Typescript](https://www.typescriptlang.org) and [AWS](https://aws.amazon.com/es/).

This project consist in a **Lorem Ipsum text generator**. It is divided in two clear parts:

- **UI:** Here is everything related with the **frontend of the project**. The UI has a button to generate Lorem Ipsum text. Once some text have been genrated, you can reexecute the process by clicking in the redo button in the upper right corner.

<p align="center">
    <img width="413" alt="User Interface image" src="https://user-images.githubusercontent.com/15388747/48826062-4597ff80-ed61-11e8-86d5-7f109ba543c6.png">
</p>

<p align="center">
    <img width="413" alt="User Interface image after hitting the generate button" src="https://user-images.githubusercontent.com/15388747/48826245-acb5b400-ed61-11e8-9b16-7a9462fa4334.png">
</p>

- **Serverless:** Is this directory is everything related with **Serverless**. As I said, I am using the [Serverless framework](https://serverless.com), so you will find the .serverless file in here. What is also very important is the handler funtion. It has been written in Typescript as I want to learn more about it.

**To run the project**, you can just clone it, go to the ui directory and run `npm install` to install all the dependencies and `npm start`.
If you want to deploy the same function in your AWS account, you can do this by having your credentials in the `~/.aws/credentials` file and running `serverless deploy`.
