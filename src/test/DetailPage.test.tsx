import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailPage from '../pages/DetailPage';
import { describe, it, expect } from 'vitest';

describe('DetailPage', () => {
  it('renders the course title', () => {
    render(
      <Router>
        <DetailPage />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Xây dựng ứng dụng SaaS chuyển văn bản thành hình ảnh bằng React JS/i })).toBeInTheDocument();
  });

  it('renders the "Quay lại" button', () => {
    render(
      <Router>
        <DetailPage />
      </Router>
    );
    expect(screen.getByRole('button', { name: /Quay lại/i })).toBeInTheDocument();
  });

  it('renders the course structure heading', () => {
    render(
      <Router>
        <DetailPage />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Cấu trúc khóa học/i })).toBeInTheDocument();
  });

  it('renders the course description heading', () => {
    render(
      <Router>
        <DetailPage />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Mô tả khóa học/i })).toBeInTheDocument();
  });

  it('renders the "Đăng ký ngay" button', () => {
    render(
      <Router>
        <DetailPage />
      </Router>
    );
    expect(screen.getByRole('button', { name: /Đăng ký ngay/i })).toBeInTheDocument();
  });

  it('renders the "Có gì trong khóa học?" heading', () => {
    render(
      <Router>
        <DetailPage />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Có gì trong khóa học?/i })).toBeInTheDocument();
  });
});
