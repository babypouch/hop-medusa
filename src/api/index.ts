import { Router } from "express"
import { Response, Request, NextFunction } from "express"

const customMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Executing custom middleware for: /admin/products")
  
  next()
}

export default (rootDirectory: string): Router | Router[] => {
  const router = Router()

  // add your custom routes here
  router.use("/admin/products", customMiddleware)
  return router
}
