import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { ColourOption, colourOptions } from './data';
import { ActionMeta, OnChangeValue } from 'react-select';

import  { TagType } from 'types/graphql'
type TagTypeMap = {[type in TagType]: String}
export const TagTypeNames:TagTypeMap = {
  "CHARACTER": "人物",
  "EVENT": "事件",
  "PLACE": "地點",
  "OTHER": "其他"
}

export default class CreatableMulti extends Component<{}> {
  constructor(props) {
    super(props)
  }

  handleChange = (
    newValue: OnChangeValue<ColourOption, true>,
    actionMeta: ActionMeta<ColourOption>
  ) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.log(" tagtype - ", this.props.tagtype);
    console.groupEnd();
    this.props.update(this.props.tagtype, newValue)
  };

  render() {
    console.log(" *** TagInput --- this.props = ", this.props)
    return (
      <CreatableSelect
        isMulti
        onChange={this.handleChange}
        options={this.props.options[this.props.tagtype]}
      />
    );
  }
}