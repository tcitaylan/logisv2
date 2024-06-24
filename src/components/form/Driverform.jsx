import Input from 'components/Input'

export default function DriverForm(){
    return (
        <div>
            <Input label="Name" />
            <Input label="Contact Info" />
            <Input label="Desciption" textarea/>
        </div>
    )
}