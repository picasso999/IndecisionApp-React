class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption =  this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    };

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){    
                this.setState(()=>({options}));
            }
        } catch (e){
            //DO nothing at all
        }
        
    };

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
        
    };

    handleDeleteOptions(){    
        this.setState(()=>({options:[]}));    
    };

    handleDeleteOption(optionToRemove) {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }))
    };

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption(option){

        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else {

        this.setState((prevState)=>({options: prevState.options.concat([option])}))
    }
    }

    render () {
        // const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                
                <Options options= {this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />

                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <p>{this.props.subtitle}</p>
//             </div>
//         );
//     }
// };

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions} >What should I do?</button>
        </div>
    );
}

// class Action extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions} >What should I do?</button>
//             </div>
//         );
//     }
// };

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>please add an option to get started</p>}
        {props.options.map((option)=>{
            return <Option key = {option} optionText={option} handleDeleteOption={props.handleDeleteOption} /> 
        })}
            
        </div>
    );
}

// class Options extends React.Component {
    
//     render() {
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {this.props.options.map((option)=>{
//                 return <Option key = {option} optionText={option} /> 
//             })}
                
//             </div>
//         );
//     }
// };

const Option = (props) => {
    return (
        <div>
        {props.optionText}
        <button onClick={(e)=>{
            props.handleDeleteOption(props.optionText);
        }}>remove</button>
        </div>
    )};
        

// class Option extends React.Component {
//     render() {
//         return (
//         <div>
            
//                 {this.props.optionText}
            
//         </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    
    handleAddOption(e) {
        e.preventDefault();
        
            const option = e.target.elements.optionn.value.trim();

            const error = this.props.handleAddOption(option);

            this.setState(()=>({error}));

            if(!error) {
                e.target.elements.optionn.value = '';
            }
        };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="optionn"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
};

// const User = (props) => {
//     return (
//     <div>
//         <p>Name: {props.name} </p>
//         <p>Age: {props.age} </p>
//     </div>
//     );
     
// };
    




ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));