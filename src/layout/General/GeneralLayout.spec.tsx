import * as React from "react";
import {mount, shallow} from "enzyme";
import * as renderer from 'react-test-renderer';
import GeneralLayout from './';
import { GeneralLayoutProps } from './GeneralLayout.props';

describe("Footer Component", () => {
    let wrapper, mountwrap;
    let layoutProps:GeneralLayoutProps = {
        children: <h1>Hi How are you</h1>,
        image: {
            src: '',
            alt: ''
        }
    }
    beforeEach(() => {
        wrapper = shallow(<GeneralLayout children={layoutProps.children} image={layoutProps.image} />);
        mountwrap = mount(<GeneralLayout children={layoutProps.children} image={layoutProps.image} />);
    });

    it('Footer Component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });

    it('Footer Component renders correctly using snapshots', () => {
        const rendered = renderer.create(
            <GeneralLayout children={layoutProps.children} image={layoutProps.image} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});