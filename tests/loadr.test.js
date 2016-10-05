import Loadr from '../src/loadr';

const messages = ['loading', 'loading again'];

describe('loadr tests', () => {

  it('instantiates correctly and has pre-defined messages', () => {
    const instance = new Loadr();
    expect(instance.messages).toMatchSnapshot();
  });

  it('returns a message from predefined messages', () => {
    const instance = new Loadr(null, {before: '', after: ''});
    instance.messages = messages;
    console.log(instance.get())
    expect(messages.indexOf(instance.get())).not.toBe(-1);
  });

  it('should update an element', () => {
    const el = document.createElement('div');
    const instance = new Loadr(el);
    instance.messages = messages;
    instance.start();
    const message = el.innerHTML.replace(instance.options.after, '').replace(instance.options.before, '');
    expect(messages.indexOf(message)).not.toBe(-1);
  });

  it('should advance as per delay', (done) => {
    const el = document.createElement('div');
    const delay = 300;
    const instance = new Loadr(el, {
      delay
    });
    instance.messages = messages;
    instance.start();

    setTimeout(() => {
      const message = el.innerHTML.replace(instance.options.after, '').replace(instance.options.before, '');
      expect(messages.indexOf(message)).not.toBe(-1);
      done();
    }, delay + 50);

  });

});
