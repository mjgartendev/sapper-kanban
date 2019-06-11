import * as functions from 'firebase-functions';
import * as express from 'express'

const { sapper } = require('../__sapper__/build/server/server');

const app = express().use(sapper.middleware());

export const ssr = functions.https.onRequest(app);
