
function calcular() {
  var tipoVacina = sel_tipo_vacina.value
  var qtdTotalVacinas = Number(ipt_total_vacinas.value)
  var valorVacina = Number(ipt_valor_vacinas.value)

  // Sem a VacSense
  // Porcentagem média de perda de vacinas por dia;
  var porcentagemPerdaVacinas = 45

  // 45% do total de vacinas;
  var qtdPerdaVacina = qtdTotalVacinas * (porcentagemPerdaVacinas / 100)
  
  // Quantidade em reais do prejuizo causado pela perda das vacinas em um mês;
  var prejuizoReaisVacinaMes = qtdPerdaVacina * valorVacina

  // Quantidade em reais do prejuizo caudado pela perda das vacnias em um ano;
  var prejuizoReaisAno = prejuizoReaisVacinaMes * 12

  // Com a VacSense
  // Porcentagem média de vacinas poupadas com o VacSense;
  var porcentagemVacinasPoupadas = 75

  // Quantidade de vacinas poupadas com o VacSense;
  var vacinasPoupadas = qtdPerdaVacina * (porcentagemVacinasPoupadas / 100)

  // Quantidade em reais do quanto é poupado com o VacSense em um mês;
  var qtdReaisPoupadosMes = valorVacina * vacinasPoupadas

  // Quantidade em reais do quanto é poupado com o VacSense em um ano;
  var qtdReaisPoupadosAno = qtdReaisPoupadosMes * 12

  // if(!tipoVacina || !qtdTotalVacinas || !valorVacina) {
  //   alert('Insira todos os campos para continuar')
  //   return
  // }

  var validado = true
  if(!tipoVacina) validado = false
  if(!qtdTotalVacinas) validado = false
  if(!valorVacina) validado = false

  if(validado) {
    resultado.style.display = 'block'

    resultado.innerHTML = `
      tipo de vacina - ${tipoVacina}<br>
      total de vacina - ${qtdTotalVacinas.toLocaleString('pt-BR')}<br>
      valor da vacina - ${valorVacina.toLocaleString('pt-BR')}<br><br>
    ` + resultado.innerHTML

    sem_vacsense.innerHTML = `
      Sem VacSense ❌💉<br>
      vacinas perdidas - ${qtdPerdaVacina.toLocaleString('pt-BR')}<br><br>
      
      prejuízo p/mês - R$${prejuizoReaisVacinaMes.toLocaleString('pt-BR')}<br>
      prejuízo p/ano - R$${prejuizoReaisAno.toLocaleString('pt-BR')}
    `
    
    com_vacsense.innerHTML = `
      Com VacSense ✅💉<br>
      vacinas poupadas - ${vacinasPoupadas.toLocaleString('pt-BR')} <br><br>
      
      economia p/mês - R$${qtdReaisPoupadosMes.toLocaleString('pt-BR')} <br>
      economia p/ano - R$${qtdReaisPoupadosAno.toLocaleString('pt-BR')}
    `
  } else {
    alert('Insira todos os campos.')
  }

}
