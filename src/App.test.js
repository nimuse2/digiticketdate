import { render, fireEvent } from '@testing-library/react';
import App from './App';

const setup = () => {
  const utils = render(<App />)
  const input = utils.getByLabelText('date-input')
  const cname = utils.getByText(/Digitickets/i)
  return {
    input,
    cname,
    ...utils,
  }
}

test('Company name on page', () => {
  const { cname } = setup()
  expect(cname).toBeInTheDocument();
})

test('Date is Imput', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '23/10/1999' } })
  expect(input.value).toBe('23/10/1999')
})




