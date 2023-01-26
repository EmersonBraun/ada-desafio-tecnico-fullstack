import { render, screen } from '@testing-library/react';
import { Input } from './';

describe('<Input />', () => {
  it('should display elements', () => {
    const props = {
      type: 'text',
      placeholder: 'test',
      onChange: () => {},
      value: 'test',
    }
    render(<Input {...props}/>);
    
    expect(screen.getByTestId('input')).toBeTruthy();
  });
});