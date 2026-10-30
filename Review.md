Utilização de Express para validação de rotas 

Criação de variavel App que recebe o express 

A variavel App. vai utilizar o framework do express e traduzir para JS object 

outra coisa é a criação dos sites que ao invés de ser apenas um array irá ser um objeto, no qual irá conter o ID, Nome e URL


Agora trabalhando os principios do CRUD iremos destacar o App. 

1 - Ler
GET que irá fazer um caminho, da pasta que irá requisitar e responder atráves de uma função e enviar a resposta para o GET

faremos isso novamente para o formato json, e quando colocamos o json com o valor de sites, será listado nosso objeto 

2 - Criar 

Com o valor do App como post iremos criar uma rota /sites para cadastrar dados 

e utilizaremos uma validação através do try e catch; o try irá validar uma url que foi declarada e dizer que se a URL não for igual a HTTPS ira dar erro


e a solução para o erro sera retornar a tela com o erro e dizer que a url está invalida

logo a baixo declaramos nome como uma variavel que recebe o requerimento do do o usario para a o array de objetos

if o nome vier incorreto, ou também em espaço aberto o trim irá cortar isso, e o sistema auto se identifica que contém um erro 

o sites.push irá jogar um novo site dentro do novoSite que irá responder o nosso site com uma nova variavel que aumenta o número de ID além do nome e url 

o 4 principio o Excluir cria a rota para mais uma req e resposta nela iremos criar uma constante do nosso id  identificando que ele é Numero e deichando claro que queremos pegar dentro dos parametros do nosso objeto

o const indice. site. findindex irá percorrer a nossa lista buscando o o site de acordo com o id que o usuario colocar 

if nosso indice foir igual a -1 é para retornar erro que o site não foi encontrado pois nossa lista é positiva e nao negativa 

ai iremos recortar da lista, com o splice e o indice de acordo com o 1 e enviar a mensagem para o usario através de JSON que o site foi excluido 

O 3 principio atualizar 

iremos colocar nosso app com put com uma nova rota e mais uma nota requisição criando nosso id identificando o numero e dpeois com nosso site irá encontrar o intem de acordo com oque o usuairo enviar

se nosso site estiver vazio é para dizer que o site não foi encontrado

o site. nome recebe o objeto 
e o site. url recebe o objeto 
e responde em JSON 

o app listen é 3000 é para dizer que o server estar aberto na porta 3000 