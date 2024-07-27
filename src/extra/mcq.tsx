import { ListGroup } from 'react-bootstrap'

export const MCQComponent = () => {
  return (
    <>
      <h2>MCQ Answer</h2>
      <ListGroup as='ol' numbered>
        {answerList.length > 0 &&
          answerList.map(list => {
            return <ListGroup.Item as='li'>{`(${list.answer})`}</ListGroup.Item>
          })}
      </ListGroup>
    </>
  )
}

const answerList = [
  {
    id: 0,
    answer: 'a'
  },
  {
    id: 1,
    answer: 'c'
  },
  {
    id: 2,
    answer: 'c'
  },
  {
    id: 3,
    answer: 'b'
  },
  {
    id: 4,
    answer: 'c'
  },
  {
    id: 5,
    answer: 'd'
  },
  {
    id: 6,
    answer: 'b'
  },
  {
    id: 7,
    answer: 'c'
  },
  {
    id: 8,
    answer: 'a'
  },
  {
    id: 9,
    answer: 'a'
  },
  {
    id: 10,
    answer: 'd'
  },
  {
    id: 11,
    answer: 'b'
  }
]
