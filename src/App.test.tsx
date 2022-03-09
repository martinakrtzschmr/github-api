import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';

test('Test Github API call and navigation', () => {
  const name = 'Martin Alexander Kretzschmar';
  render(<App />);

  fireEvent.change(screen.getByLabelText(/Search for a Github User:/i), {
    target: {value: 'rhivia'},
  });
  fireEvent.click(screen.getByText(/OK/i));

  waitFor(() => expect(screen.getByText(name)).toBeInTheDocument(), { interval: 10000 });
});
