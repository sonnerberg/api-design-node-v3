export const getOne = model => async (req, res) => {
  const {
    user: { _id: userId },
    params: { id }
  } = req

  const result = await model.findOne({ _id: id, createdBy: userId })

  if (!result) {
    return res.status(404).end()
  }

  res.status(200).json({ data: result })
}

export const getMany = model => async (req, res) => {
  const {
    user: { _id: userId }
  } = req
  const result = await model.find({ createdBy: userId })

  res.status(200).json({ data: result })
}

export const createOne = model => async (req, res) => {
  const {
    user: { _id: userId },
    body: { name }
  } = req

  const result = await model.create({ name, createdBy: userId })
  res.status(201).json({ data: result })
}

export const updateOne = model => async (req, res) => {
  const {
    user: { _id: userId },
    params: { id },
    body: { name }
  } = req

  const result = await model.findOneAndUpdate(
    { _id: id, createdBy: userId },
    { name },
    { new: true }
  )

  if (!result) {
    return res.status(400).end()
  }

  res.status(200).json({ data: result })
}

export const removeOne = model => async (req, res) => {
  const {
    params: { id },
    user: { _id: userId }
  } = req

  const result = await model.findOneAndRemove({
    _id: id,
    createdBy: userId
  })

  if (!result) {
    return res.status(400).end()
  }

  res.status(200).json({ data: result })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
