"use client"
import { useState } from "react"

const useForm = (formStructure: any) => {
    const [formState, setFormState] = useState(formStructure)
    
    const onInputChange = ({ target }: any) => {
        const { name, value } = target
        setFormState({ ...formState, [name]: value })
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);
    }
    return {
        formState,
        onInputChange,
        onSubmit
    }
}

export default useForm