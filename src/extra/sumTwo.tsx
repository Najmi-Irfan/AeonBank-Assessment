import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeString = `
function twoSum(numbers, target) {
    let firstIndex = 0;
    let secondIndex = numbers.length - 1;

    while (1 <= firstIndex < secondIndex < numbers.length) {
        const total = numbers[firstIndex] + numbers[secondIndex];
        if (total === target) {
            return [firstIndex + 1, secondIndex + 1];
        } else if (total < target) {
            firstIndex++;
        } else {
            secondIndex--;
        }
    }
    return [];
}

console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));
`

// Run code online on https://www.programiz.com/javascript/online-compiler/
export const SumViewComponent = () => {
  return (
    <div style={{ maxHeight: '100%', maxWidth: '100%' }}>
      <h3>Two Sum II - Input Array Is Sorted</h3>
      <div style={{ fontSize: '16px' }}>
        <SyntaxHighlighter language='javascript' style={solarizedlight}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
