let height = document.getElementById("height");
let weight = document.getElementById("weight");




// ( weight / (height x height))


function imc(event){

    event.preventDefault()

    let altura = height;
    let peso = weight;

    console.log(altura.value);
    console.log(peso.value);

    // const resultado = (peso.value / (altura.value * altura.value)).toFixed(1);
    var resultado = (weight.value / ((height.value * height.value) / 10000)).toFixed(2);
    console.log(resultado);

    if(resultado < 17){
        document.querySelector("#under17").classList.add("under17active");

        document.getElementById('under18').classList.remove("under18active");
        document.getElementById('under25').classList.remove("under25active");
        document.getElementById('under30').classList.remove("under30active");
        document.getElementById('under35').classList.remove("under35active");
        document.getElementById('under40').classList.remove("under40active");
        document.getElementById('above40').classList.remove("above40active");
    } else if ( resultado >= 17 && resultado <= 18.49){
        document.querySelector("#under18").classList.add("under18active");

        document.getElementById('under17').classList.remove("under17active");
        document.getElementById('under25').classList.remove("under25active");
        document.getElementById('under30').classList.remove("under30active");
        document.getElementById('under35').classList.remove("under35active");
        document.getElementById('under40').classList.remove("under40active");
        document.getElementById('above40').classList.remove("above40active");
    } else if (resultado >= 18.5 && resultado <= 24.99){
        document.querySelector("#under25").classList.add("under25active");

        document.getElementById('under17').classList.remove("under17active");
        document.getElementById('under18').classList.remove("under18active");
        document.getElementById('under30').classList.remove("under30active");
        document.getElementById('under35').classList.remove("under35active");
        document.getElementById('under40').classList.remove("under40active");
        document.getElementById('above40').classList.remove("above40active");
    } else if (resultado >= 25 && resultado <= 29.99){
        document.querySelector("#under30").classList.add("under30active");

        document.getElementById('under17').classList.remove("under17active");
        document.getElementById('under18').classList.remove("under18active");
        document.getElementById('under25').classList.remove("under25active");
        document.getElementById('under35').classList.remove("under35active");
        document.getElementById('under40').classList.remove("under40active");
        document.getElementById('above40').classList.remove("above40active");
    } else if (resultado >= 30 && resultado <= 34.99){
        document.querySelector("#under35").classList.add("under35active");

        document.getElementById('under17').classList.remove("under17active");
        document.getElementById('under18').classList.remove("under18active");
        document.getElementById('under25').classList.remove("under25active");
        document.getElementById('under30').classList.remove("under30active");
        document.getElementById('under40').classList.remove("under40active");
        document.getElementById('above40').classList.remove("above40active");
    } else if (resultado >= 35 && resultado <= 39.99){
        document.querySelector("#under40").classList.add("under40active");

        document.getElementById('under17').classList.remove("under17active");
        document.getElementById('under18').classList.remove("under18active");
        document.getElementById('under25').classList.remove("under25active");
        document.getElementById('under30').classList.remove("under30active");
        document.getElementById('under35').classList.remove("under35active");
        document.getElementById('above40').classList.remove("above40active");
    } else if(resultado > 39.99){
        document.querySelector("#above40").classList.add("above40active");

        document.getElementById('under17').classList.remove("under17active");
        document.getElementById('under18').classList.remove("under18active");
        document.getElementById('under25').classList.remove("under25active");
        document.getElementById('under30').classList.remove("under30active");
        document.getElementById('under35').classList.remove("under35active");
        document.getElementById('under40').classList.remove("under40active");
    } else if(altura.value == 0 || peso.value == 0){

            document.querySelector("#error--alert").classList.remove("hidden--elements");
            document.getElementById('hidden-result').classList.add("resultado-hidden");
    
            setTimeout(function(){
    
                var a = document.getElementById("error--alert");
                
                a.classList.add("hidden--elements");
                
                
                }, 3000);
    }

}


