import * as React from "react";
import {mount, shallow} from "enzyme";
import LoginForm from './';

describe("login Component", () => {
    let wrapper, mountwrap;

    beforeEach(() => {
        wrapper = shallow(<LoginForm />);
        mountwrap = mount(<LoginForm />);
    });

    it('login component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });
    it('Check if validateUsername gets validated properly', () => {
        expect(wrapper.instance().validateUsername('sandeep')).toBeTruthy();
        
        expect(wrapper.instance().validateUsername('s@ndeep')).toBeFalsy();
        expect(wrapper.instance().validateUsername()).not.toBeTruthy();
        expect(wrapper.instance().validateUsername('sand')).not.toBeTruthy();
        expect(wrapper.instance().validateUsername('sandsandsandsandsandsand')).not.toBeTruthy();
    });
    it('Check if passowrd gets validated properly', () => {
        expect(wrapper.instance().validatePassword('sandeepa')).toBe('');
        expect(wrapper.instance().validatePassword('sand')).toBe('Password length did not match');
        expect(wrapper.instance().validatePassword('sandsandsandsandsandsand')).toBe('Password length did not match');
        expect(wrapper.instance().validatePassword('')).toBe('Password is empty');
        expect(wrapper.instance().validatePassword()).toBe('Password is empty');
    });
    it('Stimulate form submit', () => {
        /* const mockFn = jest.fn();
        wrapper.instance().validateForm = mockFn;
        const component = wrapper.setState({ username: 'naveed', password: 'naveeda' });
        console.log(component.find('[type="submit"]'));
        component.find('[type="submit"]').at(0).simulate('click');
        expect(mockFn).toHaveBeenCalledWith({ 
            username: 'naveed', password: 'naveeda'
        });
        expect(mockFn).toHaveBeenCalledTimes(1);  */
        expect(wrapper.instance().validateForm({
            target: {
                username: {value: 'sandeep'}, password: {value: 'sandeepa'}
            }
        })).toBeTruthy()
    });
    
});