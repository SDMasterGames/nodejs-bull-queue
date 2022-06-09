# Estudo de Filas usando Bull e Nodejs
A ideia é entender melhor o conceito de filas em aplicações que demanda um processamento continuo de informações sem deixa o usuário preso em uma espera mais longa do que o necessária, deixando processos rodar em segundo plano, como por exemplo envio de email ou pagamento, com a possibilidade de realizar essas tarefas em outro servidor assim evitando consumir recursos a mais.

#### Foi Usado
- Bull
    - para o gerenciamento das filas e processar as informações recebidas.
- Nodejs
    - usando **express** para criação uma pequena api.
- Redis
    - usando **ioredis** para fazer a conexão com o **Redis**.
- Docker    
    - usando o **docker-compose** para organizar melhor a função de subir as aplicações e suas dependências


Separei em duas aplicações sendo elas **bull-sending** e **bull-receive** ambas contem uma pequena api usando o **Express**, apenas para enviar dados para fila e visualizar os dados que foram recebidos (mesmo o log já fazendo esse serviço).

Assim como nome segure a api do **bull-sending** é responsável por enviar os dados para a api do **bull-receive** que por sua vez é responsável por tratar os dados recebidos, nesse caso adicionando para um Array.

O motivo de terem duas aplicações separadas é para ter a possibilidade de parar uma delas, assim fazendo sentido utilizar a fila e o **Redis**.

#### Como usar?
Faça o clone desse projeto em sua maquina.
```bash
$ git clone https://github.com/SDMasterGames/nodejs-bull-queue.git
$ cd nodejs-bull-queue
```
E utilize o docker-compose para subir a aplicação.
```bash
$ docker-compose up --build
```
Caso queria deixa rodando em segundo plano basta adicionar o argumento `-d` **Porém, recomendo deixa sem, assim poderá ver os logs.**

Para fazer as requisições pode utilizar o **Insomnia** ou o **curl** no terminal, no caso usando o **curl**.
```bash
curl http://localhost:8080/send
```
caso queria "derrubar" o servidor **receive** basta utilizar o seguinte comando.
```bash
$ docker-compose stop receive
```
e para subir ele novamente.
```bash
$ docker-compose start receive
```
Para visualizar os dados que foram recebidos no **servidor receive**
```bash
curl http://localhost:9090
```