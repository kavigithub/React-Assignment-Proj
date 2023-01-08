import React from 'react';
import ReactDOM from 'react-dom/client';

//nested code
//Not using JSX syntax
function Nav() {  
    return (    
        React.createElement(
            "ul", 
            {},      
            React.createElement("li", null, "Home"),   
            React.createElement("li", null, "About"),     
            React.createElement("li", null, "Portfolio"),     
            React.createElement("li", null, "Contact")        
        ) 
        );
    }

//
const NestedJSX = (
    <div>
        <h1>
        <h2>
            <h3 className='title'>Hey, I am from Nested JSX Code</h3>
        </h2>
     </h1>
    </div>
   )

//this is the nested header
function NestedHeader() {
    return (
        React.createElement(
            'h1',
            {'className': 'title'},
            React.createElement(
                'h2', 
                {'className': 'title'},
                React.createElement(
                    'h3', 
                    {'className': 'title'},
                     'Hi am h3 inside element of parents h1 and h2'
                    )    
                )
        )         
    )
};

///create element JSX
const header1 = (
   <h1>Heading 1</h1>
);

//create functional component
const Header1 = () => {
    return (
        <h1> Heading 1 from functional component</h1>
    )
}

///////////////////////////////////////////////////
//search bar functional comp
const SearchBar = () => (
    <form id="form"> 
        <input type="search" id="query" name="q" placeholder="Search..." />
        <button>Search</button>
    </form>
)

const HedaderComp = () => {
    return(
            <header>
                <div className='flex-box'>
                    <img width="50" src='https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png'/>
                    <div className='searchBar'>
                        <SearchBar />
                    </div>
                    <div className='user'>User</div>
                </div>
                <section>
                    {header1}
                    <Header1/>
                </section>
            </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(NestedJSX);
root.render(<HedaderComp />);
