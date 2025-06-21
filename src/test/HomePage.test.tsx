import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { describe, it, expect } from 'vitest';

describe('HomePage', () => {
  it('renders the main heading in the Hero Section', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Trao quyền cho tương lai của bạn với các khóa học được thiết kế để phù hợp với lựa chọn của bạn./i })).toBeInTheDocument();
  });

  it('renders the search input and button', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByPlaceholderText(/Tìm kiếm khóa học/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Tìm kiếm/i })).toBeInTheDocument();
  });

  it('renders the "Trusted by Learners" section text', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByText(/Được tin cậy bởi học viên từ/i)).toBeInTheDocument();
  });

  it('renders the "Học hỏi từ những người giỏi nhất" section heading', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Học hỏi từ những người giỏi nhất/i })).toBeInTheDocument();
  });

  it('renders the "Hiển thị tất cả khóa học" link', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByRole('link', { name: /Hiển thị tất cả khóa học/i })).toBeInTheDocument();
  });

  it('renders the "Lời chứng thực" section heading', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Lời chứng thực/i })).toBeInTheDocument();
  });

  it('renders the "Học mọi thứ, mọi lúc, mọi nơi" section heading', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Học mọi thứ, mọi lúc, mọi nơi/i })).toBeInTheDocument();
  });

  it('renders the "Bắt đầu" button in the Call to Action section', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByRole('button', { name: /Bắt đầu/i })).toBeInTheDocument();
  });
});
