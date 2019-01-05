import * as React from "react";
import {mount, shallow} from "enzyme";
import LoginInfoContainer from './';

describe("Device Info Component", () => {
    let wrapper, mountwrap;

    beforeEach(() => {
        wrapper = shallow(<LoginInfoContainer />);
        mountwrap = mount(<LoginInfoContainer />);
    });

    it('login component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });
});