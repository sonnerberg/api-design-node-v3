import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get(() => {})
  .post(() => {})

router
  .route('/:id')
  .get(() => {})
  .delete(() => {})
  .put(() => {})

export default router
