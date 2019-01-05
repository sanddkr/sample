import * as React from "react";
import {mount, shallow} from "enzyme";
import Header from './';

describe("Header Component", () => {
    let wrapper, mountwrap;

    beforeEach(() => {
        wrapper = shallow(<Header />);
        mountwrap = mount(<Header />);
    });

    it('login component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });
});