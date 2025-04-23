import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultDisplay from '@/components/ResultDisplay';

describe('ResultDisplay', () => {
  it('Muestra los resultados correctamente', () => {
    render (<ResultDisplay correct={4} incorrect={5} time={10.5} />)
    const results = screen.getByText('Resultados');
    const correct = screen.getByText('Correctas:');
    const incorrect = screen.getByText('Incorrectas:');
    const time = screen.getByText('Tiempo:');
    const accuracy = screen.getByText('Precisión:');
  
    expect(results).toBeInTheDocument();
    expect(correct).toBeInTheDocument();
    expect(incorrect).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(accuracy).toBeInTheDocument();
  });
})