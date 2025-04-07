import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header';

describe('Header Component', () => {
  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });

  it('shows navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Sobre nosotros')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });
});
