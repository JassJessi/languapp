let perguntas = [
    
{
    titulo: 'Gato',
    alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
    correta: 1
},

{
    titulo: 'Fire',
    alternativas: ['Fogo', 'Água', 'Terra', 'Ar'],
    correta: 0
},

{
    titulo: 'Bird',
    alternativas: ['Gato', 'Ururbu', 'Pombo', 'Passaro'],
    correta: 3
}

]

let app = {
//Transformando a função em metódo
start: function(){

    this.Atualpos = 0;
    this.Totalpontos = 0;

    let alts = document.querySelectorAll('.alternativa');
    alts.forEach((element,index)=>{
        element.addEventListener('click', ()=>{
            this.checaResposta(index);        
        })
    })
    this.atualizaPontos();
    app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
    this.qatual = q;
    //mostrando o titulo
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
    //mostrando as alternativas
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
        })

},

Proximaperg: function(){
    this.Atualpos++;
    if(this.Atualpos == perguntas.length){
        this.Atualpos = 0;
    }
},

checaResposta: function(user){
    if(this.qatual.correta == user){
        console.log("Correta")
        this.Totalpontos++;
    }
    else{
        console.log("Errada")
    }
    this.atualizaPontos();
    this.Proximaperg();
    this.mostraquestao(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
} 

}


app.start();



/* Ouvinte de eventos: Avisa que o usuário clicou em algum lugar da tela

let btn = document.getElementById('btn');
btn.addEventListener('click',function() {
    console.log("O cara clicou ali oh!");
})
*/

