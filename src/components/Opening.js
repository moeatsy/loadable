import React from 'react';
import { Route, Switch } from 'react-router-dom';
import First from './openes/First';
import Second from './openes/Second';
import Third from './openes/Third';

export default function () {
    return (
        <div>
            <div>
            <div>Opening x123</div>
                <div>
                    <Switch>
                        <Route path="/opening/first" component={First} />
                        <Route path="/opening/second" component={Second} />
                        <Route path="/opening/third" component={Third} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
