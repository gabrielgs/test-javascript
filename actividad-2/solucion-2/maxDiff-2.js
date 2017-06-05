var arr = [200, 50, 67, 89, 32, 13, 4, 5];

// Funcion que retorna la diferencia mayor en el arreglo
function getMaxDiff(numbers) {
  var maxNum = getMax(numbers); // Llamar a la funcion getMax()
  var minNum = getMin(numbers); // Llamar a la funcion getMin()

  return maxNum - minNum;
}

//Funcion que retorna el numero mayor del arreglo
function getMax(numbers) {
  var max = numbers[0];

  for (var i = 0; i < numbers.length; i++) {
    if( max < numbers[i] ) {
      max = numbers[i]
    }
  }

  return max;
}

//Funcion que retorna el numero menor del arreglo
function getMin(numbers) {
  var min = numbers[0];

  for (var i = 0; i < numbers.length; i++) {
    if( min > numbers[i] ) {
      min = numbers[i]
    }
  }

  return min;
}

console.log(getMaxDiff(arr));
