import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SaveTexts from '../components/SaveTexts';

describe('SaveTexts Component', () => {
  it('renders without crashing', () => {
    render(<SaveTexts />);
    // Check if the component renders without crashing
    expect(screen.getByText('Save you')).toBeInTheDocument();
  });

  it('handles user input correctly', () => {
    render(<SaveTexts />);

    // Simulate user input in the text area and header input
    userEvent.type(screen.getByPlaceholderText('Text heading'), 'Test Heading');
    userEvent.type(screen.getByPlaceholderText('Type your text here...'), 'Test Text');

    // Check if the input values are updated correctly
    expect(screen.getByPlaceholderText('Text heading')).toHaveValue('Test Heading');
    expect(screen.getByPlaceholderText('Type your text here...')).toHaveValue('Test Text');
  });

  it('handles emoji click correctly', () => {
    render(<SaveTexts />);

    // Simulate user clicking on the emoji
    userEvent.click(screen.getByAltText('Picture of emoji'));

    // Check if the emoji picker is displayed
    expect(screen.getByTestId('emoji-picker')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
