require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const goals = require('../models/goals')

const router = express.Router()

/*
 *  Middleware Functions
 */

const jwtVerify = (req, res, next) => {
  jwt.verify(req.cookies.token, process.env.JWT_TOKEN, (err, _payload) => {
    if (err) {
      err.status = 401
      err.message = `Invalid JWT Token`
      return next(err)
    } else {
      req.payload = _payload
      return next()
    }
  })
}

// Creates a goal
router.post('/', jwtVerify, (req, res, next) => {
  goals.create(req.body).then((response) => {
    if (!response) {
      return next(response)
    } else {
      return res.send(response)
    }
  })
    .catch(err => res.status(401).send(err))
})

router.get('/:id', jwtVerify, (req, res, next) => {
  const id = parseInt(req.params.id, 10)
  goals.getGoalsForTeam(id, next).then((goals) => {
    if (!goals) {
      const err = new Error()
      err.status = 404
      err.message = "Something went wrong."
      res.status(401).send(err)
    } else {
      res.send(goals)
    }
  })
    .catch(err => res.status(401).send(err))
})

router.put('/:id', jwtVerify, (req, res, next) => {
  const id = parseInt(req.params.id, 10)

  goals.acceptGoal(id, req.body.username, next).then((goal) => {
    res.send(goal)
  })
})

router.put('/:id/completed', jwtVerify, (req, res, next) => {
  const id = parseInt(req.params.id, 10)

  goals.completeGoal(id, req.body.username, next).then((goal) => {
    res.send(goal)
  })
})

router.put('/:id/uncomplete', jwtVerify, (req, res, next) => {
  const id = parseInt(req.params.id, 10)

  goals.unCompleteGoal(id, req.body.username, next).then((goal) => {
    res.send(goal)
  })
})

router.delete('/:id', jwtVerify, (req, res, next) => {
  const id = parseInt(req.params.id, 10)
  goals.deleteGoal(id)
    .then(result => res.send(result))
})
module.exports = router