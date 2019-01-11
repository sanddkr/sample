import * as React from "react";
import {mount, shallow} from "enzyme";
import DeviceForm from './';
const sampleData = require('./data/mock');

function mockFetch(data) {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data
      })
    );
}

const axios = require('axios');

describe("Device Form Component", () => {
    let wrapper, mountwrap;

    beforeEach(() => {
        wrapper = shallow(<DeviceForm />);
        mountwrap = mount(<DeviceForm />);
    });

    it('Device form component renders correctly', () => {
        expect(wrapper.children().length).not.toBeLessThan(1);
    });
    
    it('Device form component test axios call', async () => {

        window.fetch = mockFetch(sampleData);

        const data = await wrapper.instance().setDeviceInfo();
        expect(data).toEqual(sampleData);
        expect(window.fetch).toHaveBeenCalledTimes(1);
    });

    describe("Device Form CSN Input", () => {
        let csnInput, target;
        beforeEach(() => {
            csnInput = mountwrap.find("#csninput");
            target = {
                dataset: {
                    key: 'csn',
                    minlength: csnInput.prop('data-minlength'),
                    maxlength: csnInput.prop('data-maxlength')
                },
                value: ''
            };
        });

        it('Device form component stimulate on change with valid value', () => {
            target.value = '111111111111111111111';
            csnInput.simulate('change', {target});
            expect(mountwrap.instance().state.csnValid).toBe(true);
        });
    
        it('Device form component stimulate on change with in valid value', () => {
            target.value = '11111';
          
            csnInput.simulate('change', {target});
            expect(mountwrap.instance().state.csnValid).toBe(false);
        });
    });

    describe("Device Form IMEI Input", () => {
        let imeiInput, target;
        beforeEach(() => {
            imeiInput = mountwrap.find("#IMEI");
            target = {
                dataset: {
                    key: 'imei',
                    minlength: imeiInput.prop('data-minlength'),
                    maxlength: imeiInput.prop('data-maxlength')
                },
                value: ''
            };
        });

        it('Device form component stimulate on change with valid value', () => {
            target.value = '1111111111111111';
            imeiInput.simulate('change', {target});
            expect(mountwrap.instance().state.imeiValid).toBe(true);
        });
    
        it('Device form component stimulate on change with in valid value', () => {
            target.value = '11111';
          
            imeiInput.simulate('change', {target});
            expect(mountwrap.instance().state.imeiValid).toBe(false);
        });
    });
});