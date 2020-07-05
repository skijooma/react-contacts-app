import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    };

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    };

    render () {

        return (

            <div className = "list-contacts">
                { JSON.stringify(this.state)}
                <div className = "list-contacts-top">
                    <input 
                        className = "search-contacts"
                        type = "text"
                        placeholder = "Search Contacts"
                        value = { this.state.query }
                        onChange = {(event) => this.updateQuery(event.target.value)}
                    />    
                </div>

                <ol className = "contacts-list">
                    {
                        this.props.contacts.map((contact) => (
                            <li key = { contact.id } className = "contact-list-item">
                                <div 
                                    className = "contact-avatar"
                                    style = {{
                                        backgroundImage: `url(${ contact.avatarURL })`
                                    }}
                                >
                                </div>
                                <div className = "contact-details">
                                    <p>{ contact.handle }</p>
                                    <p>{ contact.name }</p>
                                </div>
                                <button 
                                    className = "contact-remove"
                                    onClick = { () => this.props.onDeleteContact(contact) }
                                >
                                    Remove
                                </button>
                            </li>
                        ))
                    }
                </ol>
            </div>    
        );
    }
}

export default ListContacts;