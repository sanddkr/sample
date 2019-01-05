import * as React from "react";
import {mount, shallow} from "enzyme";
import DeviceInfoContainer from './';

describe("Device Info Component", () => {
    let wrapper, mountwrap;

    beforeEach(() => {
        wrapper = shallow(<DeviceInfoContainer />);
        mountwrap = mount(<DeviceInfoContainer />);
    });

    it('login component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });
});