# Car Early Stopping

![](readme/example.png)

## Description

This project aims to be a fun and instructive illustration of the Optimal Stopping Problem, a fundamental mathematical problem that has applications in Artificial Intelligence, Economics, Finance and even in dating and relationships. You can play the game [here](https://furkanhaney.github.io/car-early-stopping/) .

From Wikipedia on Optimal Stopping

> In mathematics, the theory of optimal stopping[1][2] or early stopping[3] is concerned with the problem of choosing a time to take a particular action, in order to maximise an expected reward or minimise an expected cost. Optimal stopping problems can be found in areas of statistics, economics, and mathematical finance (related to the pricing of American options). A key example of an optimal stopping problem is the secretary problem. Optimal stopping problems can often be written in the form of a Bellman equation, and are therefore often solved using dynamic programming.

## Game Rules

You will have $n=10$ cars offered to you in sequence. For each offered car, you can either take it or go to the next one. There's no going back to a previous car. You will have to take the last car if you choose next on all the previous ones.

## Intuition

It should be clear that stopping too early (taking the first car) or too late (stuck with the last car) cannot be an optimal strategy since it's unlikely the first or the last car is the best one especially if the number of cars $n$ is high.

There is a slightly modified version of this problem where the number of cars $n$ is unknown, which is arguably more applicable in real life decision making since we usually do not know how many more chances we will get. Estimating $n$ in that case might be useful.

## License

MIT License excluding the images.
