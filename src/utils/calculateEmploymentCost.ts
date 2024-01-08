export function calculateEmploymentCost(grossSalary: number, currency: string, rate: number) {
  const isVND = currency === 'VND'
  const isMaxInsuranceRate = grossSalary > 29800000
  const socialInsurance = isMaxInsuranceRate ? 5066000 : (grossSalary * 0.17).toFixed(0)
  const healthInsurance = isMaxInsuranceRate ? 894000 : (grossSalary * 0.03).toFixed(0)
  const accidentInsurance = isMaxInsuranceRate ? 149000 : (grossSalary * 0.005).toFixed(0)
  const unemploymentInsurance = grossSalary > 93600000 ? 936000 : (grossSalary * 0.01).toFixed(0)

  const totalCost =
    Number(grossSalary) +
    Number(socialInsurance) +
    Number(healthInsurance) +
    Number(accidentInsurance) +
    Number(unemploymentInsurance)

  return {
    totalCost: isVND ? totalCost : (totalCost * rate).toFixed(0),
    socialInsurance: isVND ? socialInsurance : (Number(socialInsurance) * rate).toFixed(0),
    healthInsurance: isVND ? healthInsurance : (Number(healthInsurance) * rate).toFixed(0),
    accidentInsurance: isVND ? accidentInsurance : (Number(accidentInsurance) * rate).toFixed(0),
    unemploymentInsurance: isVND ? unemploymentInsurance : (Number(unemploymentInsurance) * rate).toFixed(0),
  }
}
