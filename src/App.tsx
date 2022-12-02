
import * as React from "react";

export interface State {
    rowValues?:any[],
    colValues?:any[]
}


export class App extends React.Component<{}, State>{
    private static updateCallback: (data: object) => void = null;
    public static update(newState: State) {
        if (typeof App.updateCallback === 'function') {
            App.updateCallback(newState);
        }
    }


    public componentWillMount() {
        App.updateCallback = (newState: State): void => { this.setState(newState); };
    }
    public componentWillUnmount() {
        App.updateCallback = null;
    }
    constructor(props: any) {
        super(props);
    
    }
     
    render() {
        return (
            <div >
                hlo
            </div >
        )
    }
}

export default App