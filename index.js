
function calcular() {
  var valorVacina = Number(ipt_valor.value)
  var qtdPerdaVacinas  = Number(ipt_qtd.value)

  var perdaDiaria = qtdPerdaVacinas / 365

  var perdaDiaria = valorVacina * perdaDiaria
  var perdaAnual = perdaDiaria * 365

  h2_resultado.innerHTML = `Valor perdido por ano sem a nossa solução: R$${perdaAnual.toFixed(2)}`

  // 85% do valor da perda anual, ou seja, 15% de economia
  var valorComSolucao = perdaAnual * .85
  
  h2_resultado.innerHTML += `<br/>: R$${valorComSolucao.toFixed(2)}.`

}
