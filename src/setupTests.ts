import '@testing-library/jest-dom/vitest';

// Mock window.scrollTo as it's not implemented in JSDOM
window.scrollTo = () => {};
