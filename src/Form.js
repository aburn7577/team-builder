import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props
    // onChange handler to update the form info
    const onChange = event => {
        //whats being changed
        const { name, value } = event.target
        update(name, value)
    }
    //onSubmit handler submit button and no reload
    const onSubmit = event => {
        // to prevent page reload
        event.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        placeholder="What's your name?"
                        onChange={onChange}
                        minLength='2'
                        maxLength='30' />
                </label>
                <label>Email
                    <input
                        type='text'
                        name='email'
                        value={values.email}
                        placeholder="What's your email?"
                        onChange={onChange}
                        minLength='5'
                        maxLength='20'
                    />
                </label>
                <label> Role
                    <select name='role' onChange={onChange}>
                        <option value=''>Select your role!!</option>
                        <option value='frontend engineer'>Frontend engineer</option>
                        <option value='backend engineer'>Backend engineer</option>
                        <option value='designer'>Designer</option>
                        <option value='learner-student'>Learner-Student</option>
                    </select>
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}