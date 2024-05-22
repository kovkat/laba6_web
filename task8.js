function handleSubmit(event) {
    event.preventDefault();
    form = event.target

    let email = form.elements.email.value.trim()
    let password = form.elements.password.value.trim()

    if (email === "" || password === "") {
        alert("All form fields must be filled in !!!")
    } else {
        let data = {}
        data['email'] = email
        data['password'] = password
        form.reset()
        console.log(data)
    }
}