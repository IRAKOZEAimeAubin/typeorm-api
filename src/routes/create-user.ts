import {NextFunction, Request, Response} from 'express'
import {logger} from '../logger'
import {AppDataSource} from '../data-source'
import {User} from '../models/user'
import * as bcrypt from 'bcryptjs'

export async function createUser(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    logger.debug(`Called createUser()...`)

    const {name, email, password, profilePictureUrl, isAdmin} = request.body

    if (!email) {
      throw 'Could not extract the email from the request, aborting...'
    }

    if (!password) {
      throw 'Could not extract the email from the request, aborting...'
    }

    const repository = AppDataSource.getRepository(User)

    const user = await repository
      .createQueryBuilder('users')
      .where('email = :email', {email})
      .getOne()

    if (user) {
      const message = `User with email ${email} already exists, aborting...`
      logger.error(message)
      response.status(409).json({message})
      return
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = repository.create({
      name,
      email,
      password: hashedPassword,
      profilePictureUrl,
      isAdmin,
    })

    await AppDataSource.manager.save(newUser)

    logger.info(`User ${email} has beean created...`)

    response.status(201).json({
      name,
      email,
      profilePictureUrl,
      isAdmin,
    })
  } catch (error) {
    logger.error(`Error calling createUser()...`)
    return next(error)
  }
}
