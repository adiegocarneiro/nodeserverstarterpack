let TOKEN = ""
const HASHID = { "hashid": "7a9336a6-08bd-4b41-9c2a-cba60e802469" }
const KYCMESSAGE = {
  "dados": {
    "uf": "MG",
    "cidade": "Sao Sebastiao do Paraiso",
    "numero": "470",
    "data_nascimento": "27/01/1996",
    "rg": "MG-16.297.056",
    "logradouro": "Av Alemanha",
    "bairro": "Jardim Europa",
    "cpf": "127.144.346-57",
    "nome": "Lucas Ricardo Duarte Bruzzone",
    "nome_mae": "Ana Veronica Duarte",
    "cep": "37950-000"
  },
  "validacoes": {
    "uf": true,
    "cidade": true,
    "numero": true,
    "data_nascimento": true,
    "rg": true,
    "logradouro": true,
    "bairro": true,
    "cpf": true,
    "nome": true,
    "nome_mae": false,
    "cep": true
  },
  "hashid": "7a9336a6-08bd-4b41-9c2a-cba60e802469",
  "status": "Analise Concluída",
  "url_webhook": "https://webhook.site/3ea23781-e328-4b65-84ba-7e643f7eec6c",
  "validado": false,
  "valores": {
    "kyc_embargos_ambientais": {
      "kyc_consulta_embargo": false,
      "kyc_consulta_autuacao": false
    },
    "kyc_face_match": true,
    "kyc_pessoas_expostas_politicamente": false,
    "kyc_consulta_serasa": {
      "ultima_atualizacao_documento": "24-02-2024",
      "valor_total_pendencias_financeiras": "0",
      "qtd_pendencias_financeiras": "0",
      "prob_inadimplencia": "11.5",
      "qtd_protestos": "0",
      "nome": "LUCAS RICARDO DUARTE BRUZZONE",
      "score_pf": "664",
      "qtd_cheques_sem_fundos": "0",
      "valor_total_protestos": "0",
      "qtd_pendencias_internas": "0",
      "data_nascimento": "27-01-1996",
      "cpf": "12714434657",
      "nome_mae": "",
      "situacao_documento": "regular"
    },
    "kyc_consulta_cpf_serpro": true,
    "kyc_lista_suja": false
  }
}

const setToken = (newToken) => {
  TOKEN = newToken
}

const getAsync = async (mili) => {
  console.log("Starting async process. Please wait...")
  setTimeout(async () => {
    console.log("Process complete. Calling endpoint")
    fetch("http://localhost:3000/v1/fundos/kyc/webhook", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": TOKEN,
      },
      body: JSON.stringify(KYCMESSAGE)
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
      .catch((err) => {
        console.log(err)
      })

  }, mili)
}

export {
  getAsync,
  setToken,
  HASHID,
  KYCMESSAGE,
}