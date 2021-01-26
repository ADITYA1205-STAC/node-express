import { BootstrapServer } from '@shekhar.raval/rest-lib';
import { Router } from 'express';

const router = Router();
process.env.NODE_ENV = 'development';
process.env.LEVEL = 'debug';
process.env.APP_NAME = 'TEST'

BootstrapServer(8000, { prefix: '/api', router }).then(() => {

});