import React from 'react';
import { Route, Switch } from 'react-router-dom';
import First from './authes/First';
import Second from './authes/Second';
import Third from './authes/Third';

export default function (props) {
    return (
        <div>
            <div>
                <div>Auth x124</div>
                <div>
                    <Switch>
                        <Route path="/auth/first" component={First} />
                        <Route path="/auth/second" component={Second} />
                        <Route path="/auth/third" component={Third} />
                    </Switch>
                </div>
            </div>

        </div>
    )
}
