import { NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';
var serviceAccount = require('../../firebase-privateKey.json');

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function decodeIDToken(req: any, res: any, next: NextFunction) {
  const header = req.headers?.authorization;
  if (header !== 'Bearer null' && header?.startsWith('Bearer ')) {
    const idToken = header.split('Bearer ')[1];
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.currentUser = decodedToken;
    } catch (error: any) {
      next(new HttpException(401, error.message));
    }
  } else {
    next(new HttpException(401, 'UnAuthorized').message);
  }
  next();
}
module.exports = decodeIDToken;
