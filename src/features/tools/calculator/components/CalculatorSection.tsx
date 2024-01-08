import { useGetCurrencyRate } from '@/features/tools/calculator/api/useGetCurrencyRate'
import { CalculatorForm, CalculatorInputsFormType } from '@/features/tools/calculator/components/CalculatorForm'
import { FC, useEffect, useMemo, useState } from 'react'
import { CalculatorResult } from './CalculatorResult'

type Props = {}

export const CalculatorSection: FC<Props> = () => {
  const [inputs, setInputs] = useState<CalculatorInputsFormType | undefined>()
  const [isRecalculate, setIsReCalculate] = useState(false)
  const [showingInputs, setShowingInputs] = useState<CalculatorInputsFormType | undefined>()
  const { data } = useGetCurrencyRate()
  let currenciesRate = useMemo(() => {
    if (!data) {
      return {
        VND: 1,
        USD: 0.00004232,
        EUR: 0.00003888,
        SGD: 0.00005714,
      }
    }
    return data
  }, [data])
  console.log(currenciesRate)

  useEffect(() => {
    !isRecalculate && setShowingInputs(inputs)
  }, [isRecalculate, inputs])
  return (
    <>
      <CalculatorForm onSubmit={setInputs} setIsReCalculate={setIsReCalculate} />
      {showingInputs && (
        <CalculatorResult
          currenciesRate={currenciesRate}
          inputs={showingInputs}
          onReCalculate={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setInputs(undefined)
            setIsReCalculate(true)
          }}
        />
      )}
    </>
  )
}
