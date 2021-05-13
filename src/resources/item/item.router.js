import { Router } from 'express'

const router = Router()

const mockController = (req, res) => {
  res.send('hello')
}
router
  .route('/')
  .get(mockController)
  .post(mockController)

router
  .route('/:id')
  .get(mockController)
  .delete(mockController)
  .put(mockController)

export default router
