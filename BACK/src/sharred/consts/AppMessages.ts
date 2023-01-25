const AppMessages =
{
    //USER
    InvalidLogin: 'Usuário ou senha incorretos!',
    LoginSuccess: 'Login realizado com sucesso!',
    InvalidToken: 'Token inválido!',
    ErrorToDecode: 'Erro ao decodificar',
    InvalidPassword: 'Senha inválida!',

    //DATABASE
    MongoConnected: 'MongoDB conectado!',
    CloseConnectionMongo: 'MongoDB desconectado!.',
    MongoClearCollection: ': limpeza da coleção concluída!',
    MongoDropDatabase: 'Banco de dados deletado!',
    ClearDatabase: 'Limpeza do banco de dados finalizada!',

    //SERVER 
    AppListening: '🚀 Aplicativo escutando na porta:',
    SigSignalReceived: 'Sinal do SIGTERM recebido.',
    ClosingHttpServer: 'Finalizando conexão com o servidor Http.',
    ClosedHttpServer: 'Conexão com o servidor HTTP finalizada.',

    // RATE LIMIT
    TooManyAccounts: 'Muitas requisições criadas a partir deste IP, tente novamente após 15 minutos',
}

export { AppMessages }

