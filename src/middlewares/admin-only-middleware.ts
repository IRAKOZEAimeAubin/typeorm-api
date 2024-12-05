import {NextFunction, Request, Response} from 'express'
import {logger} from '../logger'

export function checkAdminPrivilege(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const user = request['user']

  if (!user?.isAdmin) {
    logger.error(`The user does not have admin privileges, access denied...`)
    response.sendStatus(403)
    return
  }

  logger.debug(`The user is a valid admin, granting access...`)
}
