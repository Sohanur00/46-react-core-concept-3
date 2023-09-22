

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('form submited')

    }

    return (
        <div className="text-center ">
            <form onSubmit={handleSubmit}>

            <input type="text" name="name" placeholder="Type here" className="input  input-accent mb-2 " />

            <br />

            <input type="email" name="email" placeholder="Type here" className="input  input-accent  mb-2 " />

            <br />

            <input type="phone" name="phone" placeholder="Type here" className="input  input-accent   mb-2" />
            <br />

            <input type="submit" value="submit" className="btn bg-emerald-300" />

            </form>


        </div>
    );
};

export default SimpleForm;