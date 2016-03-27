/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component, PropTypes } from 'react';

class PageTreeViewItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        e.stopPropagation();
        if(this.props.onSelect){
            this.props.onSelect(this.props.itemKey, e.metaKey || e.ctrlKey);
        }
    }

    render(){

        let content = null;

        const { isSelected, itemKey } = this.props;

        var className = isSelected ? 'umy-treeview-list-item-selected' : 'umy-treeview-list-item';
        //if(isCopyMark){
        //    className += ' umy-grid-basic-border-copy';
        //}
        //if(isCutMark){
        //    className += ' umy-grid-basic-border-cut';
        //}

        const linkStyle = { textDecoration: 'none', outline: 'none' };
        let label = this.props.type;

        if(this.props.children && this.props.children.length > 0){
            content = (
                <li id={itemKey} className={className}>
                    <a key={'toplink'} href="#" onClick={this.handleClick} style={linkStyle}>
                        <span>{'<' + label + '>'}</span>
                    </a>
                    {this.props.children}
                    <a key={'bottomlink'} href="#" onClick={this.handleClick} style={linkStyle}>
                        <span>{'</' + label + '>'}</span>
                    </a>
                </li>
            );
        } else {
            content = (
                <li id={itemKey} className={className}>
                    <a href="#" onClick={this.handleClick} style={linkStyle}>
                        <span>{'<' + label + ' />'}</span>
                    </a>
                </li>
            );
        }

        return content;
    }
}

PageTreeViewItem.defaultProps = {
    itemKey: undefined,
    isSelected: false,
    onSelect: undefined,
    type: undefined
};
PageTreeViewItem.propTypes = {
    itemKey: PropTypes.string.isRequired,
    inSelected: PropTypes.bool,
    onSelect: PropTypes.func,
    type: PropTypes.string.isRequired
};

export default PageTreeViewItem;
