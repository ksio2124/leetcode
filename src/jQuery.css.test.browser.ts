import { describe, it, beforeEach, expect } from 'vitest';

interface JQuery {
  css: (
    prop: string,
    value?: boolean | string | number,
  ) => JQuery | string | undefined;
}

export default function $(selector: string): JQuery {
  // throw 'Not implemented!';
  const element = document.querySelector<HTMLElement>(selector);
  return {
    css: function (prop, value?) {
      if (value === undefined) {
        if (element === null) {
          return undefined;
        }
        const val = element.style?.[prop as any];
        return val === "" ? undefined : val;
        // return element?.style?.[prop as any] ?? undefined;
      }
      if (element != null) {
        element.style[prop as any] = value.toString();
      }
      return this;
    },
  };
}

describe('jQuery.css', () => {
  beforeEach(() => {
    document.body.innerHTML = '<button style="color: blue">Click me</button>';
  });

  it('get existing style', () => {
    expect($('button').css('color')).toBe('blue');
  });

  it('set style', () => {
    $('button').css('color', 'red');
    $('button').css('backgroundColor', 'tomato');
    $('button').css('fontSize', '12px');

    expect(document.querySelector('button')!.style.color).toBe('red');
  });

  it('get non-existent style', () => {
    expect($('button').css('fontSize')).toBe(undefined);
  });
});


describe('jQuery.css', () => {
  describe('get property', () => {
    beforeEach(() => {
      document.body.innerHTML = '<button style="color: blue">Click me</button>';
    });

    it('get existing style', () => {
      expect($('button').css('color')).toBe('blue');
    });

    it('get non-existent style', () => {
      expect($('button').css('fontSize')).toBe(undefined);
    });

    it('non-existent element', () => {
      expect($('no-such-thing').css('fontSize')).toBe(undefined);
    });
  });

  describe('set property', () => {
    beforeEach(() => {
      document.body.innerHTML = '<button>Click me</button>';
    });

    it('no elements match the selector', () => {
      expect(() => {
        // @ts-ignore
        $('no-such-thing').css('color', 'red').css('fontSize', '12px');
      }).not.toThrow();
    });

    it('set css', () => {
      $('button').css('color', 'red');
      $('button').css('backgroundColor', 'tomato');
      $('button').css('fontSize', '12px');

      expect(document.querySelector('button')!.style.color).toBe('red');
      expect(document.querySelector('button')!.style.backgroundColor).toBe(
        'tomato',
      );
      expect(document.querySelector('button')!.style.fontSize).toBe('12px');

      $('button').css('color', 'orange');
      expect(document.querySelector('button')!.style.color).toBe('orange');
    });

    it('chain calls', () => {
      // @ts-ignore
      $('button')
        .css('color', 'red')
        // @ts-ignore
        .css('backgroundColor', 'tomato')
        .css('fontSize', '12px');

      expect(document.querySelector('button')!.style.color).toBe('red');
      expect(document.querySelector('button')!.style.backgroundColor).toBe(
        'tomato',
      );
      expect(document.querySelector('button')!.style.fontSize).toBe('12px');
    });

    it('overwrites previous styles', () => {
      // @ts-ignore
      $('button')
        .css('color', 'red')
        // @ts-ignore
        .css('backgroundColor', 'tomato')
        .css('fontSize', '12px')
        .css('color', 'orange');

      expect(document.querySelector('button')!.style.color).toBe('orange');
      expect(document.querySelector('button')!.style.backgroundColor).toBe(
        'tomato',
      );
      expect(document.querySelector('button')!.style.fontSize).toBe('12px');
    });
  });
});