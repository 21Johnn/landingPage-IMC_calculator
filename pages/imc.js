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

        result.innerHTML = `Seu IMC é ${resultado} . Seu peso está abaixo da faixa considerada normal.
         É possível que seu biotipo seja do tipo longilíneo e, nesse caso, seu percentual de gordura corporal
          pode estar normal. Em todo caso, procure um nutricionista para uma orientação mais específica.`
    } else if ( resultado >= 17 && resultado <= 18.49){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC é ${resultado} . Seu peso está abaixo da faixa considerada normal.
         É possível que seu biotipo seja do tipo longilíneo e, nesse caso, seu percentual de gordura corporal
          pode estar normal. Em todo caso, procure um nutricionista para uma orientação mais específica.`
    } else if (resultado >= 18.5 && resultado <= 24.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC é ${resultado} .Seu peso está dentro da faixa considerada normal. 
        Normalmente, isto corresponde às mais baixas taxas de mortalidade em relação ao peso. Se você
         não sofre de diabetes, hipertensão arterial ou excesso de colesterol e triglicérides e ainda 
         assim deseja emagrecer, provavelmente o motivo é de ordem estética. Cuidado, portanto, para não
          submeter-se à riscos desnecessários.`
    } else if (resultado >= 25 && resultado <= 29.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");


        result.innerHTML = `Seu IMC é ${resultado} .Você está na faixa chamada de “excesso de peso”. 
        Como sua medida de cintura está acima dos 90 centímetros, provavelmente você está acumulando 
        um excesso de tecido adiposo no interior do abdômen. Este tecido adiposo, chamado de gordura visceral,
         é o que mais acarreta riscos para a saúde. Portanto você se situa em um grupo de maior probabilidade de 
         complicações como diabetes, hipertensão arterial e hipercolesterolemia.`
    } else if (resultado >= 30 && resultado <= 34.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC é ${resultado} .Você está na faixa chamada de obesidade leve. Você se situa,
         portanto, em um grupo de maior probabilidade de complicações como diabetes, hipertensão arterial e
          hipercolesterolemia. Mesmo perdas moderadas, como 10% do seu peso atual, podem reduzir significativamente 
          seu risco de complicações metabólicas.`
    } else if (resultado >= 35 && resultado <= 39.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC é ${resultado} .Você está na faixa chamada de obesidade moderada. Seu excesso de 
        peso já pode estar provocando um risco muito elevado de complicações metabólicas, como diabetes, hipertensão
         arterial e hipercolesterolemia, além de predispor a doenças osteoarticulares diversas. Procure logo seu médico 
         e inicie um tratamento sério para emagrecer. Mesmo perdas moderadas, como 10% do seu peso atual, podem reduzir
          significativamente seu risco de complicações metabólicas. Se você não conseguir emagrecer com uma orientação
           adequada sobre modificações dietéticas e prática de atividades físicas, justifica-se o uso de medicamentos,
            desde que devidamente supervisionado por um médico ou nutricionista, e mesmo a cirurgia bariátrica.`
    } else if(resultado > 39.99){

        document.getElementById('hidden-result').classList.remove("resultado-hidden");
        document.getElementById('hidden-result').classList.add("resultado");

        result.innerHTML = `Seu IMC é ${resultado} .Você está na faixa chamada de obesidade mórbida. Ela corresponde a um
         risco muito aumentado de diversas doenças. Seu tratamento, em geral, é muito difícil, mas assim mesmo qualquer esforço
          é válido. Mesmo perdas moderadas, como 10% do seu peso atual, podem reduzir significativamente seu risco de complicações
           metabólicas. Se você não conseguir emagrecer com uma orientação adequada sobre modificações dietéticas e prática de
            atividades físicas, justifica-se o uso de medicamentos, desde que devidamente supervisionado por um médico. Se ainda
             assim não for obtido um resultado satisfatório, a tendência atual é indicar-se um tipo de cirurgia em que a cavidade
              do estômago é reduzida para que diminua a ingestão de alimentos. Agenda uma consulta conosco para maiores informações.`
    }

  });


