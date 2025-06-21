import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    // You might want to check for specific text or elements that are always present in your App component
    // For example, if your App component always renders a header with "My App Title"
    // expect(screen.getByText(/My App Title/i)).toBeInTheDocument();
    // Check for an element that is always present in the App component's initial render, e.g., the header logo.
    expect(screen.getByRole('link', { name: /Edemy Logo/i })).toBeInTheDocument();
  });
});
