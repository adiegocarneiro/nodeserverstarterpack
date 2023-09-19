import TestController from '../controllers/TestController.js';
import TestReturnStringBasico from '../controllers/TestReturnStringBasico.js';
import TestReturnStringAvancado from '../controllers/TestReturnStringAvancado.js';
import TestOtherThings from '../controllers/TestOtherThings.js';

export default (app)=>{
  app.get('/teste/get', TestController.get)
  app.put('/teste/put', TestController.put)
  app.post('/teste/post', TestController.post)
  app.delete('/teste/delete', TestController.del)
  app.post('/teste/retorno/basico', TestReturnStringBasico.post)
  app.post('/teste/retorno/avancado', TestReturnStringAvancado.post)
  app.post('/teste/other', TestOtherThings.post)
}