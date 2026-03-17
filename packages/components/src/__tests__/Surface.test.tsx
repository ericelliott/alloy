import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Surface } from '../Surface.js';

describe('Surface', () => {
  it('renders children', () => {
    const { getByText } = render(<Surface>Hello Alloy</Surface>);
    expect(getByText('Hello Alloy')).toBeDefined();
  });

  it('defaults to base depth', () => {
    const { container } = render(<Surface>content</Surface>);
    const div = container.firstChild as HTMLElement;
    expect(div.tagName).toBe('DIV');
  });

  it('accepts a depth prop', () => {
    const depths = ['sunken', 'base', 'raised', 'overlay', 'inset'] as const;
    for (const depth of depths) {
      const { container } = render(<Surface depth={depth}>{depth}</Surface>);
      expect(container.firstChild).toBeDefined();
    }
  });

  it('passes additional HTML attributes', () => {
    const { container } = render(<Surface data-testid="my-surface">content</Surface>);
    const div = container.firstChild as HTMLElement;
    expect(div.getAttribute('data-testid')).toBe('my-surface');
  });

  it('merges custom style with depth styles', () => {
    const { container } = render(
      <Surface depth="raised" style={{ padding: '16px' }}>
        content
      </Surface>
    );
    const div = container.firstChild as HTMLElement;
    expect(div.style.padding).toBe('16px');
    expect(div.style.borderRadius).toBe('8px');
  });
});
