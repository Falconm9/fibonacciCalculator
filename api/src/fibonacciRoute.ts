import express from "express";
const router = express.Router();

function getFibonacciValue(value: number){
  if (value < 0) {
    return -1;
  }else if (value === 0){
    return 0;
  } else if ( value === 1 || value === 2 ){
    return 1;
  } else {
    const fibonacciNumber: number = getFibonacciValue(value - 1) + getFibonacciValue(value - 2);
    return fibonacciNumber;
  }
  
}
router.get("/:numberToCalculate", (req, res) => {
    const numberToCalculate: number =  Number(req.params.numberToCalculate);
    console.log("calculate fibonacci number of", numberToCalculate)
    let reponseFibonacci = getFibonacciValue(numberToCalculate);
    console.log("result", reponseFibonacci)
    res.json({
      fibonacciNumber: reponseFibonacci
    });
});

module.exports = router;