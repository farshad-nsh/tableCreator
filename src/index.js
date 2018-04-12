import React from 'react';

import TableCreator from './modules/TableCreator/TableCreator.js'


var tableCreator = new TableCreator(0);
tableCreator.decorate('addOneRow');
tableCreator.decorate('addOneRow');
tableCreator.decorate('addOneRow');
tableCreator.decorate('addOneRow');
tableCreator.decorate('removeOneRow');
tableCreator.getRows();
var category=["column1","column2","column3"];
tableCreator.draw(category);


var data=["a1","a2","a3"];
tableCreator.draw(data);
var data=["b1","b2","b3"];
for (var i=0;i<20;i++){
    tableCreator.draw(data);
}
