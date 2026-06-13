// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockSupra title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockSupra/i);
    expect(titleElement).toBeInTheDocument();
});
