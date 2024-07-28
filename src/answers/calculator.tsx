import { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { devices } from '../constant/device'

interface calculatorForm {
  firstNumber: number
  secondNumber: number
}

export const CalculatorComponent = () => {
  const [totalSum, setTotalSum] = useState<number>(0)
  const form = useForm<calculatorForm>()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = form

  function onSubmit (form: calculatorForm) {
    setTotalSum(form.firstNumber + form.secondNumber)
  }

  return (
    <CalculatorSection>
      <CalculatorContainer>
        <Card>
          <Card.Body>
            <Card.Title>Adding Two Numbers</Card.Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <FormContainer>
                  <Form.Group controlId='firstNumber'>
                    <Form.Control
                      type='number'
                      placeholder='First Number'
                      {...register('firstNumber', {
                        valueAsNumber: true,
                        required: 'First Number is required'
                      })}
                    />
                    {errors.firstNumber && (
                      <Form.Text className='text-danger'>
                        {errors.firstNumber.message}
                      </Form.Text>
                    )}
                  </Form.Group>
                </FormContainer>

                <FormContainer>
                  <Form.Group controlId='secondNumber'>
                    <Form.Control
                      type='number'
                      placeholder='Second Number'
                      {...register('secondNumber', {
                        valueAsNumber: true,
                        required: 'Second Number is required'
                      })}
                    />
                    {errors.secondNumber && (
                      <Form.Text className='text-danger'>
                        {errors.secondNumber.message}
                      </Form.Text>
                    )}
                  </Form.Group>
                </FormContainer>

                <Button type='submit'>Add Two Numbers</Button>
                <div>Total: {totalSum}</div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </CalculatorContainer>
    </CalculatorSection>
  )
}

const FormContainer = styled.div`
  padding: 15px 10px;
`

const CalculatorContainer = styled.div`
  height: 100%;
  padding: 0px 10px;

  @media only screen and ${devices.xs} {
    width: 100%;
  }

  @media only screen and ${devices.md} {
    width: 50%;
  }
`

const CalculatorSection = styled.section`
  text-align: -webkit-center;
  height: 100%;
  margin-top: 20px;
`
