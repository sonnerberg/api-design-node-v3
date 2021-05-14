export const getOne = model => async (req, res) => {
  const {
    user: { _id: createdBy },
    params: { id: _id }
  } = req

  const result = await model.findOne({ _id, createdBy })

  if (!result) {
    return res.status(404).end()
  }

  res.status(200).json({ data: result })
}

export const getMany = model => async (req, res) => {
  const {
    user: { _id: createdBy }
  } = req
  const result = await model.find({ createdBy })

  res.status(200).json({ data: result })
}

export const createOne = model => async (req, res) => {
  const {
    user: { _id: createdBy },
    body: { name }
  } = req

  const result = await model.create({ name, createdBy })
  res.status(201).json({ data: result })
}

export const updateOne = model => async (req, res) => {
  const {
    user: { _id: createdBy },
    params: { id: _id },
    body: { name }
  } = req

  const result = await model.findOneAndUpdate(
    { _id, createdBy },
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
    params: { id: _id },
    user: { _id: createdBy }
  } = req

  const result = await model.findOneAndRemove({
    _id,
    createdBy
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
