import TestController from '../controllers/TestController.js';

export default (app)=>{
  app.get('/teste/get', TestController.get)
  app.put('/teste/put', TestController.put)
  app.post('/teste/post', TestController.post)
  app.delete('/teste/delete', TestController.del)
}