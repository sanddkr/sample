import * as React from "react";
import {mount, shallow} from "enzyme";
import * as renderer from 'react-test-renderer';
import Footer from './';

describe("Footer Component", () => {
    let wrapper, mountwrap;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
        mountwrap = mount(<Footer />);
    });

    it('Footer Component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });

    it('Footer Component renders correctly using snapshots', () => {
        const rendered = renderer.create(
            <Footer />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});