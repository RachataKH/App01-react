import React from "react";

export class Calculator extends React.Component {
    n1 = 20
    n2 = 4

    caculate = (op) => {
        let c = `${this.n1} ${op} ${this.n2}`
        let r = eval(c)
        alert(`${c} = ${r}`)
    }
    render() {
        return (
            <div style={{textAlign:'center',marginTop:20}}>
                <span>{this.n1}</span>&nbsp;
                <button onClick={() => this.caculate('+')}>+</button>&nbsp;
                <button onClick={() => this.caculate('-')}>-</button>&nbsp;
                <button onClick={() => this.caculate('*')}>*</button>&nbsp;
                <button onClick={() => this.caculate('/')}>/</button>&nbsp;
                <span>{this.n2}</span>
            </div>
        )
    }
}