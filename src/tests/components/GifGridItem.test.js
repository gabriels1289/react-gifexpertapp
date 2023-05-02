import { GifGridItem } from "../../components/GifGridItem";
import { render } from '@testing-library/react';
import { shallow } from 'enzyme'; 

describe('Pruebas GifGridItem', () => {

  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';

  let wrapper = shallow( <GifGridItem title={title} url={url} /> );

  beforeEach( () => {
    wrapper = shallow( <GifGridItem title={title} url={url} /> );
  });

  test('Debe de mostrar <GifGridItem /> correctamente (hacer match con snapshot)', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de tener un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    // img.props().src
    // img.prop('src')
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });

})