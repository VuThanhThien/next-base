import { zodResolver } from '@hookform/resolvers/zod'
import { Box, BoxProps, CircularProgress, Typography, useTheme } from '@mui/material'
import React, { useEffect, useImperativeHandle, useState } from 'react'
import {
  FieldArrayPath,
  FieldError,
  FieldValues,
  FormProvider,
  UseControllerProps,
  UseFieldArrayReturn,
  UseFormProps,
  UseFormRegisterReturn,
  UseFormReturn,
  useFieldArray,
  useForm,
} from 'react-hook-form'
import { ZodType, ZodTypeDef } from 'zod'
import { FieldWrapperBoxProps } from './FieldWrapper'

export type FieldRegistrationWithHookFormProps<T> = Omit<T, 'error' | 'label'> & {
  registration?: Partial<UseFormRegisterReturn>
  label?: string
  error?: FieldError
  placeholder?: string
}

export type FieldForm<T> = FieldRegistrationWithHookFormProps<T> & FieldWrapperBoxProps

export type ControllerFieldForm<T> = FieldRegistrationWithHookFormProps<T> & FieldWrapperBoxProps & UseControllerProps

export type FormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: (dataForm: TFormValues, methods: UseFormReturn<TFormValues>) => void
  children: (
    methods: UseFormReturn<TFormValues>,
    fieldArrayMethods: UseFieldArrayReturn<TFormValues>,
  ) => React.ReactNode
  serverError?: string
  options?: UseFormProps<TFormValues>
  schema?: Schema
  boxProps?: BoxProps
  isLoading?: boolean
  fieldArrayName?: FieldArrayPath<TFormValues>
}

type ServerErrorMessageProps = {
  error?: string
  isValidating: boolean
}

export const ServerErrorMessage = (props: ServerErrorMessageProps) => {
  const { error, isValidating } = props
  const [errMsg, setErrMsg] = useState(error)
  const theme = useTheme()

  useEffect(() => {
    if (isValidating) {
      setErrMsg(undefined)
    }
  }, [isValidating])

  useEffect(() => {
    setErrMsg(error)
  }, [error])

  return !!errMsg ? (
    <Box>
      <Typography whiteSpace="pre-line" variant="h6" component="p" mb={2} color={theme.palette.warning.main}>
        {errMsg}
      </Typography>
    </Box>
  ) : null
}

export type RefForm<TFormValues extends Record<string, unknown> = Record<string, unknown>> = {
  methods: UseFormReturn<TFormValues>
}

const FormCommon = React.forwardRef(
  <
    TFormValues extends Record<string, unknown> = Record<string, unknown>,
    Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>,
  >(
    props: FormProps<TFormValues, Schema>,
    ref?: React.ForwardedRef<RefForm<TFormValues>>,
  ) => {
    const {
      onSubmit,
      children,
      options,
      schema,
      boxProps,
      serverError = undefined,
      isLoading = false,
      fieldArrayName = '' as FieldArrayPath<TFormValues>,
    } = props

    const methods = useForm<TFormValues>({
      ...options,
      resolver: schema && zodResolver(schema),
    })

    const fieldArrayMethods = useFieldArray<TFormValues>({
      control: methods.control,
      name: fieldArrayName,
    })

    const handleSubmit = (dataForm: TFormValues) => {
      onSubmit(dataForm, methods)
    }

    useImperativeHandle(
      ref,
      () => ({
        methods,
      }),
      [methods],
    )

    if (isLoading)
      return (
        <Box width={'100%'} height={'20rem'} display="flex" justifyContent={'center'} alignItems="center">
          <CircularProgress />
        </Box>
      )

    return (
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(handleSubmit)} {...boxProps}>
          {serverError && <ServerErrorMessage error={serverError} isValidating={methods.formState.isValidating} />}

          {children(methods, fieldArrayMethods)}
        </Box>
      </FormProvider>
    )
  },
)

export const Form = FormCommon as unknown as <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>,
>(
  props: FormProps<TFormValues, Schema> & {
    ref?: React.ForwardedRef<RefForm<TFormValues>>
  },
) => ReturnType<typeof FormCommon>
