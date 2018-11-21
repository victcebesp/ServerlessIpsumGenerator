# Serverless Ipsum Generator

The main purpose of this project is just getting some practise with Serverless framework, React, Typescript and AWS.

This project consist in a Lorem Ipsum text generator. It is divided in two clear parts:

- UI: Here is everything related with the frontend of the project. The UI has a button to generate Lorem Ipsum text. Once some text have been genrated, you can reexecute the process by clicking in the redo button in the upper right corner.

- Serverless: Is this directory is everything related with Serverless. As I said, I am using the Serverless framework, so you will find the .serverless file in here. What is also very important is the handler funtion. It has been written in Typescript as I want to learn more about it.

To run the project, you can just clone it, go to the ui directory and run `npm install` to install all the dependencies and `npm start`.
If you want to deploy the same function in your AWS account, you can do this by having your credentials in the `~/.aws/credentials` file and running `serverless deploy`.
