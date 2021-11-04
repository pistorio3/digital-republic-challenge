import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Home from '../pages/Home';

describe('Testa a página inicial', () => {
  test('Verifica se existe o título da página', () => {
    render(<Home />);

    const headingPage = screen.getByText('Paint Calculator');
    expect(headingPage).toBeInTheDocument();
  });

  test('Verifica se a página contém 4 seções', () => {
    const { getByTestId } = render(<Home />);

    const sections = [];
    const numberOfSections = 4;

    for (let index = 0; index < numberOfSections; index += 1) {
      const section = getByTestId(`input-measure${index + 1}`);
      sections.push(section);
    }

    expect(sections.length).toEqual(numberOfSections);
  });

  test('Verifica se a página contém 4 títulos de seções', () => {
    const { getAllByRole } = render(<Home />);

    const numberOfHeadings = 4;
    const headingSection = getAllByRole('heading', { level: 5 });
    expect(headingSection.length).toEqual(numberOfHeadings);
  });

  test('Verifica se a página contém 4 inputs de largura', () => {
    const { getByTestId } = render(<Home />);

    const inputs = [];
    const numberOfInputs = 4;

    for (let index = 0; index < numberOfInputs; index += 1) {
      const input = getByTestId(`measure-width${index + 1}`);
      inputs.push(input);
    }

    expect(inputs.length).toEqual(numberOfInputs);
  });

  test('Verifica se a página contém 4 inputs de altura', () => {
    const { getByTestId } = render(<Home />);

    const inputs = [];
    const numberOfInputs = 4;

    for (let index = 0; index < numberOfInputs; index += 1) {
      const input = getByTestId(`measure-height${index + 1}`);
      inputs.push(input);
    }

    expect(inputs.length).toEqual(numberOfInputs);
  });

  test('Verifica se a página contém 4 checkboxes', () => {
    const { getByTestId } = render(<Home />);

    const checks = [];
    const numberOfChecks = 4;

    for (let index = 0; index < numberOfChecks; index += 1) {
      const check = getByTestId(`check-input${index + 1}`);
      checks.push(check);
    }

    expect(checks.length).toEqual(numberOfChecks);
  });

  test('Verifica se a página contém 4 inputs para quantidade de portas', () => {
    const { getByTestId } = render(<Home />);

    const inputs = [];
    const numberOfInputs = 4;

    for (let index = 0; index < numberOfInputs; index += 1) {
      const input = getByTestId(`doors-quantity-input${index + 1}`);
      inputs.push(input);
    }

    expect(inputs.length).toEqual(numberOfInputs);
  });

  test('Verifica se a página contém 4 inputs para quantidade de janelas', () => {
    const { getByTestId } = render(<Home />);

    const inputs = [];
    const numberOfInputs = 4;

    for (let index = 0; index < numberOfInputs; index += 1) {
      const input = getByTestId(`windows-quantity-input${index + 1}`);
      inputs.push(input);
    }

    expect(inputs.length).toEqual(numberOfInputs);
  });
});
