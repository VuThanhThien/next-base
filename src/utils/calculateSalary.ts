export const calculateNetSalary = (grossSalary: number, currency: string, rate: number) => {
  const socialInsuranceRate = 0.08 // 8% social insurance rate
  const healthInsuranceRate = 0.015 // 1.5% health insurance rate
  const unemploymentInsuranceRate = 0.01 // 1% unemployment insurance rate
  const insuranceMax = grossSalary > 29800000 ? 29800000 : grossSalary

  const socialInsurance = insuranceMax * socialInsuranceRate
  const healthInsurance = insuranceMax * healthInsuranceRate
  const unemploymentInsurance = grossSalary * unemploymentInsuranceRate

  const totalInsurance = socialInsurance + healthInsurance + unemploymentInsurance
  const taxableIncome = grossSalary - totalInsurance
  const personalIncomeTax = calculatePersonalIncomeTaxVND(taxableIncome)
  const netSalary = grossSalary - totalInsurance - personalIncomeTax

  return {
    calculatedSalary: netSalary * rate,
    socialInsurance: (socialInsurance * rate).toFixed(0),
    healthInsurance: (healthInsurance * rate).toFixed(0),
    unemploymentInsurance: (unemploymentInsurance * rate).toFixed(0),
    personalIncomeTax: (personalIncomeTax * rate).toFixed(0),
  }
}

function calculatePersonalIncomeTaxVND(income: number): number {
  let tax = 0
  let taxableIncome = income - 11000000

  if (taxableIncome <= 0) {
    tax = 0
  } else if (taxableIncome <= 5000000) {
    tax = taxableIncome * 0.05
  } else if (taxableIncome <= 10000000) {
    tax = 250000 + (taxableIncome - 5000000) * 0.1
  } else if (taxableIncome <= 18000000) {
    tax = 750000 + (taxableIncome - 10000000) * 0.15
  } else if (taxableIncome <= 32000000) {
    tax = 1950000 + (taxableIncome - 18000000) * 0.2
  } else if (taxableIncome <= 52000000) {
    tax = 4750000 + (taxableIncome - 32000000) * 0.25
  } else if (taxableIncome <= 80000000) {
    tax = 9750000 + (taxableIncome - 52000000) * 0.3
  } else {
    tax = 18150000 + (taxableIncome - 80000000) * 0.35
  }
  return tax
}

export const calculateGrossSalary = (netSalary: number, currency: string, rate: number) => {
  const taxableIncome = calculateTaxableIncome(netSalary)
  const beforeTaxIncome = netSalary > 10000000 ? 11000000 + taxableIncome : netSalary
  console.log(beforeTaxIncome)
  let grossSalary = 0
  if (netSalary > 25070350) {
    if (netSalary > 72033100) {
      grossSalary = beforeTaxIncome + 29800000 * 0.095 + 936000
    } else {
      grossSalary = Number(((beforeTaxIncome + 29800000 * 0.095) / 0.99).toFixed(0))
    }
  } else {
    grossSalary = beforeTaxIncome / 0.895
  }
  const res = calculateNetSalary(grossSalary, currency, rate)

  return {
    ...res,
    calculatedSalary: (grossSalary * rate).toFixed(0),
  }
}

function calculateTaxableIncome(netSalary: number) {
  const convertedSalary = netSalary - 11000000
  let taxableIncome = 0
  if (convertedSalary <= 0) {
    taxableIncome = 0
  } else if (convertedSalary <= 4750000) {
    taxableIncome = convertedSalary / 0.95
  } else if (4750000 < convertedSalary && convertedSalary <= 9250000) {
    taxableIncome = (convertedSalary - 250000) / 0.9
  } else if (9250000 < convertedSalary && convertedSalary <= 16050000) {
    taxableIncome = (convertedSalary - 750000) / 0.85
  } else if (16050000 < convertedSalary && convertedSalary <= 27250000) {
    taxableIncome = (convertedSalary - 1650000) / 0.8
  } else if (27250000 < convertedSalary && convertedSalary <= 42250000) {
    taxableIncome = (convertedSalary - 3250000) / 0.75
  } else if (42250000 < convertedSalary && convertedSalary <= 61850000) {
    taxableIncome = (convertedSalary - 5850000) / 0.7
  } else {
    taxableIncome = (convertedSalary - 9850000) / 0.65
  }
  console.log({ taxableIncome })

  return taxableIncome
}
