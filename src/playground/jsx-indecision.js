const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option); 
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);

};

const appRoot = document.getElementById('app1');



const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h3> {app.subtitle}</h3>}
            <p>{app.options.length > 0 ? <span>here are your options</span> : 'no options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do!</button>
            <button onClick={onRemoveAll}>Remove All</button>
             
            <ol>
                {app.options.map((option)=>{
                    return <li key={Math.floor(Math.random()*100000)}>{option}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
};

render();

// const user = {
//     name: 'Pradeep',
//     age: 26,
//     location: 'Vijayawada'
// };
// function getLocation(location) {
//     if(location) {
//         return <p>Location: {location}</p>;
//     } 
// };
// const userName = 'Akshu';
// const userAge = 23;
// const userLocation = 'Hyderabad';
// <h1>{userName ? user.name : 'Anonymous'} Pradeep Picasso</h1>
// {(user.age && user.age >= 18) && <p>Age: {userAge}</p> }
// {getLocation(user.location)}


