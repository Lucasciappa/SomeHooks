import React from 'react';
import {shallow, mount} from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';


describe('Pruebas en <HomeScreen/>', () => {

    const user = {
        name:"Lucas",
        email: "lucasciappa@gmail.com"
    }

    const wrapper = mount (
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>
    );
    

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot()
        
    })
    
})
