import React from 'react';
import ColorHash from 'color-hash';

const customSeed = 42; // Experiment with different seed values to generate varied colors

// Define custom colors for specific technologies
const customPalette = {
  'javascript': '#FF5733', // Example: Custom color for JavaScript
  'theme development': '#67C23A', // Example: Custom color for Theme Development
  // Add more entries as needed
};

// Create a ColorHash instance with a custom seed for consistent color generation
const colorHashWithCustomSeed = new ColorHash({ seed: customSeed });

const BadgeComponent = ({ tech }) => {
  // Check if there's a custom color for the provided technology
  const customColor = customPalette[tech.toLowerCase()];
  const color = customColor || colorHashWithCustomSeed.hex(tech);

  // Define the style for the badge
  const badgeStyle = {
    backgroundColor: color,
    borderRadius: '4px',
    padding: '4px 8px',
    marginRight: '4px',
    color: '#fff',
    fontSize: '12px',
    fontWeight: '700',
    display: 'inline-block',
    lineHeight: '12px',
    textAlign: 'center',
    verticalAlign: 'baseline',
    whiteSpace: 'nowrap',
  };

  // Render the badge with the specified technology name
  return (
    <div style={badgeStyle}>
      {tech}
    </div>
  );
};

export default BadgeComponent;
