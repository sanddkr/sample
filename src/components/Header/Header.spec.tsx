import * as React from "react";
import {mount, shallow} from "enzyme";
import * as renderer from 'react-test-renderer';
import Header from './';

describe("Header Component", () => {
    let wrapper, mountwrap;

    beforeEach(() => {
        wrapper = shallow(<Header />);
        mountwrap = mount(<Header />);
    });

    it('Header  component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });

    it('Header  component renders correctly using snapshots', () => {
        const rendered = renderer.create(
            <Header />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});