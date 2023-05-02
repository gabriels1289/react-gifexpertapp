import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en useFetchGifs', () => {

  test('debe de retornar el estado inicial', () => {    

    const { data: imgages, loading } = useFetchGifs( 'One Punch' );
    console.log(data, loading);

  });

})