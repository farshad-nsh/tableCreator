/**
 * Created by farshad-nsh on 4/12/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import  Table from '../../components/Table/Table.js';
import "../../components/Table/Table.scss";

    function TableCreator(numberOfRows) {
        this.numberOfRows = numberOfRows || 0;
        this.decorators_list = [];
        this.indents = [];
    }

    TableCreator.decorators = {};

    TableCreator.decorators.addOneRow = {
        getRows: function (numberOfRows) {
            return numberOfRows + 1;
        }
    };

    TableCreator.decorators.removeOneRow = {
        getRows: function (numberOfRows) {
            return numberOfRows - 1;
        }
    };

    TableCreator.prototype.decorate = function (decorator) {
        this.decorators_list.push(decorator);
    };

    TableCreator.prototype.getRows = function () {
        var numberOfRows = this.numberOfRows, i, max = this.decorators_list.length, name;
        for (i = 0; i < max; i += 1) {
            name = this.decorators_list[i];
            numberOfRows = TableCreator.decorators[name].getRows(numberOfRows);
            console.log("iter=" + numberOfRows);
        }
        this.numberOfRows = numberOfRows;
        window.alert(numberOfRows);
        return numberOfRows;
    };

    TableCreator.prototype.draw = function (input) {
        this.indents.push(<Table name={input}/>);
        ReactDOM.render(this.indents, document.getElementById('container'));
    }

export default TableCreator