/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a,b) {
      this.a = a;
      this.b = b;
      this.getSum=function(){
        return this.a + this.b;
      }
      this.getSubtraction=function(){
        return this.a-this.b;
      }
      this.getMultiplication= function(){
        return this.a*this.b;
      }
      this.getDivision = function(){
        return this.a/this.b;
      }
    };
  
  