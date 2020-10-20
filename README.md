# Phonebook

Web app para agendamento de SMS criado com Angular versão 10.1.7.


## Como iniciar o projeto?
Antes é necessário instalar a dependência [json-server](https://www.npmjs.com/package/json-server) globalmente, ela está sendo utilizada para persistência dos dados.

```
npm install -g json-server
```

### Pré-requisitos
Para inicialização do projeto é necessário instalar suas dependências, ou seja, *node_modules*. Para isto, basta iniciar o comando abaixo:

```
npm i
```

### Inicialização
O projeto possui um script de inicialização configurado. No script de start já é iniciado o *json-server* em seguida a aplicação Angular é iniciada.

Então é somente rodar o comando abaixo:

```
npm start
```

Após o processo, o console deve printar *Compiled Successfull*.

## Como rodar os testes?
Para rodar os teste unitários deste projeto basta executar o comando abaixo.

```
ng test --watch=true --browsers=ChromeHeadless
```

## Tecnologias utilizadas

* [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.
* [Angular Material](https://material.angular.io/) version 10.2.5.
* [JSON Server](https://www.npmjs.com/package/json-server) version 0.16.2.
