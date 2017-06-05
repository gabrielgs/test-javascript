// Función para comprobar si los rectangulos se intersecan o no
function intersecRecr(r1, r2) {
   /*** Rectangulo 1 ***/
  var x1 = r1.x; // Valor de x
  // Valor del vertice superior derecho que se calcula
  // sumando el valor de x mas el ancho
  var vsd1 = r1.x + r1.width;
  // Valor del vertice inferior izquierdo
  // que se calcula sumando el valor de y mas el alto
  var vii1 = r1.y + r1.height;
  var y1 = r1.y; // Valor de y

  /*** Rectangulo 2 ***/
  var x2 = r2.x;
  var vsd2 = r2.x + r2.width;
  var vii2 = r2.y + r2.height;
  var y2 = r2.y

  // Para saber si dos rectangulos se intersecan se deben
  // cumplir cuatro condiciones y todas tienen que ser true.
  /*
  1. El vertice superior derecho del rectangulo 1 tiene que ser mayor
     o igual al punto x del rectangulo 2.
  2. El valor en x del rectangulo 1 tiene que ser menor o igual al vertice
     superior derecho del rectangulo 2.
  3. El vertice inferior izquierdo del rectangulo 1 tiene que ser mayor o igual
     al valor en y del rectangulo 2.
  4. El valor en y del rectangulo 1 tiene que ser menor o igual
     el vertice inferior izquierdo del rectangulo 2.
  */
  return (vsd1 >= x2 &&
          x1 <= vsd2 &&
          vii1 >= y2 &&
          y1 <= vii2);
}