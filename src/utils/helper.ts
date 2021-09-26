export const convertMLtoL = (ml : number) : number => {
    return Number((ml/1000).toFixed(2)) ;
  }

  export const convertToPercentage = (partialValue : number , totalValue : number) : number => {
    return  Number(((100 * partialValue) / totalValue).toFixed(2));
}