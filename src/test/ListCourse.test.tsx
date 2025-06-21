import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ListCourse from '../pages/ListCourse';
import { describe, it, expect } from 'vitest';

describe('ListCourse', () => {
  it('renders the main heading "Danh sách khóa học"', () => {
    render(
      <Router>
        <ListCourse />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Danh sách khóa học/i })).toBeInTheDocument();
  });

  it('renders the search input and button', () => {
    render(
      <Router>
        <ListCourse />
      </Router>
    );
    expect(screen.getByPlaceholderText(/Tìm kiếm khóa học/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Tìm kiếm/i })).toBeInTheDocument();
  });

  it('renders at least one course card', () => {
    render(
      <Router>
        <ListCourse />
      </Router>
    );
    // Check for a common element within a course card, e.g., a course title
    expect(screen.getAllByRole('heading', { level: 3 })[0]).toBeInTheDocument();
  });

  it('renders the "Tải thêm" button', () => {
    render(
      <Router>
        <ListCourse />
      </Router>
    );
    expect(screen.getByRole('button', { name: /Tải thêm/i })).toBeInTheDocument();
  });
});
