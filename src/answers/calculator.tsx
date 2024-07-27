import { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

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
    <section style={{ height: '100%', marginTop: '20px' }}>
      <Container style={{ height: '100%', alignContent: 'center' }}>
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
      </Container>
    </section>
  )
}

const FormContainer = styled.div`
  padding: 15px 10px;
`
