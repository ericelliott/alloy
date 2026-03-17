import { Surface } from '@paralleldrive/alloy-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Surface',
  component: Surface,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    depth: {
      control: 'select',
      options: ['sunken', 'base', 'raised', 'overlay', 'inset'],
      description: 'Physical depth level of the surface',
    },
  },
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof meta>;

const contentStyle = {
  padding: '24px 32px',
  color: '#f0f0f0',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.875rem',
  lineHeight: '1.5',
};

export const Base: Story = {
  args: {
    depth: 'base',
    children: <div style={contentStyle}>Base surface — ground level plane</div>,
  },
};

export const Raised: Story = {
  args: {
    depth: 'raised',
    children: <div style={contentStyle}>Raised surface — elevated above base</div>,
  },
};

export const Overlay: Story = {
  args: {
    depth: 'overlay',
    children: <div style={contentStyle}>Overlay surface — floating layer</div>,
  },
};

export const Inset: Story = {
  args: {
    depth: 'inset',
    children: <div style={contentStyle}>Inset surface — pressed inward</div>,
  },
};

export const Sunken: Story = {
  args: {
    depth: 'sunken',
    children: <div style={contentStyle}>Sunken surface — recessed plane</div>,
  },
};

export const AllDepths: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '32px',
        background: '#0a0a0a',
        minWidth: '320px',
      }}
    >
      {(['sunken', 'base', 'raised', 'overlay', 'inset'] as const).map((depth) => (
        <Surface key={depth} depth={depth}>
          <div style={contentStyle}>
            <strong>{depth}</strong>
          </div>
        </Surface>
      ))}
    </div>
  ),
};