document.getElementById('event').addEventListener("click", function() {
    
    var resultado = (weight.value / ((height.value * height.value) / 10000)).toFixed(2);

    


    if(resultado < 17){
        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC ?? ${resultado} . Seu peso est?? abaixo da faixa considerada normal.
         ?? poss??vel que seu biotipo seja do tipo longil??neo e, nesse caso, seu percentual de gordura corporal
          pode estar normal. Em todo caso, procure um nutricionista para uma orienta????o mais espec??fica.`
    } else if ( resultado >= 17 && resultado <= 18.49){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC ?? ${resultado} . Seu peso est?? abaixo da faixa considerada normal.
         ?? poss??vel que seu biotipo seja do tipo longil??neo e, nesse caso, seu percentual de gordura corporal
          pode estar normal. Em todo caso, procure um nutricionista para uma orienta????o mais espec??fica.`
    } else if (resultado >= 18.5 && resultado <= 24.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC ?? ${resultado} .Seu peso est?? dentro da faixa considerada normal. 
        Normalmente, isto corresponde ??s mais baixas taxas de mortalidade em rela????o ao peso. Se voc??
         n??o sofre de diabetes, hipertens??o arterial ou excesso de colesterol e triglic??rides e ainda 
         assim deseja emagrecer, provavelmente o motivo ?? de ordem est??tica. Cuidado, portanto, para n??o
          submeter-se ?? riscos desnecess??rios.`
    } else if (resultado >= 25 && resultado <= 29.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");


        result.innerHTML = `Seu IMC ?? ${resultado} .Voc?? est?? na faixa chamada de ???excesso de peso???. 
        Como sua medida de cintura est?? acima dos 90 cent??metros, provavelmente voc?? est?? acumulando 
        um excesso de tecido adiposo no interior do abd??men. Este tecido adiposo, chamado de gordura visceral,
         ?? o que mais acarreta riscos para a sa??de. Portanto voc?? se situa em um grupo de maior probabilidade de 
         complica????es como diabetes, hipertens??o arterial e hipercolesterolemia.`
    } else if (resultado >= 30 && resultado <= 34.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC ?? ${resultado} .Voc?? est?? na faixa chamada de obesidade leve. Voc?? se situa,
         portanto, em um grupo de maior probabilidade de complica????es como diabetes, hipertens??o arterial e
          hipercolesterolemia. Mesmo perdas moderadas, como 10% do seu peso atual, podem reduzir significativamente 
          seu risco de complica????es metab??licas.`
    } else if (resultado >= 35 && resultado <= 39.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC ?? ${resultado} .Voc?? est?? na faixa chamada de obesidade moderada. Seu excesso de 
        peso j?? pode estar provocando um risco muito elevado de complica????es metab??licas, como diabetes, hipertens??o
         arterial e hipercolesterolemia, al??m de predispor a doen??as osteoarticulares diversas. Procure logo seu m??dico 
         e inicie um tratamento s??rio para emagrecer. Mesmo perdas moderadas, como 10% do seu peso atual, podem reduzir
          significativamente seu risco de complica????es metab??licas. Se voc?? n??o conseguir emagrecer com uma orienta????o
           adequada sobre modifica????es diet??ticas e pr??tica de atividades f??sicas, justifica-se o uso de medicamentos,
            desde que devidamente supervisionado por um m??dico ou nutricionista, e mesmo a cirurgia bari??trica.`
    } else if(resultado > 39.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC ?? ${resultado} .Voc?? est?? na faixa chamada de obesidade m??rbida. Ela corresponde a um
         risco muito aumentado de diversas doen??as. Seu tratamento, em geral, ?? muito dif??cil, mas assim mesmo qualquer esfor??o
          ?? v??lido. Mesmo perdas moderadas, como 10% do seu peso atual, podem reduzir significativamente seu risco de complica????es
           metab??licas. Se voc?? n??o conseguir emagrecer com uma orienta????o adequada sobre modifica????es diet??ticas e pr??tica de
            atividades f??sicas, justifica-se o uso de medicamentos, desde que devidamente supervisionado por um m??dico. Se ainda
             assim n??o for obtido um resultado satisfat??rio, a tend??ncia atual ?? indicar-se um tipo de cirurgia em que a cavidade
              do est??mago ?? reduzida para que diminua a ingest??o de alimentos. Agenda uma consulta conosco para maiores informa????es.`
    }

  });


