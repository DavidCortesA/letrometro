import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardInfo } from '@/components/Card';

describe('CardInfo', () => {
  
  it('Muestra el título y el número con formato', () => {
    render (<CardInfo title="Prueba" date={5} bgcolor="bg-blue-500" />)
    const title = screen.getByText('Prueba');
    const date = screen.getByText('05');

    expect(title).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  })
})