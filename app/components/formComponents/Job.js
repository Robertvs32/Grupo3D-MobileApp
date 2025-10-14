import InputComponent from "../InputComponent";

export default function Job({job, setJob}){
    return(
        <InputComponent
            txtInput="Job"
            txtPlaceholder="Digite aqui"
            setState={setJob}
            value={job}
            iconName="briefcase"
            size={19}
        />
    );
}