import * as React from "react";
import {mount, shallow} from "enzyme";
import * as renderer from 'react-test-renderer';
import Modal from './';
import { ModalProps } from './Modal.props';

describe("Modal Component", () => {
    let wrapper, mountwrap;
    let modalProps:ModalProps = {
        children: {
            modalheader: 'Modal title from comp',
            modalbody: <p>Modal body text goes here.</p>,
            linktext: 'Link for modal from comp'
        }
    }
    beforeEach(() => {
        wrapper = shallow(<Modal children={modalProps.children} />);
        mountwrap = mount(<Modal children={modalProps.children} />);
    });

    it('Modal Component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });

    /* it('Modal Component renders correctly using snapshots', () => {
        const rendered = renderer.create(
            <Modal children={modalProps.children} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    }); */
});