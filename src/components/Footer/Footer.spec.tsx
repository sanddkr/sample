import * as React from "react";
import {mount, shallow} from "enzyme";
import Footer from './';

describe("Footer Component", () => {
    let wrapper, mountwrap;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
        mountwrap = mount(<Footer />);
    });

    it('login component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });
});