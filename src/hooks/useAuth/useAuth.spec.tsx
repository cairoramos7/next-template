import { act, renderHook } from '@testing-library/react-hooks';
import { useAuth } from './useAuth';

//***Add This***
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
        args[0]
      )
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

/**
 * logout();
 * login({ login, password });
 * -> return void
 * -> return error
 *
 * return
 * -> user
 * -> authenticated
 * -> login
 * -> logout
 */
describe('useAuth', () => {
  it('should returns default value', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
    expect(typeof result.current.login).toBe('function');
    expect(typeof result.current.logout).toBe('function');

    // console.log(result.current)
    // const { result } = reenderHook(() => useAuth());
  });

  it('should isAuthenticated to be false and user to be null when logout was called', () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.logout();
    });

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBe(null);
  });

  it('should isAuthenticated to be true and user contains complete infos when login was called correctly', () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login({
        login: 'email@domain.com',
        password: 'secret'
      });
    });

    expect(result.current.user).toMatchObject({
      name: 'Jhon',
      permissions: [''],
      isAdmin: true,
      token: 'token'
    });
    expect(result.current.isAuthenticated).toBe(true);
  });
});
