import { render, screen } from '@testing-library/react';
import { NewCard } from './';

describe('<NewCard />', () => {
  it('should display elements', () => {
    render(<NewCard onHandleAddCard={() => {}}/>);
    
    expect(screen.getByTestId('new-card')).toBeTruthy();
  });
});