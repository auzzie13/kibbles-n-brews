const User = require('../models/user')

createUser = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Error creating profile',
    })
  }

  const user = new User(body)

  if (!user) {
    return res.status(400).json({ success: false, error: err })
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: 'User created!',
      })
    })
    .catch(error => {
        return res.status(400).json({
          error,
          message: 'User not created',
    })
  })
}

addImage = async (req, res) => {
  const body = req.body

  User.findOne({ _id: req.params.id}, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'User not found',
      })
    }
    if(body.profileImage) {
      user.profileImage = body.profileImage;
    } else if(body.dogImage) {
     user.dogImage = body.dogImage
    }

    user.save()
    .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: 'User updated',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Error Updating',
        })
      })
    
  })
}
  



updateUser = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }

  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'User not found',
      })
    }
    user.username = body.username
    user.password = body.password
    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: 'User updated',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Error Updating',
        })
      })
  })
}

deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: `User not found` })
    }

    return res.status(200).json({ success: true, data: user })
  }).catch(err => console.log(err))
}

getUserById = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: `User not found` })
    }
    return res.status(200).json({ success: true, data: user })
  }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!userss.length) {
      return res
        .status(404)
        .json({ success: false, error: `User not found` })
      }
      return res.status(200).json({ success: true, data: users })
  }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUserById,
    addImage
}