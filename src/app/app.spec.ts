import { App } from './app';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { beforeEach} from '@jest/globals'

describe('App', () => {
  beforeEach(async () => {
    await render(App);
  });

  describe('.showMessage()', () => {
    it('should update the message when called', async () => {
      const button = screen.getByRole('button', { name: /show message/i });
      await userEvent.click(button);
      expect(await screen.findByText(/I am the new message/i)).toBeTruthy();
    });
  });
});
