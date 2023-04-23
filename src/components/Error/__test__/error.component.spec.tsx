import React from 'react';
import { render, fireEvent, waitFor  } from '@testing-library/react';
import Error from '../index';

describe('Error component', () => {
  it('should render default error message', () => {
    const { getByText } = render(<Error />);
    const errorMessage = getByText('Ooops!! Something went wrong');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should toggle showing actual error message when clicked on image', async () => {
    const { getByAltText, queryByText } = render(
      <Error errorMessage='Test error message' />,
    );
    const errorMessage = queryByText('Test error message');
    expect(errorMessage).toBeNull();

    const errorImage = getByAltText('something-wrong');
    fireEvent.click(errorImage);

    await waitFor(() => {
      expect(queryByText('Test error message')).toBeVisible();
    });

    fireEvent.click(errorImage);

    await waitFor(() => {
      expect(queryByText('Test error message')).toBeNull();
    });
  });

  it('should toggle showing actual error message when clicked on image and have empty error message', () => {
    const { getByAltText } = render(<Error />);
    const errorImage = getByAltText('something-wrong');

    fireEvent.click(errorImage);

    // Should not throw any error when trying to toggle even with empty error message
    expect(() => fireEvent.click(errorImage)).not.toThrow();
  });
});
