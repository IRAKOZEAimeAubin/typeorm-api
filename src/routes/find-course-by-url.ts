import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";

export async function findCourseByUrl (request:Request,response:Response,next:NextFunction) {
    try {
        logger.debug( `Called findCourseByUrl()...` )
        
        const courseUrl = request.params.courseUrl
        
        if ( !courseUrl ) {
            throw `Could not request course url from the request`
        }
    } catch (error) {
        logger.error(`Error calling findCourseByUrl()...`)
    }
}