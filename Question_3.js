/* QUESTION 3:- Write a function that takes three integer inputs and returns a single output. The inputs are the lengths of the sides of a triangle. The output is the area of that triangle. */

const triangle = (side1, side2, side3) => {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw 'Invalid Triangle exception';
    } else if (
      side1 + side2 <= side3 ||
      side1 + side3 <= side2 ||
      side2 + side3 <= side1
    ) {
      throw 'Invalid Triangle exception';
    } else {
      const p = (side1 + side2 + side3) / 2;
  
      const area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  
      console.log('Area of 3 sides of the trianlge is  = ', area);
    }
  };
  
  triangle(3, 4, 5);
  