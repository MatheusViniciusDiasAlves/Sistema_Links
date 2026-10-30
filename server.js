const express = require("express");
// requeire express importa a biblioteca express
const app = express()

app.use(express.json());

const sites = [
    {
    id: 1,
    nome: "YouTube", 
    url: "https://www.youtube.com"   
    },
    {
    id: 2,
    nome: "Google", 
    url: "https://www.google.com" 
    },
    {
    id: 3,
    nome: "GitHub", 
    url: "https://github.com"     
    }
]
//express() cria nossa aplicação
app.get("/", (req, res) => {
    res.send("Minha API está funcionando!");
    //res.send envia uma resposta 
});

app.get("/sites", (req, res) => {
    res.json(sites); 
});

app.post("/sites", (req, res) =>{
//app.post() Cria uma rota para cadastrar dados.

    
//req.body.nome Lê o nome enviado pelo cliente.

    try{
        const url = new URL(req.body.url);
        
        if (url.protocol !== "https:"){
            return res.status(400).json({
                erro: "Somente URLs HTTPS são permitidas."
            })           
        }


    }catch(erro){

        return res.status(400).json({
            erro: "URL inválida"

        })
    }
        

    const nome = req.body.nome;

    if(!nome.trim()){
        return res.status(400).json({
            erro: "O nome é obrigatório"
        });  
    } 

// Aqui fizemos uma validação para ver se o código é realmente confiavel, pois tem pessoas que colocam por exemplo um nome vaziu ou não valído, nisso a gente fez que se meu nome está vazio, ausente ou valor considerado falso | também se meu nome está com espaço em branco iremos retornar o status de erro 400 falando que o nome é obrigatório

    sites.push(novoSite);

    res.status(201).json(novoSite)


    const novoSite = {
        id: sites.length + 1,
        nome: req.body.nome,
        url: req.body.url
    };

//res.status(201) Informa que o recurso foi criado.
//res.json() Devolve o site cadastrado.
});

app.delete("/sites/:id", (req, res) => {
    const id = Number(req.params.id);
// req.params.id Le o ID recebido
    const indice = sites.findIndex((site) => site.id === id);
// findIndex procura a posição do site no array
    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Site não encontrado"
            // 404 geralmente é para dizer que o recurso não existe 
        });
    }
// indice === -1 Significa que o site não foi encontrado  
    sites.splice(indice, 1); 
// splice remove um elemento do array splice no ingles é tipo corte 
    res.json({
        mensagem: "Site excluído com sucesso"
    });
});

app.put("/sites/:id", (req, res) => {
    const id = Number(req.params.id);
// app.put cria a rota de atualização
// req params id identifica qual site será editado
    const site = sites.find((item) => item.id === id);
//find proocura o site pelo ID
    if(!site) {
        return res.status(404).json({
            mensagem: "Site não encontrado"
        })
    }
//if (!site) verifica se ele existe

    site.nome = req.body.nome;
    site.url = req.body.url; 
// site.nome e url atualiza para os novos valores  observe que não utilizamos o push pq
// pq já existe no array 
    res.json({
        mensagem: "Site atualizado com sucesso", 
        site
    })
})

//app.get("/") Define uma rota para a requisições GET 
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});

//app.listen inicia o servidor na porta 3000