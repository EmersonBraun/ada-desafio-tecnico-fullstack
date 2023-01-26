import { render, screen } from '@testing-library/react';
import { List } from './';

describe('<List />', () => {
  it('should display elements', () => {
    render(<List status="any">test</List>);
    
    expect(screen.getByTestId('list')).toBeTruthy();
  });
});