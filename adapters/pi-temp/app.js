//import { createRequest } from './scratch.js';
const createRequest = require('./request.js');
//import express from 'express';
const express = require('express');
//import serverless from "serverless-http";
//import bodyParser from 'body-parser';
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.json())
//app.use(express.urlencoded({extended: false}))

// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post', (req, res) => {
  console.log(req.body)
  res.send('post request')
})


app.post('/chainlink', (req, res) => {
  console.log('POST Data: ', req.body)
  const data = req.body
  createRequest(data, (status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})