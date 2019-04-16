function calcul(){
  let nbr1 = +document.getElementById('nombre1').value;
  let nbr2 = +document.getElementById('nombre2').value;
  let result = nbr1 + nbr2;
  if(isNaN(nbr1) || isNaN(nbr2)){
    alert('Ah-ah-ah ! Vous navez pas mis de nombres !');
  }
  else {
    alert(`Le résultat de l'addition est ${result}`);
  }
}
