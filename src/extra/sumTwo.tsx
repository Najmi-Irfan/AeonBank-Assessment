import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styled from 'styled-components'

const codeString = `
function twoSum(numbers, target) {
    let firstIndex = 0;
    let secondIndex = numbers.length - 1;

    while (1 <= firstIndex < secondIndex < numbers.length) {
        const total = numbers[firstIndex] + numbers[secondIndex];
        if (total === target) {
            return [firstIndex + 1, secondIndex + 1];
        } else if (total < target) {
            // Since total sum not large enough, will move forward in index and find new sum
            firstIndex++;
        } else {
            // Since the total sum is too large, will move backward in index and find new sum
            secondIndex--;
        }
    }
    // in case the condition not met will return empty array
    return [];
}

console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));
`

// Run code online on https://www.programiz.com/javascript/online-compiler/
export const SumViewComponent = () => {
  return (
    <Container>
      <h3>Two Sum II - Input Array Is Sorted</h3>
      <SyntaxWrapper>
        <SyntaxHighlighter language='javascript' style={solarizedlight}>
          {codeString}
        </SyntaxHighlighter>
      </SyntaxWrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`
const SyntaxWrapper = styled.div`
font-size: 15px;
`
