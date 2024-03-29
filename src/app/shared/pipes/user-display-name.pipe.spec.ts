import { UserDisplayNamePipe } from './user-display-name.pipe';
import { User } from '../interfaces/user';

describe('UserDisplayNamePipe', () => {
  let pipe: UserDisplayNamePipe = null;

  beforeEach(() => {
    pipe = new UserDisplayNamePipe();
  });

  it('create an instance', () => {
    const pipe = new UserDisplayNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should display name and surname', () => {
    const user1 = <User> {
      person: {
        name: 'jan',
        surname: 'nowak'
      }
    };

    const user2 = <User> {
      person: {
        name: '',
        surname: ''
      }
    };

    const user3 = <User> {
      person: {
        name: ({}).toString(),
        surname: null
      }
    };

    expect(pipe.transform(user1)).toEqual('jan nowak');
    expect(pipe.transform(user2)).toEqual(' ');
    expect(pipe.transform(user3)).toEqual('[object Object] null');
  });
});
