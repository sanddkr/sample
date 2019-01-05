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
        expect(wrapper.instance().validateUsername('naveed')).toBeTruthy();
        
        expect(wrapper.instance().validateUsername('n@veed')).toBeFalsy();
        expect(wrapper.instance().validateUsername()).not.toBeTruthy();
        expect(wrapper.instance().validateUsername('nvd')).not.toBeTruthy();
        expect(wrapper.instance().validateUsername('nvdnvdnvdnvdnvdnvdnvd')).not.toBeTruthy();
    });
    it('Check if passowrd gets validated properly', () => {
        expect(wrapper.instance().validatePassword('naveeda')).toBe('');
        expect(wrapper.instance().validatePassword('naveed')).toBe('Password length did not match');
        expect(wrapper.instance().validatePassword('nvdnvdnvdnvdnvdnvdnvd')).toBe('Password length did not match');
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
                username: {value: 'naveed'}, password: {value: 'naveeda'}
            }
        })).toBeTruthy()
    });
    
});