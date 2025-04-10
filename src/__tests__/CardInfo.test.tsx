import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardInfo } from '@/components/Card';

describe('CardInfo', () => {
  
  it('Muestra el título y el número con formato', () => {
    render (<CardInfo title="Prueba" date={5} bgcolor="bg-blue-500" />)

    expect(screen.getByText('05')).toBeInTheDocument();
    expect(screen.getByText('Prueba')).toBeInTheDocument();
  })
})