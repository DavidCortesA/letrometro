import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Letrometro from '@/components/Letrometro';

describe('Letrometro', () => {
  it('Renderiza correctamente', () => {
    render(<Letrometro />);
    const inputElement = screen.getByPlaceholderText('Escribe tu texto...(o pega tu texto)')
    fireEvent.change(inputElement, { target: { value: 'Hola Mundo' } });
    const characters = screen.getByText('Total de Caracteres');
    const words = screen.getByText('Total de Palabras');
    const sentences = screen.getByText('Total de Frases');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.innerHTML).toBe('Hola Mundo');
    expect(characters).toBeInTheDocument();
    expect(words).toBeInTheDocument();
    expect(sentences).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
})