import { render, fireEvent, screen, waitFor } from '@testing-library/react';
// import userEvent from "@testing-library/user-event"; // Using 'fireEvent' for simplicity
import App from './App';

// Jest configuration for timeout.
jest.setTimeout(10000);

// Success scenario.
test('Github API call and navigation', async () => {
  const loading = 'Loading...';
  const name = 'Martin Alexander Kretzschmar';
  render(<App />);

  fireEvent.change(screen.getByLabelText(/Search for a Github User/i), {
    target: {value: 'rhivia'},
  });
  fireEvent.click(screen.getByText(/OK/i));

  const loadingText = await screen.findByText(loading);

  expect(loadingText).toHaveTextContent("Loading...");

  // Using waitFor function to configure specific timeout of tests
  await waitFor(() => {
    screen.getByText(name)
  }, {
    timeout: 3000,
    interval: 3000,
  });

  expect(screen.getByText(name)).toHaveTextContent(name);
});

// User not found scenario.
test('User not found', async () => {
  const loading = 'Loading...';
  render(<App />);

  fireEvent.change(screen.getByLabelText(/Search for a Github User/i), {
    target: {value: 'rhiviaaewawawdawdawdwa'},
  });
  fireEvent.click(screen.getByText(/OK/i));

  const loadingText = await screen.findByText(loading);

  expect(loadingText).toBeInTheDocument();

  // Using findByText to find text that might not be visible
  const result = await screen.findByText('User not found!');

  expect(result).toHaveTextContent('User not found!');
});

// Test can fail as the API will only deny permission after many requests.
// test('Permission denied', async () => {
//   const loading = 'Loading...';
//   render(<App />);

//   fireEvent.change(screen.getByLabelText(/Search for a Github User/i), {
//     target: {value: 'rhivia'},
//   });
//   fireEvent.click(screen.getByText(/OK/i));

//   const loadingText = await screen.findByText(loading);

//   expect(loadingText).toBeInTheDocument();

//   const result = await screen.findByText('Permission denied!');

//   expect(result).toHaveTextContent('Permission denied!');
// });
