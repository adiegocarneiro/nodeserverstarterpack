function get(req, res){
  const { iserror } = req.query
  if(iserror === "sim"){
    res.status(404)
    .json({
      success: true,
      message: 'Rota de GET testes OK. Erro OK!'
    })
  }else{
      res.status(200)
        .json({
          success: true,
          message: 'Rota de GET testes OK'
      })
  }
}

function post(req, res){
  const { iserror } = req.body;
  if(iserror === "sim"){
    res.status(404)
      .json({
        success: true,
        message: 'Rota de POST testes OK. Erro OK!'
    })
  }else{
    res.status(200)
      .json({
        success: true,
        message: 'Rota de POST testes OK'
    })
  }
}

function put(req, res){
  const { iserror } = req.body;
  if(iserror === "sim"){
    res.status(404)
      .json({
        success: true,
        message: 'Rota de PUT testes OK. Erro OK!'
    })
  }else{
    res.status(200)
      .json({
        success: true,
        message: 'Rota de PUT testes OK'
    })
  }
}

function del(req, res){
  const { iserror } = req.body;
  if(iserror === "sim"){
    res.status(404)
      .json({
        success: true,
        message: 'Rota de DELETE testes OK. Erro OK!'
    })
  }else{
    res.status(200)
      .json({
        success: true,
        message: 'Rota de DELETE testes OK'
    })
  }
}

export default {
  get,
  put,
  post,
  del
}